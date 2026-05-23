// Navbar scrollspy. Tracks which on-page anchor section is currently in
// view and pins the matching nav item active. On /work/<slug>/ the Work
// item is force-pinned regardless of scroll (handed in via body[data-route]).
// Ported from useScrollSpy in the design handoff prototype.jsx. The manual
// scroll listener + requestAnimationFrame is more deterministic than
// IntersectionObserver when sections are taller than the viewport.

export {};

const NAV_OFFSET = 80;
const PROBE = NAV_OFFSET + 24;

interface Entry {
  anchor: string;
  nav: string;
}

// Document-order list of tracked sections on the home page.
const ORDER: Entry[] = [
  { anchor: 'sistemas-destacados', nav: 'work' },
  { anchor: 'stack', nav: 'stack' },
  { anchor: 'experience', nav: 'experience' },
  { anchor: 'education', nav: 'education' },
  { anchor: 'contact', nav: 'contact' },
];

function pin(navId: string): void {
  document.querySelectorAll<HTMLAnchorElement>('a[data-spy]').forEach((a) => {
    a.classList.toggle('active', a.dataset.spy === navId);
  });
}

function compute(): void {
  const nearBottom =
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - 4;
  if (nearBottom) {
    pin(ORDER[ORDER.length - 1].nav);
    return;
  }
  let current: Entry | null = null;
  for (const entry of ORDER) {
    const el = document.getElementById(entry.anchor);
    if (!el) continue;
    if (el.getBoundingClientRect().top - PROBE <= 0) current = entry;
    else break;
  }
  pin(current ? current.nav : 'home');
}

let ticking = false;
function onScroll(): void {
  if (ticking) return;
  ticking = true;
  window.requestAnimationFrame(() => {
    ticking = false;
    compute();
  });
}

function setup(): void {
  const route = document.body.dataset.route;
  if (route === 'work') {
    pin('work');
    return;
  }
  if (route !== 'home') {
    pin('home');
    return;
  }
  compute();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setup, { once: true });
} else {
  setup();
}
