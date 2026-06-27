export const metadata = {
  title: 'Exemple de rapport ScanAdmin | Audit IA administratif PME',
  description: 'Voir la structure d’un rapport ScanAdmin : coût administratif, tâches prioritaires et agents IA supervisés recommandés.',
};

export default function Page() {
  return (
    <main className="container page-section">
      <p style={{ color: '#0f766e', fontWeight: 800 }}>Exemple</p>
      <h1 className="page-title">Exemple de rapport ScanAdmin</h1>
      <p className="page-lead">Un rapport ScanAdmin transforme le scan en décisions simples : coût administratif estimé, tâches prioritaires, agents IA à tester et limites à respecter.</p>

      <div className="grid grid-3" style={{ marginTop: 28 }}>
        <div className="card content-card"><h2>79 h/mois</h2><p>Temps administratif répétitif estimé.</p></div>
        <div className="card content-card"><h2>2 373 €</h2><p>Coût mensuel estimatif selon le coût horaire indiqué.</p></div>
        <div className="card content-card"><h2>26 à 43 h</h2><p>Fourchette récupérable avec agents IA supervisés.</p></div>
      </div>

      <div className="grid grid-2" style={{ marginTop: 28 }}>
        <section className="card content-card">
          <h2>Priorités détectées</h2>
          <p>Le rapport classe les catégories les plus coûteuses : devis, relances, mails, documents ou dossiers clients.</p>
          <h2>Pourquoi c’est utile</h2>
          <p>La PME évite de choisir un outil IA au hasard. Elle commence par la tâche qui semble coûter le plus de temps.</p>
        </section>
        <section className="card content-card">
          <h2>Recommandations</h2>
          <p>Le rapport propose des agents IA supervisés à tester, avec une règle claire : l’IA prépare, l’humain valide.</p>
          <h2>Prochaine étape</h2>
          <p>Une analyse personnalisée permet de confirmer les chiffres et de définir un premier agent à mettre en place.</p>
        </section>
      </div>
    </main>
  );
}
