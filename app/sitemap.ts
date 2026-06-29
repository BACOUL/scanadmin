import { guides } from '../lib/guides';
import { sectors } from '../lib/sectors';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://scanadmin.fr').replace(/\/$/, '');

export default function sitemap() {
  const staticPaths = [
    '/',
    '/scan',
    '/analyse-personnalisee',
    '/tarifs',
    '/contact',
    '/method',
    '/catalogue',
    '/exemple',
    '/guides',
    '/secteurs',
    '/faq',
    '/qui-sommes-nous',
    '/pourquoi-scanadmin',
    '/securite',
    '/limites',
    '/cas-usages',
    '/comparatif',
    '/legal',
    '/cgv',
    '/confidentialite',
    '/taches',
    '/taches/devis',
    '/taches/relances-clients',
    '/taches/emails-administratifs',
    '/taches/documents-entrants',
  ];

  const guidePaths = guides.map((guide) => `/guides/${guide.slug}`);
  const sectorPaths = sectors.map((sector) => `/secteurs/${sector.slug}`);

  return [...staticPaths, ...guidePaths, ...sectorPaths].map((path) => ({
    url: siteUrl + path,
    lastModified: new Date(),
  }));
}
