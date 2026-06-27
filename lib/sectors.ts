export type SectorPage = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  tasks: string[];
  agents: string[];
};

export const sectors: SectorPage[] = [
  {
    slug: 'btp',
    title: 'IA administrative pour entreprises du BTP',
    description: 'Scanner les tâches administratives BTP : devis, relances, documents, dossiers clients et suivi administratif.',
    intro: 'Dans le BTP, la charge administrative se cache souvent dans les devis, les pièces clients, les documents de chantier, les relances et les dossiers à compléter.',
    tasks: ['Préparation de devis récurrents', 'Relance de documents manquants', 'Classement de pièces chantier', 'Synthèse de demandes clients'],
    agents: ['Agent devis', 'Agent relance', 'Agent documents'],
  },
  {
    slug: 'transport-logistique',
    title: 'IA administrative pour transport et logistique',
    description: 'Identifier les tâches répétitives dans le transport : documents, suivi, relances, reporting et échanges clients.',
    intro: 'Les entreprises de transport et logistique traitent beaucoup d’informations répétitives : demandes clients, documents, suivi, reporting et relances.',
    tasks: ['Synthèse d’échanges clients', 'Préparation de réponses', 'Classement de documents', 'Reporting hebdomadaire'],
    agents: ['Agent mails', 'Agent documents', 'Agent reporting'],
  },
  {
    slug: 'nettoyage-professionnel',
    title: 'IA administrative pour entreprises de nettoyage',
    description: 'Scanner les tâches administratives d’une entreprise de nettoyage : devis, plannings, relances et documents clients.',
    intro: 'Dans le nettoyage professionnel, les devis, plannings, relances et demandes clients peuvent prendre beaucoup de temps chaque semaine.',
    tasks: ['Préparation de devis simples', 'Relance de clients', 'Synthèse de consignes', 'Suivi de planning'],
    agents: ['Agent devis', 'Agent relance', 'Agent planning'],
  },
  {
    slug: 'securite-privee',
    title: 'IA administrative pour sécurité privée',
    description: 'Réduire les tâches répétitives dans la sécurité privée : planning, documents, reporting et échanges clients.',
    intro: 'La sécurité privée génère des tâches récurrentes de planning, documents, comptes rendus et échanges clients qui peuvent être préparées par IA sous contrôle humain.',
    tasks: ['Préparation de comptes rendus', 'Synthèse de demandes clients', 'Suivi de planning', 'Classement documentaire'],
    agents: ['Agent reporting', 'Agent planning', 'Agent documents'],
  },
  {
    slug: 'espaces-verts',
    title: 'IA administrative pour entreprises d’espaces verts',
    description: 'Scanner les devis, relances, documents et tâches administratives répétitives des entreprises d’espaces verts.',
    intro: 'Les entreprises d’espaces verts peuvent gagner du temps sur les devis simples, relances, documents clients et suivis d’intervention.',
    tasks: ['Préparation de devis', 'Relance de clients', 'Synthèse de demandes', 'Suivi administratif'],
    agents: ['Agent devis', 'Agent relance', 'Agent mails'],
  },
  {
    slug: 'maintenance-industrielle',
    title: 'IA administrative pour maintenance industrielle',
    description: 'Identifier les tâches administratives répétitives en maintenance : comptes rendus, documents, devis et reporting.',
    intro: 'La maintenance industrielle implique souvent des comptes rendus, échanges clients, documents techniques et reporting qui peuvent être préparés plus vite.',
    tasks: ['Préparation de comptes rendus', 'Classement de documents', 'Synthèse d’interventions', 'Reporting client'],
    agents: ['Agent documents', 'Agent reporting', 'Agent mails'],
  },
  {
    slug: 'commerce-detail',
    title: 'IA administrative pour commerces et magasins',
    description: 'Scanner la charge administrative des commerces : mails, documents, fournisseurs, reporting et relances.',
    intro: 'Un commerce peut perdre beaucoup de temps sur les échanges fournisseurs, documents, reporting et petites tâches administratives répétitives.',
    tasks: ['Mails fournisseurs', 'Relances', 'Classement documents', 'Reporting simple'],
    agents: ['Agent mails', 'Agent relance', 'Agent reporting'],
  },
  {
    slug: 'agence-marketing',
    title: 'IA administrative pour agences marketing',
    description: 'Mesurer les tâches répétitives d’une agence : reporting, mails, briefs, documents et relances clients.',
    intro: 'Les agences marketing ont souvent des tâches répétitives autour des briefs, reportings, emails et relances clients.',
    tasks: ['Préparation de reporting', 'Synthèse de briefs', 'Relance client', 'Classement documents'],
    agents: ['Agent reporting', 'Agent mails', 'Agent relance'],
  },
  {
    slug: 'cabinet-conseil',
    title: 'IA administrative pour cabinets de conseil',
    description: 'Scanner les tâches administratives des cabinets de conseil : mails, documents, reporting, dossiers clients.',
    intro: 'Un cabinet de conseil peut utiliser l’IA pour préparer des synthèses, organiser des dossiers et réduire le temps de reporting, avec validation humaine.',
    tasks: ['Synthèse de documents', 'Préparation reporting', 'Suivi dossiers clients', 'Réponses récurrentes'],
    agents: ['Agent documents', 'Agent reporting', 'Agent dossiers clients'],
  },
  {
    slug: 'immobilier',
    title: 'IA administrative pour agences immobilières',
    description: 'Identifier les tâches répétitives en immobilier : dossiers clients, relances, documents et mails.',
    intro: 'L’immobilier génère beaucoup de documents, échanges clients, relances et dossiers à suivre. L’IA peut aider à préparer sans décider seule.',
    tasks: ['Suivi dossiers clients', 'Relances documents', 'Synthèse de demandes', 'Classement pièces'],
    agents: ['Agent dossiers clients', 'Agent relance', 'Agent documents'],
  },
  {
    slug: 'formation',
    title: 'IA administrative pour organismes de formation',
    description: 'Scanner les tâches administratives d’un organisme de formation : documents, dossiers, relances et reporting.',
    intro: 'Les organismes de formation gèrent de nombreux documents, suivis, relances et informations administratives répétitives.',
    tasks: ['Dossiers apprenants', 'Relance de documents', 'Reporting', 'Synthèse de demandes'],
    agents: ['Agent dossiers clients', 'Agent relance', 'Agent reporting'],
  },
  {
    slug: 'restauration',
    title: 'IA administrative pour restaurants et restauration',
    description: 'Mesurer les tâches administratives répétitives dans la restauration : mails, documents, fournisseurs et planning.',
    intro: 'Même dans la restauration, les tâches administratives s’accumulent : fournisseurs, documents, planning, messages et suivi.',
    tasks: ['Mails fournisseurs', 'Suivi documents', 'Planning', 'Reporting simple'],
    agents: ['Agent mails', 'Agent planning', 'Agent documents'],
  },
];

export function getSector(slug: string) {
  return sectors.find((sector) => sector.slug === slug);
}
