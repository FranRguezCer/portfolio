# Portfolio

Personal portfolio website for a Data & AI Engineer. Built with Astro, deployed to GitHub Pages.

Live at: https://FranRguezCer.github.io/portfolio

## Tech Stack

- **Astro 5** -- Static site generator with component-based architecture
- **TypeScript** -- Strict mode with path aliases
- **Vanilla CSS** -- Custom properties for theming, scoped styles per component, no frameworks
- **Lucide** -- UI icons (navigation, social links, external links)
- **Devicon + Simple Icons** -- Tech logo icons via astro-icon integration
- **GitHub Actions** -- Automated build and deploy to GitHub Pages on push to `refactor`

## Project Structure

```
portfolio/
├── .github/workflows/deploy.yml    # GitHub Pages deployment
├── public/
│   ├── favicon.svg
│   └── img/                        # Profile photo and project screenshots
├── src/
│   ├── components/
│   │   ├── Navbar.astro            # Sticky nav, mobile hamburger, active section highlight
│   │   ├── Hero.astro              # Full-viewport intro with name and title
│   │   ├── About.astro             # Bio paragraph
│   │   ├── Projects.astro          # Project cards grid (6 cards)
│   │   ├── Skills.astro            # Tech skill icons grid (11 skills)
│   │   ├── Experience.astro        # Vertical timeline (3 roles)
│   │   ├── Education.astro         # Education cards (2 degrees)
│   │   └── Footer.astro            # Social links and copyright
│   ├── layouts/
│   │   └── Layout.astro            # HTML shell, fonts, scroll animations
│   ├── pages/
│   │   └── index.astro             # Page assembly (imports all components)
│   └── styles/
│       └── global.css              # Design tokens, reset, utilities, animations
├── astro.config.mjs                # Site URL, base path, integrations
├── tsconfig.json                   # Strict TS, path aliases (@components/, etc.)
└── package.json
```

## Quickstart

```bash
npm install
npm run dev
```

Open http://localhost:4321/portfolio/ in your browser.

To build for production:

```bash
npm run build
npm run preview    # preview the built site locally
```

## How to Edit

### Personal info

Edit the component files directly. Each component keeps its content in the frontmatter (the `---` block) as data arrays, or inline as HTML text.

| What to change        | File                              | What to look for                          |
|-----------------------|-----------------------------------|-------------------------------------------|
| Name and title        | `src/components/Hero.astro`       | `<h1>` and subtitle `<p>` tags            |
| Bio text              | `src/components/About.astro`      | The paragraph inside the section          |
| Projects              | `src/components/Projects.astro`   | `projects` array at the top               |
| Skills                | `src/components/Skills.astro`     | `skills` array at the top                 |
| Work experience       | `src/components/Experience.astro` | `experiences` array at the top            |
| Education             | `src/components/Education.astro`  | `education` array at the top              |
| Social links          | `src/components/Footer.astro`     | The `href="#"` placeholders on each `<a>` |
| Copyright year        | `src/components/Footer.astro`     | The `<p>` at the bottom                   |
| Profile photo         | `public/img/`                     | Replace `profile.svg` with your image     |
| Project screenshots   | `public/img/`                     | Add images and reference them in Projects |

### Skills

Skills are defined as an array of `{ name, icon }` objects in `src/components/Skills.astro`. Icons come from two libraries:

- **Devicon** -- most programming languages and tools. Use `"devicon:iconname"`.
- **Simple Icons** -- brands and products. Use `"simple-icons:iconname"`.

Browse available icons at https://icon-sets.iconify.design/devicon/ and https://icon-sets.iconify.design/simple-icons/.

To add or remove a skill, edit the array:

```js
const skills = [
  { name: "Python", icon: "devicon:python" },
  { name: "LangChain", icon: "simple-icons:langchain" },
  // add or remove entries here
];
```

### Design tokens

All colors, fonts, spacing, and shadows are CSS custom properties in `src/styles/global.css`. Change the values there to restyle the entire site:

```css
--color-bg: #FAF8F5;        /* page background */
--color-surface: #F0EDEA;   /* alternating section background */
--color-accent: #4A9B9B;    /* links, highlights, borders */
--color-navy: #1B3A4B;      /* headings, footer background */
--font-heading: 'JetBrains Mono', monospace;
--font-body: 'Inter', sans-serif;
```

### Site URL and base path

If deploying to a different URL, update `astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/your-repo-name',
});
```

### Deployment

The GitHub Actions workflow at `.github/workflows/deploy.yml` builds and deploys on every push to the `refactor` branch. To change the trigger branch, edit the `branches` list in that file.

Requirements: In your GitHub repo settings, go to Pages and set the source to "GitHub Actions".
