export const metadata = {
  title: 'Méthodologie ScanAdmin | Estimation du coût administratif',
  description: 'Comprendre comment ScanAdmin estime le temps administratif, le coût mensuel et le potentiel récupérable avec des agents IA supervisés.',
};

export default function Page() {
  return (
    <main className="container page-section">
      <p style={{ color: '#0f766e', fontWeight: 800 }}>Méthodologie</p>
      <h1 className="page-title">Comment ScanAdmin estime vos pertes administratives</h1>
      <p className="page-lead">ScanAdmin aide les PME à mesurer avant d’automatiser. Le scan transforme des volumes de tâches en temps mensuel, puis en coût estimé. Le résultat sert à prioriser, pas à promettre un gain garanti.</p>

      <div className="grid grid-2" style={{ marginTop: 28 }}>
        <section className="card content-card">
          <h2>1. Volume de tâches</h2>
          <p>Le scan commence par les tâches répétitives : mails, devis, relances, factures, documents, dossiers clients, planning et reporting.</p>
          <h2>2. Temps moyen</h2>
          <p>Chaque tâche est associée à un temps moyen déclaré. Quelques minutes répétées tous les jours peuvent représenter plusieurs heures par mois.</p>
          <h2>3. Coût horaire</h2>
          <p>Le coût horaire permet de traduire le temps administratif en coût mensuel et annuel estimatif.</p>
        </section>
        <section className="card content-card">
          <h2>4. Potentiel récupérable</h2>
          <p>ScanAdmin applique une fourchette prudente. L’objectif est d’identifier un potentiel raisonnable, pas de supposer que tout est automatisable.</p>
          <h2>5. Agents recommandés</h2>
          <p>Les agents IA sont proposés uniquement sur les catégories où le volume et le temps semblent suffisants.</p>
          <h2>6. Validation humaine</h2>
          <p>L’IA prépare, classe ou propose. L’humain garde la validation finale, surtout pour les décisions commerciales, comptables ou sensibles.</p>
        </section>
      </div>

      <section className="card content-card" style={{ marginTop: 28 }}>
        <h2>Exemple simple</h2>
        <p>10 devis par semaine avec 20 minutes par devis représentent environ 14 heures par mois. Avec un coût horaire de 30 €, cela représente environ 420 € par mois. Si un agent IA permet seulement de préparer une partie du travail, le gain doit encore être vérifié dans le contexte réel de l’entreprise.</p>
      </section>
    </main>
  );
}
