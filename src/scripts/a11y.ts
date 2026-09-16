// Accessibility panel. Persists three user settings under their handoff
// localStorage keys (a11y-font, a11y-lens, a11y-cb) and
// applies them at runtime:
//   * Font size  → body[data-a11y-text='lg'|'xl']  triggers CSS zoom on #app.
//   * Colorblind → #app[data-a11y-cb='<filter>']   wraps the app in an SVG filter.
//   * Cursor lens → DOM clone of #app inside a circular div following the cursor.
// Behaviour ported from A11yPanel in the design handoff prototype.jsx.

export {};

type FontSize = 'md' | 'lg' | 'xl';
type ColorblindMode = 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia' | 'achromatopsia';

const KEY_FONT = 'a11y-font';
const KEY_LENS = 'a11y-lens';
const KEY_CB = 'a11y-cb';

const LENS_SIZE = 220;
const LENS_SCALE = 1.9;

function readFont(): FontSize {
  const v = safeGet(KEY_FONT);
  return v === 'lg' || v === 'xl' ? v : 'md';
}
function readLens(): boolean {
  return safeGet(KEY_LENS) === '1';
}
function readCb(): ColorblindMode {
  const v = safeGet(KEY_CB);
  if (v === 'protanopia' || v === 'deuteranopia' || v === 'tritanopia' || v === 'achromatopsia') return v;
  return 'none';
}
function safeGet(k: string): string | null {
  try { return localStorage.getItem(k); } catch { return null; }
}
function safeSet(k: string, v: string): void {
  try { localStorage.setItem(k, v); } catch { /* ignore */ }
}

/* ── Font scaling ────────────────────────────────────────────────── */
function applyFont(size: FontSize): void {
  if (size === 'md') document.body.removeAttribute('data-a11y-text');
  else document.body.setAttribute('data-a11y-text', size);
  safeSet(KEY_FONT, size);
}

/* ── Colorblind filter ───────────────────────────────────────────── */
function applyCb(mode: ColorblindMode): void {
  const app = document.getElementById('app');
  if (!app) return;
  if (mode === 'none') app.removeAttribute('data-a11y-cb');
  else app.setAttribute('data-a11y-cb', mode);
  safeSet(KEY_CB, mode);
}

/* ── Cursor lens ─────────────────────────────────────────────────── */
let lensTeardown: (() => void) | null = null;
function applyLens(on: boolean): void {
  safeSet(KEY_LENS, on ? '1' : '0');
  if (!on) {
    lensTeardown?.();
    lensTeardown = null;
    return;
  }
  if (lensTeardown) return; // already on

  const wrap = document.createElement('div');
  wrap.className = 'a11y-lens';
  wrap.style.cssText = `position:fixed; width:${LENS_SIZE}px; height:${LENS_SIZE}px; border-radius:50%; overflow:hidden; pointer-events:none; z-index:9999; box-shadow:0 6px 28px rgba(0,0,0,0.28), 0 0 0 2px var(--fg) inset; background:var(--bg); opacity:0; transition:opacity 0.12s; left:-9999px; top:-9999px;`;
  const inner = document.createElement('div');
  inner.style.cssText = `position:absolute; left:0; top:0; transform-origin:0 0; transform:scale(${LENS_SCALE}); width:100vw; height:100vh; pointer-events:none;`;

  const reclone = (): void => {
    const app = document.getElementById('app');
    if (!app) return;
    inner.innerHTML = '';
    const cloned = app.cloneNode(true) as HTMLElement;
    // Strip ids so the clone doesn't fight the originals (#a11y-cb-select,
    // #theme-toggle, #a11y-panel, etc.). Clones are pointer-events:none so
    // they were already non-interactive, but unique-id discipline matters
    // for a11y tools and automated selectors too.
    cloned.removeAttribute('id');
    cloned.querySelectorAll('[id]').forEach((el) => el.removeAttribute('id'));
    inner.appendChild(cloned);
  };
  reclone();
  wrap.appendChild(inner);
  document.body.appendChild(wrap);

  let visible = false;
  let raf = 0;
  let cloneT: ReturnType<typeof setTimeout> | null = null;
  let lastX = -9999;
  let lastY = -9999;

  // The clone inside `inner` is laid out in document space, so the translate
  // must use document coords (clientX + scrollX, clientY + scrollY) — not
  // viewport coords — or the lens drifts as the page scrolls.
  const positionLens = (): void => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      const sx = window.scrollX;
      const sy = window.scrollY;
      wrap.style.left = `${lastX - LENS_SIZE / 2}px`;
      wrap.style.top = `${lastY - LENS_SIZE / 2}px`;
      inner.style.transform = `translate(${-(lastX + sx) * LENS_SCALE + LENS_SIZE / 2}px, ${-(lastY + sy) * LENS_SCALE + LENS_SIZE / 2}px) scale(${LENS_SCALE})`;
    });
  };

  const onMove = (e: MouseEvent): void => {
    const target = e.target instanceof Element ? e.target : null;
    if (target?.closest('#a11y-panel, #a11y-toggle')) {
      wrap.style.opacity = '0';
      visible = false;
      return;
    }
    if (!visible) {
      wrap.style.opacity = '1';
      visible = true;
    }
    lastX = e.clientX;
    lastY = e.clientY;
    positionLens();
  };
  const onScroll = (): void => {
    positionLens();
  };
  const onLeave = (): void => {
    wrap.style.opacity = '0';
    visible = false;
  };
  const obs = new MutationObserver(() => {
    if (cloneT) clearTimeout(cloneT);
    cloneT = setTimeout(reclone, 120);
  });
  const app = document.getElementById('app');
  if (app) obs.observe(app, { subtree: true, childList: true, characterData: true });

  window.addEventListener('mousemove', onMove);
  document.addEventListener('mouseleave', onLeave);
  window.addEventListener('hashchange', reclone);
  window.addEventListener('scroll', onScroll, { passive: true });

  lensTeardown = (): void => {
    window.removeEventListener('mousemove', onMove);
    document.removeEventListener('mouseleave', onLeave);
    window.removeEventListener('hashchange', reclone);
    window.removeEventListener('scroll', onScroll);
    obs.disconnect();
    if (cloneT) clearTimeout(cloneT);
    cancelAnimationFrame(raf);
    wrap.remove();
  };
}

