export type Guide = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  sections: { title: string; body: string }[];
  cta: string;
  taskHref?: string;
  taskLabel?: string;
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
    taskHref: '/taches',
    taskLabel: 'Voir les tâches administratives',
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
    taskHref: '/taches',
    taskLabel: 'Voir les tâches à automatiser',
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
    taskHref: '/taches/devis',
    taskLabel: 'Voir la page devis',
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
    taskHref: '/taches/relances-clients',
    taskLabel: 'Voir la page relances',
  },
  {
    slug: 'agent-ia-documents',
    title: 'Agent IA documents : classer, résumer et retrouver les informations utiles',
    description: 'Comprendre comment un agent IA peut aider à traiter les documents entrants, pièces jointes et justificatifs avec validation humaine.',
    intro: 'Les documents entrants font perdre du temps quand ils arrivent par email, formulaires, dossiers clients ou échanges fournisseurs. L’IA peut préparer le tri, mais ne doit pas valider seule.',
    sections: [
      { title: 'Ce que l’agent peut préparer', body: 'Il peut identifier le type de document, résumer le contenu, extraire les informations utiles et signaler les pièces ou champs manquants.' },
      { title: 'Le risque à surveiller', body: 'Un mauvais classement ou une information mal extraite peut créer un oubli. Les documents importants doivent donc être relus avant archivage ou décision.' },
      { title: 'Quand tester', body: 'Le test devient intéressant si l’entreprise reçoit souvent les mêmes types de documents et perd du temps à les lire, trier ou retrouver.' },
    ],
    cta: 'Analyser mes documents entrants',
    taskHref: '/taches/documents-entrants',
    taskLabel: 'Voir la page documents',
  },
  {
    slug: 'agent-ia-dossiers-clients',
    title: 'Agent IA dossiers clients : suivre les pièces et prochaines actions',
    description: 'Utiliser un agent IA pour préparer des fiches de suivi, résumer les dossiers clients et signaler les pièces manquantes.',
    intro: 'Un dossier client accumule souvent échanges, documents, validations et prochaines étapes. L’IA peut aider à retrouver l’essentiel, mais pas décider qu’un dossier est complet.',
    sections: [
      { title: 'Aide possible', body: 'Un agent IA peut résumer l’historique, préparer une fiche de suivi, lister les pièces manquantes et proposer les prochaines actions à vérifier.' },
      { title: 'Limite importante', body: 'La complétude d’un dossier et les décisions associées doivent rester humaines, surtout si le dossier engage l’entreprise ou le client.' },
      { title: 'Bon premier test', body: 'Commencer sur des dossiers simples et répétitifs permet de mesurer le temps gagné sans risquer une mauvaise décision.' },
    ],
    cta: 'Analyser mes dossiers clients',
    taskHref: '/taches/dossiers-clients',
    taskLabel: 'Voir la page dossiers clients',
  },
  {
    slug: 'agent-ia-planning',
    title: 'Agent IA planning : préparer les contraintes sans confirmer seul',
    description: 'Comprendre comment l’IA peut aider à préparer des demandes de planning, confirmations et contraintes opérationnelles sans automatisation risquée.',
    intro: 'Le planning mélange souvent demandes clients, contraintes terrain, disponibilités et messages de confirmation. L’IA peut préparer, mais la validation opérationnelle reste indispensable.',
    sections: [
      { title: 'Ce que l’agent peut préparer', body: 'Il peut résumer une demande, lister les contraintes, signaler les informations manquantes et préparer un brouillon de confirmation.' },
      { title: 'Ce qu’il ne doit pas faire', body: 'L’IA ne doit pas confirmer une disponibilité, modifier un planning validé ou promettre une intervention sans validation humaine.' },
      { title: 'Quand c’est utile', body: 'Le potentiel existe si les demandes de planning sont fréquentes, répétitives et suffisamment simples pour être vérifiées rapidement.' },
    ],
    cta: 'Analyser mes tâches de planning',
    taskHref: '/taches/planning',
    taskLabel: 'Voir la page planning',
  },
  {
    slug: 'agent-ia-reporting',
    title: 'Agent IA reporting : préparer des synthèses sans inventer les chiffres',
    description: 'Utiliser un agent IA pour préparer des reportings, comptes rendus et synthèses internes avec contrôle des données sources.',
    intro: 'Le reporting devient un bon cas IA quand les données existent déjà. L’IA peut structurer et synthétiser, mais les chiffres doivent rester contrôlés.',
    sections: [
      { title: 'Aide possible', body: 'L’agent peut transformer des notes, tableaux ou informations fournies en synthèse claire, compte rendu ou liste de points à suivre.' },
      { title: 'Limite importante', body: 'L’IA ne doit pas inventer de données, corriger une source fausse ou interpréter seule des résultats sensibles.' },
      { title: 'Bon usage', body: 'Le bon test consiste à préparer des synthèses internes simples, puis à comparer le temps gagné avec le temps de relecture.' },
    ],
    cta: 'Analyser mes reportings',
    taskHref: '/taches/reporting',
    taskLabel: 'Voir la page reporting',
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
    taskHref: '/taches/factures',
    taskLabel: 'Voir la page factures',
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
    taskHref: '/secteurs/btp',
    taskLabel: 'Voir le secteur BTP',
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
    taskHref: '/secteurs/transport-logistique',
    taskLabel: 'Voir le secteur transport',
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
    taskHref: '/secteurs/nettoyage-professionnel',
    taskLabel: 'Voir le secteur nettoyage',
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
