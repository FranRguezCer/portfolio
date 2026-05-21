# Portfolio — Francisco Rodriguez

Personal portfolio site, built with Astro 5, Tailwind CSS 4, MDX content collections and TypeScript strict mode. Hosted on GitHub Pages under the `/portfolio/` subpath.

Live URL (after deploy): https://franrguezcer.github.io/portfolio/

## Stack

- [Astro 5](https://astro.build/) — static site framework with content collections and i18n routing.
- [Tailwind CSS 4](https://tailwindcss.com/) — CSS-first design tokens via the `@theme` directive.
- [MDX](https://mdxjs.com/) — markdown with embeddable components, used as the content layer.
- Zod schemas via `astro:content` — build-time validation of frontmatter.
- TypeScript in strict mode.
- Deployed via GitHub Actions (`withastro/action@v3`) to GitHub Pages.

## Project layout

```
.
├── astro.config.mjs          # site, base, trailingSlash, i18n, integrations
├── package.json              # deps + scripts
├── tsconfig.json             # strict mode, extends astro/strict
├── public/                   # static assets served as-is
│   ├── cv/                   # downloadable CV PDFs
│   ├── img/                  # favicons, og-default, apple-touch-icon
│   ├── .nojekyll             # disable Jekyll on GitHub Pages
│   └── robots.txt
├── src/
│   ├── assets/               # processed assets (photo, project images, icons)
│   ├── components/           # 9 reusable .astro components
│   ├── content/
│   │   ├── pages/{en,es}/    # page intros (home, contact, ...)
│   │   ├── projects/{en,es}/ # 1 .mdx per project
│   │   ├── experience/{en,es}/
│   │   ├── education/{en,es}/
│   │   └── skills/{en,es}/
│   ├── content.config.ts     # Zod schemas
│   ├── i18n/ui.ts            # bilingual UI string dictionary + t() helper
│   ├── layouts/BaseLayout.astro
│   ├── pages/                # 7 EN pages + src/pages/es/ mirror
│   └── styles/global.css     # Tailwind @import + design tokens
├── docs/HANDOFF.md           # handoff brief for design iteration
└── .github/workflows/deploy.yml
```

## Local development

```bash
git clone https://github.com/FranRguezCer/portfolio.git
cd portfolio
npm install
npm run dev
```

Open http://localhost:4321/portfolio/ for English and http://localhost:4321/portfolio/es/ for Spanish.

Available scripts:

| Command             | Purpose                                  |
| ------------------- | ---------------------------------------- |
| `npm run dev`       | Dev server with hot reload               |
| `npm run build`     | Produce a static build at `dist/`        |
| `npm run preview`   | Serve the static build locally           |
| `npx astro check`   | Type and content-schema validation       |

## Editing content

Content lives in MDX files under `src/content/<collection>/<locale>/`. Each file has YAML frontmatter validated by Zod (schemas in `src/content.config.ts`) plus a markdown body.

### Add a project

1. Create `src/content/projects/en/09-<slug>.mdx`:

   ```mdx
   ---
   title: My new project
   summary: One-paragraph summary that shows on the card.
   order: 9
   year: 2026
   image: ../../../assets/projects/<slug>.png
   link: https://github.com/FranRguezCer/<repo>
   linkType: repo
   tech:
     - Python
     - Pandas
   featured: false
   locale: en
   ---

   Body paragraphs describing the project. Plain markdown.
   ```

2. Drop the image at `src/assets/projects/<slug>.png` (Astro Image will generate WebP variants).
3. Create the Spanish mirror at `src/content/projects/es/09-<slug>.mdx` with translated copy and `locale: es`.
4. `npm run build` — Zod validates frontmatter; failures point at the file and the missing/invalid field.

### Add an experience entry, education entry, or skill

Same pattern as a project, against the corresponding collection (`experience`, `education`, `skills`). Frontmatter shape is enforced by the schema in `src/content.config.ts` — open it to see the fields.

### Edit UI strings

Short labels (nav, buttons, microcopy) live in `src/i18n/ui.ts`. Both locales are in the same file under `ui.en` and `ui.es`. Use the helper `t(locale, key)` from any component.

### Add a third locale

1. Add the code to `locales` in `astro.config.mjs` and to `src/i18n/ui.ts`.
2. Update the Zod `locale` enum in `src/content.config.ts`.
3. Mirror the `en/` content under the new locale folder per collection.
4. Mirror `src/pages/en/*` under `src/pages/<new>/`.

## Conventions

- Conventional Commits (`feat`, `fix`, `refactor`, `chore`, `style`, `docs`, `ci`, ...). No emojis. No Co-Authored-By.
- All text content in English by default; Castilian Spanish (es-ES) for the ES locale; technical terms (ML, ETL, dashboard, Data Scientist, ...) stay in English when industry-standard.
- All external links use `target="_blank" rel="noopener noreferrer"`.
- Decorative icons get `aria-hidden="true"`.
- Imagery served via `astro:assets <Image>` for automatic WebP and responsive widths.

## Deploying to GitHub Pages

The deploy workflow `.github/workflows/deploy.yml` runs on push to `master` and manual `workflow_dispatch`. Before the first deploy:

1. In the GitHub repo settings, set **Pages -> Build and deployment -> Source** to **GitHub Actions**.
2. Merge `dev` into `master` and push.
3. The workflow builds with Astro and deploys via `actions/deploy-pages@v4`.

The workflow does not trigger on `dev` or feature branches by design.

## Accessibility and performance

- WCAG 2.2 AA target. Skip-to-content link in `BaseLayout`. Focus-visible styles on every interactive element.
- Heading hierarchy is single-h1 per page. Semantic landmarks: `<header> <nav> <main> <footer>` plus `<address>` on the contact page.
- Images use explicit dimensions to prevent layout shift; `<Image>` produces WebP responsive sources.
- Open Graph and JSON-LD `Person` schema in `BaseLayout`. Sitemap generated by `@astrojs/sitemap`.

## License

Released under the [MIT License](LICENSE).
