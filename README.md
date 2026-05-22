# Portfolio — Francisco Rodríguez

Personal portfolio site, built with Astro 5 and plain CSS over a single typed bilingual data module. Hosted on GitHub Pages under the `/portfolio/` subpath.

Live URL (after deploy): https://franrguezcer.github.io/portfolio/

## Design source

The visual surface is the verbatim output of a Claude Design handoff (`design_handoff_portfolio`). Tokens, copy, layout, scrollspy and accessibility behaviour come from `prototype.html` + `prototype.jsx` + `prototype-pages.jsx` + `mocks-shared.jsx` + `styles.css`. The handoff README declares the copy final ("do not paraphrase") so the data module is a 1:1 port, not a rewrite.

## Stack

- [Astro 5](https://astro.build/) — static site framework, base path `/portfolio/`, trailing slashes always.
- Plain CSS with `:root` design tokens — no Tailwind, no preprocessor. Light + dark themes via `[data-theme]`.
- TypeScript in strict mode for the runtime scripts and the data module.
- Plus Jakarta Sans + JetBrains Mono via Google Fonts (preconnect + display=swap).
- Simple Icons SVG masks rendered at runtime from `cdn.simpleicons.org`.
- Deployed via GitHub Actions (`.github/workflows/deploy.yml`) to GitHub Pages.

## Architecture

Single-page long-scroll home with anchor sections (`#sistemas-destacados`, `#stack`, `#experience`, `#education`, `#contact`) plus a dynamic case-detail route under `/work/<slug>/` (3 cases). Language is a **runtime toggle** persisted in `localStorage.pp-lang`; the URL never changes when you switch EN/ES.

### Project layout

```
.
├── astro.config.mjs                     # site, base, trailingSlash, integrations
├── package.json                         # astro + @astrojs/mdx + @astrojs/sitemap only
├── tsconfig.json                        # astro/strict
├── docs/HANDOFF.md                      # pre-handoff brief, kept for history
├── public/
│   ├── cv/                              # downloadable CV PDFs
│   ├── img/                             # favicons, og-default, banner-roque-muchachos
│   ├── .nojekyll
│   └── robots.txt
├── src/
│   ├── data/
│   │   ├── site.ts                      # STR, WORK, OTHER_LINES, EXPERIENCE, EDUCATION, HOME_STACK
│   │   └── types.ts                     # Bilingual<T> + section interfaces
│   ├── layouts/BaseLayout.astro         # head, fonts, JSON-LD, init script, slots
│   ├── components/
│   │   ├── Navbar.astro                 # scrollspy nav + lang/theme/a11y toggles
│   │   ├── Footer.astro                 # email + linkedin + github
│   │   ├── A11ySvgFilters.astro         # colorblind feColorMatrix filters
│   │   ├── BackToTopButton.astro        # fixed button with bilingual tooltip
│   │   └── sections/                    # Hero, WorkCards, OtherLines, StackMarquee,
│   │                                    # Experience, Education, Contact, ClosingBanner
│   ├── scripts/
│   │   ├── theme.ts                     # pp-theme persistence + icon swap
│   │   ├── lang.ts                      # pp-lang persistence + DOM swap
│   │   ├── scrollspy.ts                 # active nav pin based on viewport probe
│   │   ├── a11y.ts                      # font / lens / colorblind / halo controls
│   │   └── backToTop.ts                 # 480px reveal threshold + smooth scroll
│   ├── styles/global.css                # design tokens + chrome + sections + a11y
│   └── pages/
│       ├── index.astro                  # long-scroll home
│       ├── work/[slug].astro            # case detail (getStaticPaths from WORK)
│       └── 404.astro
└── .github/workflows/deploy.yml         # push to master → GitHub Pages
```

### Runtime contract

The HTML is pre-rendered in English. Every translatable element carries `data-en` / `data-es` (and `data-tip-en` / `data-tip-es` for tooltips, `data-aria-en` / `data-aria-es` for aria-labels). On boot:

1. An inline `<script>` in `<head>` reads `pp-theme` from localStorage and sets `<html data-theme>` before the body paints — no flash of wrong palette.
2. Once the body is parsed, `theme.ts` mirrors the theme onto `<body>` and wires the navbar `#theme-toggle`.
3. `lang.ts` reads `pp-lang`, sets `<body data-lang>` and walks `[data-en][data-es]` (and the tip / aria variants) swapping content in place. Wires the segmented `EN / ES` buttons.
4. `scrollspy.ts` tracks the five home anchors with a manual scroll probe at `NAV_OFFSET + 24` (80 + 24) and pins the matching nav item. On `/work/<slug>/` it force-pins **Work**.
5. `a11y.ts` reads the four `a11y-*` keys, applies font scaling (via CSS `zoom` on `#app`), colorblind filter (SVG `feColorMatrix` wrapping `#app`), cursor magnifier (DOM clone) and cursor halo.
6. `backToTop.ts` shows the button past `480px` of scroll, smooth-scrolls to top, clears any hash from the URL.

### localStorage keys

| Key            | Purpose                                         | Default   |
| -------------- | ----------------------------------------------- | --------- |
| `pp-theme`     | `'light'` or `'dark'`                           | `'light'` |
| `pp-lang`      | `'en'` or `'es'`                                | `'en'`    |
| `a11y-font`    | `'md'`, `'lg'` or `'xl'` (CSS zoom on `#app`)   | `'md'`    |
| `a11y-lens`    | `'1'` enables the cursor magnifier              | unset     |
| `a11y-cb`      | `'none'`, `'protanopia'`, `'deuteranopia'`, `'tritanopia'`, `'achromatopsia'` | `'none'`  |
| `a11y-halo`    | `'1'` enables the cursor halo                   | unset     |

## Local development

```bash
git clone https://github.com/FranRguezCer/portfolio.git
cd portfolio
npm install
npm run dev
```

Open http://localhost:4321/portfolio/. The same URL serves both languages — toggle with the `EN / ES` chip in the navbar.

Available scripts:

| Command            | Purpose                                  |
| ------------------ | ---------------------------------------- |
| `npm run dev`      | Dev server with hot reload               |
| `npm run build`    | Produce a static build at `dist/`        |
| `npm run preview`  | Serve the static build locally           |
| `npx astro check`  | Type-check Astro + TS                    |

## Editing content

All bilingual copy lives in `src/data/site.ts` as exported `const`s with strict types from `src/data/types.ts`. The handoff treats the copy as final, so edit it only when the design source changes upstream.

### Add a case study

1. Append a new entry to `WORK` in `src/data/site.ts` with `id`, `slug`, `title`, `domain`, `oneLiner`, `body`, `notesLabel`, `notes` (each as `{ en, es }` where the type calls for it) and `stack`.
2. `npm run build` — Astro picks up the new slug through `getStaticPaths` and emits `/work/<slug>/index.html` automatically.

### Add an experience or education entry

Add an `ExperienceEntry` or `EducationEntry` (see `src/data/types.ts`) to the corresponding array. Bilingual fields are typed; TypeScript flags any missing translation at build time.

### Tune the stack carousel

`HOME_STACK` lists 14 technologies. Each entry has a `label` and a `slug` that maps to a Simple Icons identifier (e.g. `apachekafka`). Set `slug` to `null` for a mono-text fallback tile.

### Adjust UI / chrome strings

Navbar labels, section headers, eyebrow text, profile card labels and microcopy are co-located with the markup that uses them — search for `data-en` / `data-es` in `src/components/`. The site dictionary (`STR` in `src/data/site.ts`) is the source for everything that the prototype emits from `STR[lang]`.

## Conventions

- Conventional Commits (`feat`, `fix`, `refactor`, `chore`, `style`, `docs`, `ci`, ...). No emojis. No Co-Authored-By trailers.
- Castilian Spanish (es-ES) for the ES locale. Technical terms (ML, ETL, dashboard, Data Scientist, ...) stay in English when industry-standard.
- All external links use `target="_blank" rel="noopener"`.
- Decorative icons carry `aria-hidden="true"`.
- All UI text that differs between languages MUST be wired through `data-en` / `data-es` (and tip / aria variants if applicable). Anything else won't swap at runtime.

## Deploying to GitHub Pages

The deploy workflow `.github/workflows/deploy.yml` runs on push to `master` and manual `workflow_dispatch`:

1. In the GitHub repo settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.
2. Merge `dev` into `master` and push.
3. The workflow builds with Astro and deploys via `actions/deploy-pages@v4`.

The workflow does not trigger on `dev` or feature branches by design.

## Accessibility and performance

- WCAG 2.2 AA target. Focus-visible warm outline on every interactive element.
- Heading hierarchy is single-h1 per page. Semantic landmarks: `<nav>` + `<main>` + `<footer>` + `<aside>` on the hero side card.
- Accessibility panel exposes font scaling, simulated colorblind filters, cursor magnifier and cursor halo, all persisted to localStorage.
- All animations respect `prefers-reduced-motion: reduce` (marquee, back-to-top bob, route transitions, smooth scroll).
- Open Graph + JSON-LD `Person` schema in `BaseLayout`. Sitemap generated by `@astrojs/sitemap`.

## License

Released under the [MIT License](LICENSE).
