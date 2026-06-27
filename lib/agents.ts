export type Agent = {
  key: string;
  name: string;
  description: string;
};

export const agents: Agent[] = [
  {
    key: 'mail-agent',
    name: 'Agent mails',
    description: 'Trie, résume et prépare des réponses aux mails importants.',
  },
  {
    key: 'quote-agent',
    name: 'Agent devis',
    description: 'Prépare des brouillons de devis à partir des demandes clients.',
  },
  {
    key: 'followup-agent',
    name: 'Agent relance',
    description: 'Repère les relances à faire et prépare les messages.',
  },
  {
    key: 'invoice-agent',
    name: 'Agent factures',
    description: 'Aide au suivi et au classement des factures.',
  },
  {
    key: 'document-agent',
    name: 'Agent documents',
    description: 'Classe, résume et extrait les informations des documents.',
  },
  {
    key: 'client-file-agent',
    name: 'Agent dossiers clients',
    description: 'Vérifie les pièces manquantes et prépare les rappels.',
  },
  {
    key: 'planning-agent',
    name: 'Agent planning',
    description: 'Aide à organiser les rendez-vous, interventions et rappels.',
  },
  {
    key: 'reporting-agent',
    name: 'Agent reporting',
    description: 'Produit des synthèses hebdomadaires et alertes simples.',
  },
];

export function getAgentByKey(key: string) {
  return agents.find((agent) => agent.key === key);
}
