export type Guide = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  sections: { title: string; body: string }[];
  cta: string;
};

export const guides: Guide[] = [
  {
    slug: 'audit-ia-pme',
    title: 'Audit IA pour PME : par où commencer sans se tromper',
    description: 'Comprendre comment lancer un audit IA simple pour identifier les tâches administratives répétitives les plus rentables à traiter.',
    intro: 'Un audit IA utile ne commence pas par choisir un outil. Il commence par mesurer les tâches répétitives, leur fréquence, leur coût et leur risque opérationnel.',
    sections: [
      { title: 'Le bon point de départ', body: 'Pour une PME, le premier objectif n’est pas de tout automatiser. Il faut repérer les tâches qui consomment du temps chaque semaine : mails, relances, devis, factures, dossiers clients, documents et reporting.' },
      { title: 'Ce que ScanAdmin mesure', body: 'ScanAdmin transforme les volumes déclarés en temps mensuel estimé, puis en coût. Le résultat sert à prioriser les tâches à analyser, pas à promettre un gain automatique.' },
      { title: 'Pourquoi une validation humaine reste nécessaire', body: 'Les agents IA peuvent préparer, classer, résumer ou proposer une action. Mais pour une PME, les décisions sensibles doivent rester validées par une personne responsable.' },
    ],
    cta: 'Lancer un scan administratif gratuit',
  },
  {
    slug: 'agent-ia-administratif',
    title: 'Agent IA administratif : usages concrets pour une PME',
    description: 'Exemples concrets d’agents IA administratifs supervisés pour gagner du temps sans perdre le contrôle.',
    intro: 'Un agent IA administratif n’est pas un robot qui remplace tout. C’est un assistant supervisé qui prépare une partie du travail répétitif.',
    sections: [
      { title: 'Usages simples', body: 'Un agent peut préparer des réponses email, résumer des demandes clients, classer des documents, générer une première version de devis ou préparer une relance.' },
      { title: 'Usages à éviter au départ', body: 'Il vaut mieux éviter de commencer par les décisions juridiques, RH sensibles, factures complexes ou engagements commerciaux sans validation humaine.' },
      { title: 'Méthode prudente', body: 'La bonne approche consiste à tester un seul agent sur une tâche répétitive à faible risque, mesurer le temps gagné, puis étendre progressivement.' },
    ],
    cta: 'Découvrir les agents recommandés',
  },
  {
    slug: 'automatiser-taches-administratives',
    title: 'Automatiser les tâches administratives : méthode simple et prudente',
    description: 'Méthode pour automatiser les tâches administratives répétitives avec des agents IA supervisés.',
    intro: 'L’automatisation administrative devient intéressante quand une tâche est fréquente, répétitive, structurée et vérifiable.',
    sections: [
      { title: 'Identifier les tâches répétitives', body: 'Les meilleures candidates sont souvent les relances, les réponses récurrentes, les devis simples, le classement documentaire ou la préparation de reporting.' },
      { title: 'Chiffrer avant de choisir un outil', body: 'Automatiser une tâche qui coûte peu de temps peut faire perdre de l’argent. Il faut d’abord estimer le volume mensuel et le coût associé.' },
      { title: 'Garder le contrôle', body: 'Une automatisation sérieuse doit prévoir une étape de relecture, des règles claires et une limite sur ce que l’IA peut faire seule.' },
    ],
    cta: 'Chiffrer mes tâches administratives',
  },
  {
    slug: 'cout-administratif-pme',
    title: 'Coût administratif d’une PME : comment l’estimer rapidement',
    description: 'Estimer le coût mensuel des tâches administratives répétitives dans une PME.',
    intro: 'Le coût administratif invisible est souvent sous-estimé : quelques minutes par tâche deviennent vite plusieurs dizaines d’heures par mois.',
    sections: [
      { title: 'La formule simple', body: 'Volume mensuel x temps moyen x coût horaire. Cette formule donne une première estimation exploitable pour prioriser.' },
      { title: 'Les postes fréquents', body: 'Mails, devis, relances, factures, documents, dossiers clients, planning et reporting concentrent souvent une part importante du temps administratif.' },
      { title: 'Pourquoi ce n’est qu’une estimation', body: 'Le résultat dépend des réponses données, de l’organisation interne et de la complexité réelle des tâches.' },
    ],
    cta: 'Calculer mon coût administratif',
  },
  {
    slug: 'agent-ia-devis',
    title: 'Agent IA pour devis : préparer plus vite sans valider automatiquement',
    description: 'Comprendre comment un agent IA peut aider à préparer des devis simples en PME.',
    intro: 'Les devis répétitifs sont une bonne porte d’entrée pour tester un agent IA, à condition de garder une validation humaine finale.',
    sections: [
      { title: 'Ce que l’agent peut préparer', body: 'Il peut structurer la demande, retrouver des informations, proposer un brouillon et signaler les points à vérifier.' },
      { title: 'Ce qu’il ne doit pas décider seul', body: 'Le prix final, les conditions commerciales, les engagements et les exceptions doivent rester validés par une personne.' },
      { title: 'Quand c’est rentable', body: 'Le potentiel existe quand l’entreprise produit plusieurs devis similaires chaque semaine et que la préparation prend du temps.' },
    ],
    cta: 'Tester le potentiel devis',
  },
  {
    slug: 'agent-ia-relance-client',
    title: 'Agent IA de relance client : gagner du temps sans perdre la relation',
    description: 'Utiliser un agent IA supervisé pour préparer des relances clients et administratives.',
    intro: 'Les relances sont fréquentes, répétitives et souvent chronophages. Un agent IA peut aider à préparer les messages et suivre les priorités.',
    sections: [
      { title: 'Relances possibles', body: 'Demandes de documents, retours de devis, pièces manquantes, factures en attente ou informations clients peuvent être préparées plus vite.' },
      { title: 'Ton et contrôle', body: 'La relation client impose un ton adapté. L’IA peut proposer, mais l’humain doit garder la main sur les messages importants.' },
      { title: 'Priorité', body: 'Ce type d’agent est pertinent si les relances sont nombreuses chaque semaine et dispersées entre plusieurs outils.' },
    ],
    cta: 'Analyser mes relances',
  },
  {
    slug: 'agent-ia-factures',
    title: 'Agent IA factures : aide au tri, contrôle et préparation',
    description: 'Usages prudents d’un agent IA autour des factures et documents administratifs.',
    intro: 'Un agent IA peut aider à trier et préparer le traitement des factures, mais ne doit pas remplacer le contrôle comptable.',
    sections: [
      { title: 'Aide possible', body: 'Classement, résumé, extraction d’informations, détection de pièces manquantes et préparation de listes de contrôle.' },
      { title: 'Limite importante', body: 'La validation comptable, fiscale ou juridique doit rester humaine ou passer par les outils métiers adaptés.' },
      { title: 'Bon usage', body: 'Commencer par le pré-tri et la préparation des contrôles permet de réduire le risque tout en gagnant du temps.' },
    ],
    cta: 'Estimer le temps facture',
  },
  {
    slug: 'ia-administrative-btp',
    title: 'IA administrative pour le BTP : devis, documents et relances',
    description: 'Exemples d’usages IA administratifs pour entreprises du BTP et travaux.',
    intro: 'Dans le BTP, une partie du temps administratif part dans les devis, les pièces clients, les relances et les documents de chantier.',
    sections: [
      { title: 'Cas fréquents', body: 'Préparation de devis simples, relance de documents, classement de pièces, synthèse de demandes et aide au suivi administratif.' },
      { title: 'Approche prudente', body: 'Les engagements techniques, prix et responsabilités doivent toujours être validés par l’entreprise.' },
      { title: 'Intérêt du scan', body: 'Le scan permet d’identifier si le volume administratif justifie un agent IA ou si une simple organisation suffit.' },
    ],
    cta: 'Scanner mon administratif BTP',
  },
  {
    slug: 'ia-administrative-transport',
    title: 'IA administrative pour transport et logistique',
    description: 'Identifier les tâches administratives répétitives dans le transport et la logistique.',
    intro: 'Transport et logistique génèrent de nombreuses tâches répétitives : documents, échanges clients, suivi, reporting et relances.',
    sections: [
      { title: 'Tâches candidates', body: 'Synthèse d’échanges, préparation de réponses, classement documentaire, suivi de demandes et relances administratives.' },
      { title: 'Validation nécessaire', body: 'Les informations opérationnelles sensibles doivent être contrôlées avant envoi ou décision.' },
      { title: 'Objectif', body: 'Réduire le temps passé à préparer l’information sans automatiser aveuglément les décisions.' },
    ],
    cta: 'Scanner mes tâches logistiques',
  },
  {
    slug: 'ia-administrative-nettoyage',
    title: 'IA administrative pour entreprises de nettoyage',
    description: 'Usages IA pour devis, relances et documents dans le nettoyage professionnel.',
    intro: 'Les entreprises de nettoyage gèrent souvent devis, plannings, relances et documents clients avec peu de temps administratif disponible.',
    sections: [
      { title: 'Usages utiles', body: 'Préparation de devis récurrents, relances de documents, réponses aux demandes clients et synthèse de consignes.' },
      { title: 'Pourquoi mesurer', body: 'Avant de mettre en place un agent, il faut savoir si les tâches répétitives coûtent assez de temps pour justifier l’effort.' },
      { title: 'Mise en place progressive', body: 'Un premier agent doit traiter une tâche simple, mesurable et vérifiable.' },
    ],
    cta: 'Scanner mon administratif nettoyage',
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
