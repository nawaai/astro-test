// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';
import react from '@astrojs/react';
import solid from '@astrojs/solid-js';
import vue from '@astrojs/vue';
import svelte from '@astrojs/svelte';

import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react({ include: ['**/react/*'] }),
    preact({ include: ['**/preact/*'] }),
    solid({ include: ['**/solid/*'] }),
    vue({ include: ['**/vue/*'] }),
    svelte({ include: ['**/svelte/*'] }),
    alpinejs(),
  ],
});