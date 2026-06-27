import { guides } from '../lib/guides';

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
    '/faq',
    '/legal',
    '/confidentialite',
  ];
  const guidePaths = guides.map((guide) => `/guides/${guide.slug}`);
  return [...staticPaths, ...guidePaths].map((path) => ({
    url: base + path,
    lastModified: new Date(),
  }));
}
