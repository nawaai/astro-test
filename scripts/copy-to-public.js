/**
 * Copy Astro build output to Next.js public folder
 * Excludes routes that are handled by Next.js (like /rsc)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const publicDir = path.join(rootDir, 'public');

// Routes handled by Next.js (don't copy from Astro)
const nextRoutes = ['rsc'];

function copyRecursive(src, dest, excludeDirs = []) {
  if (!fs.existsSync(src)) return;

  const stats = fs.statSync(src);

  if (stats.isDirectory()) {
    const dirName = path.basename(src);
    if (excludeDirs.includes(dirName)) {
      console.log(`  ⏭️  Skipping /${dirName}/ (handled by Next.js)`);
      return;
    }

    fs.mkdirSync(dest, { recursive: true });
    const entries = fs.readdirSync(src);
    for (const entry of entries) {
      copyRecursive(path.join(src, entry), path.join(dest, entry), excludeDirs);
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

console.log('📦 Copying Astro build to Next.js public/...');

// Clean public folder first (except .gitkeep)
if (fs.existsSync(publicDir)) {
  const entries = fs.readdirSync(publicDir);
  for (const entry of entries) {
    if (entry !== '.gitkeep') {
      fs.rmSync(path.join(publicDir, entry), { recursive: true });
    }
  }
}

// Ensure public dir exists
fs.mkdirSync(publicDir, { recursive: true });

// Copy dist to public, excluding Next.js routes
copyRecursive(distDir, publicDir, nextRoutes);

console.log('✅ Astro build copied to public/');
