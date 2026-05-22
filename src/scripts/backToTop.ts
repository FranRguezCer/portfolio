// Back-to-top button behaviour. Reveal threshold matches the handoff
// (480 px scroll), smooth-scrolls respecting prefers-reduced-motion,
// and clears any anchor hash from the URL on click. The bilingual
// tooltip + aria-label are handled by src/scripts/lang.ts via the
// data-tip-en / data-tip-es attributes on the button itself.

export {};

const THRESHOLD = 480;

function setup(): void {
  const btn = document.getElementById('back-top');
  if (!btn) return;

  let ticking = false;

  const syncVisibility = (): void => {
    const y = window.scrollY || document.documentElement.scrollTop;
    btn.classList.toggle('is-visible', y > THRESHOLD);
    ticking = false;
  };

  const onScroll = (): void => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(syncVisibility);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  syncVisibility();

  btn.addEventListener('click', () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    if (location.hash && location.hash !== '#/' && location.hash !== '#') {
      history.replaceState(null, '', location.pathname + location.search);
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setup, { once: true });
} else {
  setup();
}
