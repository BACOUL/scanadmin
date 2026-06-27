import { guides } from '../lib/guides';
import { sectors } from '../lib/sectors';

export default function sitemap() {
  const base = 'https://scanadmin.vercel.app';
  const staticPaths = [
    '/',
    '/scan',
    '/result',
    '/analyse',
    '/merci',
    '/tarifs',
    '/contact',
    '/method',
    '/catalogue',
    '/exemple',
    '/guides',
    '/secteurs',
    '/faq',
    '/legal',
    '/confidentialite',
  ];
  const guidePaths = guides.map((guide) => `/guides/${guide.slug}`);
  const sectorPaths = sectors.map((sector) => `/secteurs/${sector.slug}`);
  return [...staticPaths, ...guidePaths, ...sectorPaths].map((path) => ({
    url: base + path,
    lastModified: new Date(),
  }));
}
