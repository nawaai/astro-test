/**
 * Post-build script to fix SSR routes for Cloudflare deployment
 *
 * Problem: Cloudflare adapter generates static HTML fallbacks for SSR pages,
 * but _routes.json excludes these paths, causing static files to be served
 * instead of going through the worker.
 *
 * Solution: Remove static HTML for SSR pages and update _routes.json
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '..', 'dist');

// SSR pages that should NOT have static HTML
const ssrPages = ['rsc'];

console.log('🔧 Fixing SSR routes for Cloudflare...');

// 1. Remove static HTML for SSR pages
for (const page of ssrPages) {
  const staticDir = path.join(distDir, page);
  if (fs.existsSync(staticDir)) {
    fs.rmSync(staticDir, { recursive: true });
    console.log(`  ✓ Removed static HTML: ${page}/`);
  }
}

// 2. Update _routes.json to remove SSR pages from exclude list
const routesPath = path.join(distDir, '_routes.json');
if (fs.existsSync(routesPath)) {
  const routes = JSON.parse(fs.readFileSync(routesPath, 'utf-8'));

  const originalExclude = routes.exclude.length;
  routes.exclude = routes.exclude.filter(route => {
    return !ssrPages.some(page => route.includes(`/${page}/`) || route.includes(`/${page}`));
  });

  if (routes.exclude.length !== originalExclude) {
    fs.writeFileSync(routesPath, JSON.stringify(routes, null, 2));
    console.log(`  ✓ Updated _routes.json (removed ${originalExclude - routes.exclude.length} SSR exclusions)`);
  }
}

console.log('✅ SSR routes fixed!');
