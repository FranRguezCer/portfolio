// Runtime language toggle. The whole HTML tree is pre-rendered in English;
// every translatable text node carries data-en + data-es (or the helper
// variants data-tip-en/data-tip-es + data-aria-en/data-aria-es). On boot
// this module reads localStorage.pp-lang, sets body[data-lang], and walks
// the DOM swapping textContent / aria-label / tooltip text to the active
// locale. Lives entirely in the URL of '/' or '/work/<slug>/'; never
// changes the URL when toggled (matches the design handoff intent).

export {};

type Lang = 'en' | 'es';
const KEY = 'pp-lang';

function read(): Lang {
  try {
    const l = localStorage.getItem(KEY);
    if (l === 'en' || l === 'es') return l;
  } catch {
    /* ignore */
  }
  return 'en';
}

function apply(lang: Lang): void {
  document.body.dataset.lang = lang;
  document.documentElement.lang = lang;
  try {
    localStorage.setItem(KEY, lang);
  } catch {
    /* ignore */
  }

  // Plain text swap on every dual-attribute node.
  document.querySelectorAll<HTMLElement>('[data-en][data-es]').forEach((el) => {
    const value = el.dataset[lang];
    if (typeof value === 'string') el.textContent = value;
  });

  // Tooltip swap (data-tip is what the CSS pseudo reads).
  const tipKey = lang === 'es' ? 'tipEs' : 'tipEn';
  document.querySelectorAll<HTMLElement>('[data-tip-en][data-tip-es]').forEach((el) => {
    const value = el.dataset[tipKey];
    if (typeof value === 'string') el.setAttribute('data-tip', value);
  });

  // aria-label swap.
  const ariaKey = lang === 'es' ? 'ariaEs' : 'ariaEn';
  document.querySelectorAll<HTMLElement>('[data-aria-en][data-aria-es]').forEach((el) => {
    const value = el.dataset[ariaKey];
    if (typeof value === 'string') el.setAttribute('aria-label', value);
  });

  // href swap (used by the bilingual CV link).
  const hrefKey = lang === 'es' ? 'hrefEs' : 'hrefEn';
  document.querySelectorAll<HTMLAnchorElement>('a[data-href-en][data-href-es]').forEach((a) => {
    const value = a.dataset[hrefKey];
    if (typeof value === 'string') a.href = value;
  });

  // Segmented toggle on-state.
  document.querySelectorAll<HTMLButtonElement>('.seg [data-lang]').forEach((btn) => {
    btn.classList.toggle('on', btn.dataset.lang === lang);
  });

  document.dispatchEvent(new CustomEvent('pp:lang', { detail: { lang } }));
}

function setup(): void {
  apply(read());
  document.querySelectorAll<HTMLButtonElement>('.seg [data-lang]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const l = btn.dataset.lang;
      if (l === 'en' || l === 'es') apply(l);
    });
  });
}

declare global {
  interface Window {
    __setLang?: (l: Lang) => void;
  }
}

window.__setLang = apply;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setup, { once: true });
} else {
  setup();
}
