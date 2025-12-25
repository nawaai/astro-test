// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

import preact from '@astrojs/preact';
import react from '@astrojs/react';
import solid from '@astrojs/solid-js';
import vue from '@astrojs/vue';
import svelte from '@astrojs/svelte';
import alpinejs from '@astrojs/alpinejs';
import lit from '@astrojs/lit';

// https://astro.build/config
export default defineConfig({
  adapter: node({ mode: 'standalone' }), // Required for SSR pages
  integrations: [
    react({ include: ['**/react/*'] }),
    preact({ include: ['**/preact/*'] }),
    solid({ include: ['**/solid/*'] }),
    vue({ include: ['**/vue/*'] }),
    svelte({ include: ['**/svelte/*'] }),
    alpinejs(),
    lit(),
  ],
});
