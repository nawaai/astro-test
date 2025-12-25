// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

import preact from '@astrojs/preact';
import react from '@astrojs/react';
import solid from '@astrojs/solid-js';
import vue from '@astrojs/vue';
import svelte from '@astrojs/svelte';
import alpinejs from '@astrojs/alpinejs';
// import lit from '@astrojs/lit'; // Disabled - incompatible with Cloudflare Workers

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(), // For Kilocode/Cloudflare deployment
  integrations: [
    react({ include: ['**/react/*'] }),
    preact({ include: ['**/preact/*'] }),
    solid({ include: ['**/solid/*'] }),
    vue({ include: ['**/vue/*'] }),
    svelte({ include: ['**/svelte/*'] }),
    alpinejs(),
    // lit(), // Disabled for Cloudflare
  ],
});
