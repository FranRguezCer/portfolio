# Portfolio -- Handoff to Claude Design

> Static personal portfolio for Francisco Rodriguez, Data Scientist.
> Source: https://github.com/FranRguezCer/portfolio
> Live (post-promotion): https://franrguezcer.github.io/portfolio/
> Stack: Astro 5 + Tailwind CSS 4 + MDX content collections + TypeScript strict.
> Audience: tech recruiters, hiring managers, data and ML peers.

---

## 1. Brief

Francisco Rodriguez is a Data Scientist with a background in physics and mathematics, specializing in machine learning, ETL automation and advanced analytics. This portfolio is his primary professional presence: it presents eight real projects spanning ETL pipelines, predictive modeling, deep learning, NLP and interactive dashboards, supported by a structured experience and education timeline. What makes it different from generic developer portfolios is its data-centric framing -- outcomes are expressed in technical terms (pipeline accuracy, model metrics, dataset scale) rather than vague impact statements. The site is bilingual (English default, Spanish alternate) with content parity enforced at the schema level, reflecting the owner's dual professional market in Spain and internationally.

---

## 2. Content map

### Routes

| Route (EN) | Route (ES) | Page |
|---|---|---|
| `/portfolio/` | `/portfolio/es/` | Home |
| `/portfolio/projects/` | `/portfolio/es/projects/` | Projects |
| `/portfolio/skills/` | `/portfolio/es/skills/` | Skills |
| `/portfolio/experience/` | `/portfolio/es/experience/` | Experience |
| `/portfolio/education/` | `/portfolio/es/education/` | Education |
| `/portfolio/contact/` | `/portfolio/es/contact/` | Contact |
| `/portfolio/404/` | `/portfolio/es/404/` | Not found |

Total unique pages: 14 (7 routes x 2 locales).

### Content collections

**`pages`** -- 4 entries total (2 per locale):

- `en/home` -- hero intro and description meta
- `en/contact` -- contact section prose
- `es/home` -- Spanish equivalent
- `es/contact` -- Spanish equivalent

**`projects`** -- 16 entries total (8 per locale):

| Slug | Title (EN) | featured |
|---|---|---|
| `en/01-amzn-stocks` | Amazon Stocks Predictions Pipeline with Airflow | true |
| `en/02-ifood` | Statistical Analysis of a Marketing Dataset | false |
| `en/03-diabetes` | Predictive Modeling for Diabetes | false |
| `en/04-covid` | COVID-19 Vaccine Tracker Dashboard | false |
| `en/05-waste` | Waste Management Statistics Dashboard -- La Palma | true |
| `en/06-xray` | X-Ray Pneumonia Diagnosis with Deep Learning | true |
| `en/07-nlp` | Data Jobs Offers: End-to-End Analysis with Web Scraping and NLP | false |
| `en/08-anki` | Flashcards Anki Generator with LangChain and OpenAI API | false |

Spanish entries mirror the above with the same slugs under `es/`.

**`experience`** -- 4 entries total (2 per locale):

- `en/01-cabildo` -- primary role
- `en/02-tutor` -- secondary/teaching role
- Spanish equivalents

**`education`** -- 6 entries total (3 per locale):

- `en/01-msc-data-science` -- MSc degree (`kind: degree`)
- `en/02-bsc-physics` -- BSc degree (`kind: degree`)
- `en/03-courses` -- relevant courses listing (`kind: courses`)
- Spanish equivalents

**`skills`** -- 14 entries total (7 per locale):

- `python`, `r`, `sql`, `data-visualization`, `excel`, `git`, `docker`
- Spanish equivalents

### UI dictionary

26 keys per locale (52 total). Key groups: `nav.*` (9), `cta.*` (8), `section.*` (7), `contact.*` (3), `lang.*` (3), `footer.*` (1), `a11y.*` (1), `date.*` (1).

---

## 3. Aesthetic brief

Explicit constraints from the owner:

