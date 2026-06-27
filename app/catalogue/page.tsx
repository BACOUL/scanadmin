const agents = [
  ['Agent mails', 'Prépare des réponses, résume les demandes et classe les messages importants.'],
  ['Agent devis', 'Structure les demandes, prépare un brouillon de devis et signale les points à vérifier.'],
  ['Agent relance', 'Prépare les relances clients, documents manquants, retours de devis ou éléments en attente.'],
  ['Agent documents', 'Classe les pièces, résume les documents et aide à retrouver les informations utiles.'],
  ['Agent factures', 'Aide au pré-tri, à l’extraction d’informations et à la préparation des contrôles.'],
  ['Agent dossiers clients', 'Prépare les fiches, synthèses et suivis administratifs de dossiers clients.'],
  ['Agent reporting', 'Prépare des synthèses d’activité et des tableaux de suivi à partir des données disponibles.'],
];

export const metadata = {
  title: 'Agents IA administratifs supervisés | ScanAdmin',
  description: 'Catalogue des agents IA administratifs supervisés recommandés par ScanAdmin pour les PME.',
};

export default function Page() {
  return (
    <main className="container page-section">
      <p style={{ color: '#0f766e', fontWeight: 800 }}>Catalogue</p>
      <h1 className="page-title">Agents IA administratifs supervisés</h1>
      <p className="page-lead">ScanAdmin ne recommande pas une automatisation aveugle. Chaque agent est pensé pour préparer le travail, réduire les tâches répétitives et laisser la validation finale à l’humain.</p>
      <div className="grid grid-3" style={{ marginTop: 28 }}>
        {agents.map(([name, description]) => (
          <div key={name} className="card content-card">
            <h2>{name}</h2>
            <p>{description}</p>
            <p><strong>Règle :</strong> l’IA prépare, l’humain valide.</p>
          </div>
        ))}
      </div>
      <section className="card content-card" style={{ marginTop: 28 }}>
        <h2>Comment choisir le bon agent ?</h2>
        <p>Le bon agent dépend du volume de tâches, du temps moyen passé, du niveau de risque et de la facilité à vérifier le résultat. C’est pour cela que ScanAdmin commence par un scan avant toute recommandation.</p>
      </section>
    </main>
  );
}
