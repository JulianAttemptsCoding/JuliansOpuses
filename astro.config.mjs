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
  vite: {
    // The CSS minifier folds `animation-timeline` into the `animation` shorthand, which
    // browsers reject, and that silently switches off every scroll-driven animation in
    // the built site. The stylesheets are small, so they ship unminified instead.
    build: { cssMinify: false },
    // These are loaded on demand in the browser. Listing them lets the dev server prepare
    // them at startup, instead of discovering them mid-visit and reloading the page.
    optimizeDeps: {
      include: ['three', 'three/examples/jsm/controls/OrbitControls.js', 'lenis'],
    },
  },
});
