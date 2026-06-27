export const metadata = {
  title: 'Confidentialité | ScanAdmin',
  description: 'Politique de confidentialité de ScanAdmin pour le scan administratif IA et les demandes d’analyse personnalisée.',
};

export default function ConfidentialitePage() {
  return (
    <main className="container page-section">
      <p style={{ color: '#0f766e', fontWeight: 800 }}>Données</p>
      <h1 className="page-title">Confidentialité</h1>
      <p className="page-lead">ScanAdmin doit rester simple et prudent : collecter le minimum nécessaire, expliquer l’usage des données et ne pas vendre les informations transmises.</p>

      <div className="grid grid-2" style={{ marginTop: 28 }}>
        <section className="card content-card">
          <h2>Données du scan</h2>
          <p>Les réponses du scan servent à produire une estimation. Elles peuvent être conservées temporairement dans le navigateur de l’utilisateur pour afficher le résultat.</p>
          <h2>Demande d’analyse</h2>
          <p>Si l’utilisateur demande une analyse personnalisée, les informations transmises peuvent inclure nom, entreprise, email, téléphone, secteur et résumé du scan.</p>
        </section>
        <section className="card content-card">
          <h2>Finalité</h2>
          <p>Les données servent à répondre à la demande, préparer une analyse et identifier les tâches administratives à vérifier.</p>
          <h2>Engagement</h2>
          <p>Les données ne doivent pas être revendues. Les résultats ScanAdmin restent indicatifs et ne constituent pas une garantie de gain.</p>
        </section>
      </div>
    </main>
  );
}
