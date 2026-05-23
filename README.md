# Portfolio: Francisco Rodríguez

Personal portfolio site. Public companion to my CV.

Live at https://franrguezcer.github.io/portfolio/

## Stack

- Astro 5, deployed to GitHub Pages.
- Plain CSS with design tokens, light and dark themes.
- TypeScript (strict) for the runtime scripts and the bilingual data module.

## Structure

```
src/
├── data/         # site.ts (content), types.ts (interfaces)
├── layouts/      # BaseLayout.astro
├── components/   # Navbar, Footer, sections/*
├── scripts/      # theme, lang, scrollspy, a11y, backToTop
├── styles/       # global.css
└── pages/        # index, work/[slug], 404

public/
├── cv/           # Francisco_Rodriguez_CV_{en,es}.pdf
├── icons/        # local stack SVGs (mask-image)
└── img/          # favicons, OG image, banner
```

All bilingual copy lives in `src/data/site.ts`.

## Functionality

Long-scroll home with anchor sections (work, stack, experience, education, contact) plus dynamic case pages at `/work/<slug>/`. Language (EN / ES) and theme (light / dark) are runtime toggles persisted in `localStorage`; the URL stays the same when you switch language.

## Accessibility

Targets WCAG 2.2 AA. The accessibility panel in the navbar exposes font scaling, simulated colorblind filters, a cursor magnifier and a cursor halo. All settings persist across sessions and animations respect `prefers-reduced-motion`.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:4321/portfolio/.

## License

MIT
