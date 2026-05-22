// Theme persistence and toggle. Sets data-theme on <html> and <body>,
// persists in localStorage under 'pp-theme' (matches the handoff). The
// inline boot script in BaseLayout sets <html data-theme> before paint
// to avoid a flash; this module then mirrors it to <body> and wires the
// navbar #theme-toggle button.
export {};

type Theme = 'light' | 'dark';
const KEY = 'pp-theme';

function read(): Theme {
  try {
    const t = localStorage.getItem(KEY);
    if (t === 'light' || t === 'dark') return t;
  } catch {
    /* ignore */
  }
  return 'light';
}

function syncTooltip(theme: Theme): void {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  const lang = document.body.dataset.lang === 'es' ? 'es' : 'en';
  const tips = {
    'light-en': 'Dark mode',
    'dark-en': 'Light mode',
    'light-es': 'Modo oscuro',
    'dark-es': 'Modo claro',
  } as const;
  btn.setAttribute('data-tip', tips[`${theme}-${lang}` as keyof typeof tips]);
}

function apply(theme: Theme): void {
  document.documentElement.dataset.theme = theme;
  document.body.dataset.theme = theme;
  try {
    localStorage.setItem(KEY, theme);
  } catch {
    /* ignore */
  }
  syncTooltip(theme);
  document.dispatchEvent(new CustomEvent('pp:theme', { detail: { theme } }));
}

function setup(): void {
  apply(read());
  const btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.addEventListener('click', () => {
      apply(read() === 'light' ? 'dark' : 'light');
    });
  }
  document.addEventListener('pp:lang', () => syncTooltip(read()));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setup, { once: true });
} else {
  setup();
}
