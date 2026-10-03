import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// User site (repo named JulianAttemptsCoding.github.io) serves from '/'.
// For a project repo, build with BASE_PATH=/repo-name/ instead.
export default defineConfig({
  site: 'https://julianattemptscoding.github.io',
  base: process.env.BASE_PATH ?? '/',
  trailingSlash: 'always',
  integrations: [mdx()],
  devToolbar: { enabled: false },
});
