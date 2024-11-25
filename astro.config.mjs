// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), alpinejs()],
  build: {
    // Exemple : Générer `page.html` au lieu de `page/index.html` pendant la construction.
    format: 'file'
  },
});