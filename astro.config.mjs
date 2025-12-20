// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';
import react from '@astrojs/react';
import solid from '@astrojs/solid-js';
import vue from '@astrojs/vue';
import svelte from '@astrojs/svelte';
import angular from '@analogjs/astro-angular';

// https://astro.build/config
export default defineConfig({
  integrations: [
    angular({
      include: ['**/angular/*'],
      zoneless: true,
    }),
    preact({
      include: ['**/preact/*'],
    }),
    solid({
      include: ['**/solid/*'],
    }),
    react({
      include: ['**/react/*'],
    }),
    svelte({
      include: ['**/svelte/*'],
    }),
    vue({
      include: ['**/vue/*'],
    }),
  ],
  vite: {
    ssr: {
      noExternal: ['@rx-angular/**'],
    },
  },
});