export interface Project {
  slug: string;
  title: string;
  client: string;
  category: 'Film' | 'Photo' | 'Digital Content' | 'Activations';
  year: string;
  videoId?: string;
  thumbnail?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'betano-x-barassi',
    title: 'Betano x Barassi',
    client: 'Betano',
    category: 'Film',
    year: '2025',
    videoId: 'M3Ooc78bmD4',
    featured: true,
  },
  {
    slug: 'netflix-di-maria-romper-la-pared',
    title: 'Di María — Romper la Pared',
    client: 'Netflix',
    category: 'Film',
    year: '2025',
    videoId: '9VSQHKazRTA',
    featured: true,
  },
  {
    slug: 'manifiesto-vista-energy-2025',
    title: 'Manifiesto Vista Energy',
    client: 'Vista Energy',
    category: 'Film',
    year: '2025',
    videoId: '-aVef9zUj8k',
    thumbnail: 'sddefault',
    featured: true,
  },
  {
    slug: 'hbo-max-champions-league-2023',
    title: 'Champions League — Laugh',
    client: 'HBO Max',
    category: 'Film',
    year: '2023',
    videoId: 'R9OWQt1w_MA',
    featured: true,
  },
  {
    slug: 'hbo-max-maria-marta',
    title: 'María Marta — El Crimen del Country',
    client: 'HBO Max',
    category: 'Film',
    year: '2024',
    videoId: 'nuuevLIgy40',
    featured: true,
  },
  {
    slug: 'visa-open-2024',
    title: 'Visa Open 2024',
    client: 'Visa',
    category: 'Film',
    year: '2024',
    videoId: 'ZvUigJrUEF0',
    featured: true,
  },
  {
    slug: 'puma-cai-3rd-kit-2025',
    title: 'C.A.I — 3rd Kit 2025',
    client: 'Puma',
    category: 'Film',
    year: '2025',
    videoId: 'sbGUav_uHio',
    featured: true,
  },
  {
    slug: 'corona-mundial-qatar-2022',
    title: 'Mundial Qatar 2022 — Mexico Manda',
    client: 'Corona',
    category: 'Film',
    year: '2022',
    videoId: 'e1PtZXr0fYs',
    featured: true,
  },
  {
    slug: 'puma-cai-2024-home-kit',
    title: 'C.A.I 2024 — Home Kit',
    client: 'Puma',
    category: 'Film',
    year: '2024',
    videoId: '6m7TaBq6ARY',
  },
  {
    slug: 'puma-10k-2024',
    title: 'Puma 10K 2024',
    client: 'Puma',
    category: 'Film',
    year: '2024',
    videoId: '0KHXP_z638k',
  },
  {
    slug: 'puma-cai-3rd-kit-2024',
    title: 'C.A.I — 3rd Kit 2024',
    client: 'Puma',
    category: 'Digital Content',
    year: '2024',
    videoId: '_ePieziXZRY',
  },
  {
    slug: 'puma-ultra-future-2024',
    title: 'Ultra & Future 2024',
    client: 'Puma',
    category: 'Digital Content',
    year: '2024',
    videoId: 'W3PJoiuzJvc',
  },
  {
    slug: 'puma-future-2025',
    title: 'Puma Future 2025',
    client: 'Puma',
    category: 'Film',
    year: '2025',
    videoId: 'L8FRids4G-E',
  },
  {
    slug: 'puma-cai-home-kit-2023',
    title: 'C.A.I — Home Kit 2023',
    client: 'Puma',
    category: 'Film',
    year: '2023',
    videoId: 'JFhRP_d4MSk',
  },
  {
    slug: 'puma-future-alto-nono-2024',
    title: 'Future — Evento Alto Nono',
    client: 'Puma',
    category: 'Activations',
    year: '2024',
    videoId: 'Xp5LBW8IXfI',
  },
  {
    slug: 'under-armour-los-pumas',
    title: 'Los Pumas',
    client: 'Under Armour',
    category: 'Film',
    year: '2024',
    videoId: 'o-nYeuD75Kw',
  },
  {
    slug: 'ea-sports-racing-club-120',
    title: 'Racing Club — 120 Años',
    client: 'EA Sports',
    category: 'Film',
    year: '2024',
    videoId: '0qGQ23wpfCc',
  },
  {
    slug: 'under-armour-la-dolfina',
    title: 'La Dolfina',
    client: 'Under Armour',
    category: 'Film',
    year: '2024',
    videoId: 'i8nhz9qhIfE',
  },
  {
    slug: 'star-plus-santa-evita',
    title: 'Santa Evita',
    client: 'Star+',
    category: 'Digital Content',
    year: '2023',
    videoId: '9ncEj_-fdgM',
  },
  {
    slug: 'star-plus-ringo',
    title: 'Ringo',
    client: 'Star+',
    category: 'Digital Content',
    year: '2023',
    videoId: '8sTIeZMlOxk',
  },
  {
    slug: 'danone-ninch-2024',
    title: 'Ninch 2024',
    client: 'Danone',
    category: 'Film',
    year: '2024',
    videoId: 'kB_IKOyq_k4',
  },
];

export interface Client {
  name: string;
  logo?: string; // Simple Icons CDN slug
}

export const clients: Client[] = [
  { name: 'Netflix', logo: 'netflix' },
  { name: 'HBO Max', logo: 'hbo' },
  { name: 'Puma', logo: 'puma' },
  { name: 'Visa', logo: 'visa' },
  { name: 'Under Armour', logo: 'underarmour' },
  { name: 'EA Sports', logo: 'ea' },
  { name: 'Corona' },
  { name: 'Danone' },
  { name: 'Star+' },
  { name: 'Betano' },
  { name: 'DirecTV' },
  { name: 'Vista Energy' },
];

export function getProjectImage(project: Project): string {
  if (project.videoId) {
    const quality = project.thumbnail || 'maxresdefault';
    return `https://img.youtube.com/vi/${project.videoId}/${quality}.jpg`;
  }
  return '';
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(p => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

export const categories = ['Film', 'Photo', 'Digital Content', 'Activations'] as const;