- **Style**: minimalist, professional, sober. No decorative noise.
- **No emojis** anywhere -- code, copy, microcopy, filenames, commits. This is absolute.
- **Typography**: editorial and legible; maximum 2 type families. Current placeholder is Inter for both body and display; Claude Design should propose a proper pairing.
- **Palette**: neutrals-first with at most one accent color. Do not introduce `#007bff` (Bootstrap blue) or any other generic/recognizable system palette. The current tokens are neutral placeholders -- propose a considered palette.
- **Density**: generous white space, clear typographic hierarchy, minimal decoration. The current layout already uses `max-inline-size: 72rem` containers; this is a good baseline.
- **Iconography**: inline SVG via `?raw` import (Lucide-style vectors). No Font Awesome, no icon fonts, no raster icons.
- **Dark mode**: desirable but not currently implemented. If Claude Design adds it, it must be a CSS-only `@media (prefers-color-scheme: dark)` or class-toggle strategy that works without JavaScript by default.
- **Animations**: subtle only. Transitions already use `0.15s ease-out`. Keep that register.

---

## 4. Tone and voice

### English

Professional, data-centric, outcome-focused. First-person in the home/about section, neutral in experience and education entries.

Sample sentences pulled directly from MDX content:

- "End-to-end ETL workflow orchestrated by an Airflow DAG running in Docker. The pipeline fetches Amazon (AMZN) stock data from the Alpha Vantage API, stores it in PostgreSQL, preprocesses it, trains a Histogram Gradient Boosting Regressor model and visualizes predictions alongside performance metrics."
- "I am a Data Scientist specializing in machine learning, data engineering and advanced analytics. With a strong foundation in physics and mathematics, I apply data-driven solutions to complex problems."
- "Statistical analysis of a marketing dataset using an R Markdown notebook. The project includes exploratory data analysis (EDA), hypothesis testing and data visualization to uncover key insights about consumer behavior and marketing campaign effectiveness."

The voice avoids superlatives and buzzwords. Technical terms (ETL, DAG, EDA, HGBR) are used without apology because the primary audience is technical.

### Spanish

Castilian Spanish (`es-ES`). No voseo, no Latinamerican regional variants. Technical terms -- Python, Docker, ETL, dashboard, pipeline -- remain in English as they are industry-standard and the Spanish versions do not replace them. UI strings do translate: "Ver repositorio", "Proyectos seleccionados", "Formacion", "Sobre mi".

---

## 5. Current design tokens

These CSS custom properties live in `src/styles/global.css` under the Tailwind 4 `@theme` block. They are NEUTRAL PLACEHOLDERS. Claude Design should treat them as the starting shape, not the final values.

```json
{
  "colors": {
    "bg": "#ffffff",
    "fg": "#0f172a",
    "muted": "#475569",
    "surface": "#f8fafc",
    "border": "#e2e8f0",
    "accent": "#0f172a"
  },
  "fonts": {
    "sans": "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
    "display": "(aliased to --font-sans)"
  }
}
```

Implementation note: Tailwind CSS 4 is CSS-first. There is **no `tailwind.config.mjs`** -- all theming is done via `@theme { ... }` in `src/styles/global.css`. Any new tokens Claude Design proposes must be added there, not in a JS config file.

The `@tailwindcss/vite` plugin is wired in `astro.config.mjs` as a Vite plugin (not an Astro integration). This is the correct Tailwind 4 pattern.

Token naming convention: all tokens use the `--color-*` and `--font-*` prefix pattern established above. When Claude Design adds semantic variants (e.g., `--color-bg-dark`, `--color-accent-hover`) they should follow the same `--color-{role}` naming to stay consistent with existing component references.

---

## 6. Component inventory

All nine components are in `src/components/`. Props are listed as TypeScript interfaces extracted directly from the component source.

- **`Navbar.astro`** -- site-wide navigation header with brand link, six nav links, and a language toggle. Props: `{ lang: 'en' | 'es' }`.

- **`Footer.astro`** -- site footer with LinkedIn and GitHub social links and copyright. Props: `{ lang: 'en' | 'es' }`.

- **`SkipToContent.astro`** -- accessibility skip link that reveals on focus. Props: `{ href?: string, label?: string }` (both optional; default `href="#main"`, default `label="Skip to content"`).

- **`LangToggle.astro`** -- language switcher link that maps the current pathname to its equivalent in the other locale. Props: `{ lang: 'en' | 'es' }`.

