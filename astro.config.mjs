import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://FranRguezCer.github.io',
  base: '/portfolio',
  integrations: [icon()],
});
