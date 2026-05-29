import type { ImageMetadata } from 'astro';

// Eagerly index every poster Astro will know how to optimize at build time.
// Keys are slugs (filename without extension).
const modules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/projects/*.{jpg,jpeg,png,webp}',
  { eager: true }
);

const projectImages: Record<string, ImageMetadata> = {};
for (const [path, mod] of Object.entries(modules)) {
  const filename = path.split('/').pop() ?? '';
  const slug = filename.replace(/\.(jpg|jpeg|png|webp)$/i, '');
  projectImages[slug] = mod.default;
}

export { projectImages };

/** Get the locally-optimized poster for a project, or null if not cached. */
export function getProjectPoster(slug: string): ImageMetadata | null {
  return projectImages[slug] ?? null;
}