/* ── Panel state + UI wiring ─────────────────────────────────────── */
interface State {
  font: FontSize;
  lens: boolean;
  cb: ColorblindMode;
}

function currentState(): State {
  return { font: readFont(), lens: readLens(), cb: readCb() };
}

function syncToggleButtonState(state: State): void {
  const anyOn = state.font !== 'md' || state.lens || state.cb !== 'none';
  const btn = document.getElementById('a11y-toggle');
  if (btn) btn.dataset.active = anyOn ? '1' : '0';
}

function syncPanelControls(state: State): void {
  document.querySelectorAll<HTMLButtonElement>('[data-a11y-font]').forEach((b) => {
    b.classList.toggle('on', b.dataset.a11yFont === state.font);
  });
  const lensBtn = document.getElementById('a11y-lens-toggle');
  if (lensBtn) {
    lensBtn.classList.toggle('on', state.lens);
    lensBtn.setAttribute('aria-pressed', state.lens ? 'true' : 'false');
    syncToggleLabel(lensBtn, state.lens);
  }
  const cbSelect = document.getElementById('a11y-cb-select') as HTMLSelectElement | null;
  if (cbSelect) cbSelect.value = state.cb;
  const resetRow = document.getElementById('a11y-reset-row');
  if (resetRow) {
    const anyOn = state.font !== 'md' || state.lens || state.cb !== 'none';
    resetRow.style.display = anyOn ? 'flex' : 'none';
  }
}

function syncToggleLabel(btn: HTMLElement, on: boolean): void {
  const lang = document.body.dataset.lang === 'es' ? 'es' : 'en';
  const labels = {
    'on-en': 'On', 'off-en': 'Off',
    'on-es': 'Activado', 'off-es': 'Desactivado',
  } as const;
  btn.textContent = labels[`${on ? 'on' : 'off'}-${lang}` as keyof typeof labels];
}

function openPanel(open: boolean): void {
  const panel = document.getElementById('a11y-panel');
  const btn = document.getElementById('a11y-toggle');
  if (!panel || !btn) return;
  panel.hidden = !open;
  btn.setAttribute('aria-expanded', open ? 'true' : 'false');
}

function setState(patch: Partial<State>): void {
  const s = currentState();
  const next: State = { ...s, ...patch };
  if (patch.font !== undefined) applyFont(next.font);
  if (patch.cb !== undefined) applyCb(next.cb);
  if (patch.lens !== undefined) applyLens(next.lens);
  syncToggleButtonState(next);
  syncPanelControls(next);
}

function reset(): void {
  setState({ font: 'md', lens: false, cb: 'none' });
}

function setup(): void {
  // Apply persisted state on boot.
  const s = currentState();
  applyFont(s.font);
  applyCb(s.cb);
  if (s.lens) applyLens(true);
  syncToggleButtonState(s);
  syncPanelControls(s);

  // Wire panel open/close.
  const btn = document.getElementById('a11y-toggle');
  if (btn) {
    btn.addEventListener('click', () => {
      const panel = document.getElementById('a11y-panel');
      openPanel(panel?.hidden ?? true);
    });
  }
  const closeBtn = document.getElementById('a11y-close');
  if (closeBtn) closeBtn.addEventListener('click', () => openPanel(false));

  // Font segmented control.
  document.querySelectorAll<HTMLButtonElement>('[data-a11y-font]').forEach((b) => {
    b.addEventListener('click', () => {
      const v = b.dataset.a11yFont;
      if (v === 'md' || v === 'lg' || v === 'xl') setState({ font: v });
    });
  });
  // Lens toggle.
  const lensBtn = document.getElementById('a11y-lens-toggle');
  if (lensBtn) lensBtn.addEventListener('click', () => setState({ lens: lensTeardown === null }));
  // Colorblind dropdown.
  const cbSelect = document.getElementById('a11y-cb-select') as HTMLSelectElement | null;
  if (cbSelect) {
    cbSelect.addEventListener('change', () => {
      const v = cbSelect.value as ColorblindMode;
      setState({ cb: v });
    });
  }
  // Reset.
  const resetBtn = document.getElementById('a11y-reset');
  if (resetBtn) resetBtn.addEventListener('click', reset);

  // Re-sync toggle labels when language changes.
  document.addEventListener('pp:lang', () => syncPanelControls(currentState()));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setup, { once: true });
} else {
  setup();
}
