// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { services } from './src/data/services';

const indexablePaths = new Set([
  '/',
  '/about',
  '/contact',
  ...services.map(({ slug }) => `/services/${slug}`),
  '/services/team-workshops',
]);

// https://astro.build/config
export default defineConfig({
  site: 'https://www.joyfulminds.ca',
  trailingSlash: 'never',
  integrations: [
    sitemap({
      filter: (page) => indexablePaths.has(new URL(page).pathname.replace(/\/$/, '') || '/'),
    }),
  ],
  redirects: {
    '/services/couples-therapy': '/services/womens-counselling',
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Cormorant Garamond',
      cssVariable: '--font-cormorant',
      weights: [400, 500, 600],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
      fallbacks: ['Georgia', 'serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Plus Jakarta Sans',
      cssVariable: '--font-jakarta',
      weights: [400, 500, 600, 700],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
});
