const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://scanadmin.fr').replace(/\/$/, '');

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteUrl}/#organization`,
  name: 'ScanAdmin',
  url: siteUrl,
  logo: `${siteUrl}/brand/scanadmin-logo.svg`,
  description: 'ScanAdmin aide les PME à estimer le coût mensuel de leurs tâches administratives répétitives et à identifier le premier agent IA supervisé à tester.',
};

const website = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  name: 'ScanAdmin',
  url: siteUrl,
  publisher: {
    '@id': `${siteUrl}/#organization`,
  },
  inLanguage: 'fr-FR',
};

const service = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${siteUrl}/#service`,
  name: 'Analyse personnalisée ScanAdmin',
  serviceType: 'Diagnostic IA administratif pour PME',
  provider: {
    '@id': `${siteUrl}/#organization`,
  },
  areaServed: {
    '@type': 'Country',
    name: 'France',
  },
  audience: {
    '@type': 'BusinessAudience',
    audienceType: 'PME, artisans, indépendants et dirigeants de petites entreprises',
  },
  description: 'Analyse personnalisée pour chiffrer les tâches administratives répétitives d’une PME, prioriser les cas d’usage et recommander un premier agent IA supervisé à tester.',
  offers: {
    '@type': 'Offer',
    name: 'Analyse personnalisée ScanAdmin',
    price: '200',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
    url: `${siteUrl}/analyse-personnalisee`,
  },
};

const graph = {
  '@context': 'https://schema.org',
  '@graph': [organization, website, service],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