- **`ProjectCard.astro`** -- card component for a single project entry. Shows cover image (via `<Image>` from `astro:assets`), title, year, summary, tech stack pills and a contextual CTA label. Props: `{ entry: CollectionEntry<'projects'>, lang: 'en' | 'es' }`.

- **`SkillCard.astro`** -- card for a single skill. Renders an optional SVG icon (passed as raw HTML string), the skill name, MDX body prose, and tag pills. Props: `{ entry: CollectionEntry<'skills'>, iconHtml?: string }`.

- **`ExperienceItem.astro`** -- timeline entry for a work experience record. Renders role, organization, optional location, date range (with `<time>` elements and `Intl.DateTimeFormat`), and MDX bullet-point body. Props: `{ entry: CollectionEntry<'experience'>, lang: 'en' | 'es' }`.

- **`EducationItem.astro`** -- entry for a degree or courses block. Renders degree label, institution, optional location and year range, then MDX body. Props: `{ entry: CollectionEntry<'education'> }` (no `lang` needed -- date formatting not applicable).

- **`ContactChannel.astro`** -- clickable contact card with icon, a label badge (uppercase), and a display value. Used for Email, LinkedIn and GitHub channels. Props: `{ iconHtml: string, label: string, href: string, display: string, external?: boolean }`.

---

## 7. Constraints

### Hosting

GitHub Pages, free tier, static output only. The site is deployed under the subpath `/portfolio/`, configured via `base: '/portfolio/'` in `astro.config.mjs`. All internal links must account for this base path.

### Stack lock

- **Astro 5** (`^5.0.0`) with `output: 'static'`.
- **Tailwind CSS 4** (`^4.0.0`) via `@tailwindcss/vite` Vite plugin (CSS-first, no JS config).
- **MDX** via `@astrojs/mdx ^4.0.0`.
- **TypeScript strict** mode via `@astrojs/check ^0.9.9` and `typescript ^5.9.3`.
- **Sitemap** via `@astrojs/sitemap ^3.2.0`.

Do not propose framework migrations, React/Vue component islands, or additional JS runtimes. The Astro island model is available but not currently used; if Claude Design introduces interactive components (e.g., a theme toggle button), they must be minimal and self-contained.

### i18n lock

EN is the default locale at `/portfolio/` (no prefix). ES is at `/portfolio/es/`. This is enforced by:

```js
i18n: {
  defaultLocale: 'en',
  locales: ['en', 'es'],
  routing: { prefixDefaultLocale: false },
}
```

Content parity is enforced by the `locale: z.enum(['en', 'es'])` field on every collection schema. Claude Design must not change the routing structure or add new locales.

### Trailing slash

`trailingSlash: 'always'` is set in `astro.config.mjs`. All canonical URLs end with `/`. Any generated links must respect this.

### Content layer

The Astro Content Layer API is used with `glob` loaders. MDX files live under `src/content/{collection}/{locale}/`. Zod schemas in `src/content.config.ts` define the data shapes -- Claude Design should not modify these schemas unless a delta is proposed with explicit justification.

### Asset pipeline

Project cover images use `<Image>` from `astro:assets` for automatic WebP conversion and `srcset` generation. SVG icons are imported as raw strings via the `?raw` Vite query and injected with `set:html`. Do not switch to `<img>` tags for project images.

### Accessibility

WCAG 2.2 AA target. The codebase already includes:

- `SkipToContent` with focus-reveal pattern.
- `aria-current="page"` on active nav links.
- `<time datetime="...">` on all dates in `ExperienceItem`.
- `aria-label` on `Navbar`, `Footer` social list, and `LangToggle`.
- `focus-visible` outlines on all interactive elements using `--color-accent`.

Claude Design must not regress any of these patterns.

### Performance budget

- LCP < 2.5s
- CLS < 0.1
- TBT < 200ms
- Total transferred bytes < 500 KB on the home page

All targets measured on Slow 4G, mid-range mobile. The current stack achieves this because it ships zero JavaScript by default and uses `astro:assets` for image optimization.

### Responsive

Mobile-first. Current breakpoints in the page files:

- `720px` -- two-column hero on home; two-column project grid.
- `960px` -- three-column project grid.

