// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://yourside.co.nz',
  trailingSlash: 'always',
  // Old addresses that moved
  redirects: {
    '/borrowing-calculator/': '/calculators/how-much-can-i-borrow/',
  },
  integrations: [
    sitemap({
      // Keep thank-you style pages out of Google
      filter: (page) => !/\/(thank-you|subscribed|results-sent)\/$/.test(page) && !page.includes('/check/'),
    }),
  ],
});