import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://franrguezcer.github.io',
  base: '/portfolio/',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    mdx(),
    sitemap(),
  ],
});