Claude Design can propose a full breakpoint system; Tailwind defaults (`sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`) are a reasonable starting point.

---

## 8. What is flexible vs locked

### Flexible (Claude Design's playground)

- Layout, spacing, grid systems and container widths.
- Color palette -- the current tokens are placeholders. Propose a considered neutral-first palette with a single accent.
- Typography -- propose a pairing (max 2 families). Replace Inter if warranted. Define a type scale.
- Hero layout and composition (photo placement, headline hierarchy, CTA grouping).
- Card visuals -- project card, skill card, contact channel card.
- Dark mode strategy and token naming.
- Iconography style (custom SVG, Lucide, Heroicons -- all valid if they remain inline SVG).
- Micro-interactions: hover states, focus rings, card lift transitions.
- Section headers and dividers.
- Component internal layout (e.g., whether `ExperienceItem` uses a timeline bar or not).

### Locked

- Tech stack: Astro 5 + Tailwind 4 + MDX + TypeScript strict. No migrations.
- Hosting target: GitHub Pages static, subpath `/portfolio/`.
- Content schemas in `src/content.config.ts`. If Claude Design absolutely needs a schema change, it must propose a delta with justification -- not silently modify fields.
- Routing structure: `/` (EN) and `/es/` (ES). No new routes without owner approval.
- "No emojis" rule. Applies to all artifacts without exception.
- `trailingSlash: 'always'`. Do not remove.
- `base: '/portfolio/'`. Do not change.
- `<Image>` from `astro:assets` for raster images. Do not replace with plain `<img>`.

---

## 9. Expected outputs from Claude Design

1. **Updated `src/styles/global.css`** -- revised `@theme` block with final color tokens and font stacks. If dark mode is included, add `@media (prefers-color-scheme: dark)` overrides or a `.dark` class strategy within the same file.

2. **Updated `.astro` components in `src/components/`** -- props signatures must remain backward-compatible. If a prop is added, it must be optional with a sensible default. If a prop is removed, document the migration.

3. **New layouts or sections** -- if Claude Design proposes a new section (e.g., a testimonials block or a stats bar), provide the Astro component and indicate which page it belongs to.

4. **Sample mockups (images)** -- at minimum, a home page mockup and a project card mockup in both light and dark mode before code lands. Review gates before implementation.

5. **Palette justification** -- one paragraph explaining the color choices: what the palette communicates, why the accent was chosen, contrast ratios for primary text and interactive elements.

6. **Typography justification** -- one paragraph explaining the type pairing: why these families, what scale is proposed (h1 through body/small), and where display vs body families are applied.

7. **Dark mode tokens** -- if dark mode is implemented, provide the full token set as a JSON block mirroring Section 5 above.

---

## 10. How to run locally

```bash
git checkout dev
npm install
npm run dev
```

Open `http://localhost:4321/portfolio/` for the EN version and `http://localhost:4321/portfolio/es/` for the ES version.

To build the static output and preview it:

```bash
npm run build
npm run preview
```

To validate TypeScript types and content schemas:

```bash
npx astro check
```

The build output goes to `dist/`. It is a flat static tree ready for GitHub Pages deployment.

---

## 11. Known open items

- **Contact email**: `portfolio.fjrguezcer@gmail.com` has been chosen as the canonical address. Owner confirms.
- **Spanish CV PDF**: currently links to the EN PDF (`Francisco_Rodriguez_CV_en.pdf`) with a placeholder note. A Spanish version PDF is pending.
- **Current employment gap**: the most recent experience entry (`01-cabildo`) ended in early 2025; the role end date will be updated by the owner when ready. The `current` flag is not set.
- **iFood project repo** (`02-ifood`): the `link` field points to the owner's GitHub profile (`https://github.com/FranRguezCer`) as a fallback -- no dedicated repo exists yet. Same applies to the Diabetes project (`03-diabetes`).
- **Navbar mobile menu**: the current `Navbar.astro` renders a full horizontal link list with no hamburger menu. A mobile-responsive nav pattern is expected from Claude Design.

---

## 12. Acknowledgments

Plan and execution: orchestrated by Claude Code in fan-out agents. Reviewer baseline: Codex + the owner's direct review.
