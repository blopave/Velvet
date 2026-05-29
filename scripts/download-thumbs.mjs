#!/usr/bin/env node
// Download YouTube thumbnails to src/assets/projects/{slug}.jpg
// Astro will optimize them at build time (AVIF + WebP + responsive srcset).
//
// Usage: npm run thumbs

import { mkdir, writeFile, access, readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECTS_PATH = join(__dirname, '../src/data/projects.ts');
const ASSETS_DIR = join(__dirname, '../src/assets/projects');

const QUALITY_ORDER = ['maxresdefault', 'sddefault', 'hqdefault', 'mqdefault'];
// YouTube serves a generic 120x90 placeholder when maxres doesn't exist — reject anything
// suspiciously small.
const MIN_VALID_SIZE = 4096;

const code = await readFile(PROJECTS_PATH, 'utf-8');

// Naive parse: each project block has slug + videoId + thumbnail (optional)
const projects = [];
const blocks = code.split(/\{\s*slug:/).slice(1);
for (const block of blocks) {
  const slugMatch = block.match(/^\s*'([^']+)'/);
  const videoIdMatch = block.match(/videoId:\s*'([^']+)'/);
  const thumbMatch = block.match(/thumbnail:\s*'([^']+)'/);
  if (!slugMatch || !videoIdMatch) continue;
  projects.push({
    slug: slugMatch[1],
    videoId: videoIdMatch[1],
    preferredQuality: thumbMatch?.[1],
  });
}

console.log(`Found ${projects.length} projects with videoId.`);

await mkdir(ASSETS_DIR, { recursive: true });

let downloaded = 0;
let skipped = 0;
let failed = 0;

for (const project of projects) {
  const filePath = join(ASSETS_DIR, `${project.slug}.jpg`);

  // Skip if already cached
  try {
    await access(filePath);
    skipped++;
    console.log(`· ${project.slug} (cached)`);
    continue;
  } catch {}

  const qualities = project.preferredQuality
    ? [project.preferredQuality, ...QUALITY_ORDER.filter((q) => q !== project.preferredQuality)]
    : QUALITY_ORDER;

  let success = false;
  for (const quality of qualities) {
    const url = `https://img.youtube.com/vi/${project.videoId}/${quality}.jpg`;
    try {
      const res = await fetch(url);
      if (!res.ok) continue;
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < MIN_VALID_SIZE) continue; // skip YouTube's tiny placeholder
      await writeFile(filePath, buf);
      console.log(`✓ ${project.slug} ← ${quality} (${Math.round(buf.length / 1024)} KB)`);
      downloaded++;
      success = true;
      break;
    } catch (e) {
      // try next quality
    }
  }

  if (!success) {
    console.error(`✗ ${project.slug} — could not fetch any thumbnail variant`);
    failed++;
  }
}

console.log(
  `\nDone. downloaded=${downloaded}, cached=${skipped}, failed=${failed}, total=${projects.length}`
);
