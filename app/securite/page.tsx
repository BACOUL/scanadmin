export const metadata = {
  title: 'Sécurité et données | ScanAdmin',
  description: 'Principes de sécurité ScanAdmin : données minimales, résultats indicatifs, agents IA supervisés et validation humaine.',
};

export default function SafetyPage() {
  return (
    <main className="container page-section">
      <p style={{ color: '#0f766e', fontWeight: 800 }}>Sécurité</p>
      <h1 className="page-title">Une approche prudente de l’IA administrative</h1>
      <p className="page-lead">ScanAdmin est construit autour d’un principe simple : mesurer, recommander prudemment, puis garder une validation humaine.</p>

      <div className="grid grid-2" style={{ marginTop: 28 }}>
        <section className="card content-card">
          <h2>Données minimales</h2>
          <p>Le scan demande seulement les informations nécessaires pour produire une estimation administrative. Les résultats sont indicatifs et servent à prioriser.</p>
          <h2>Validation humaine</h2>
          <p>Les agents IA recommandés doivent préparer ou structurer le travail, pas prendre seuls des décisions sensibles.</p>
        </section>
        <section className="card content-card">
          <h2>Limites claires</h2>
          <p>ScanAdmin ne garantit pas un retour sur investissement, une réduction de coût ou une performance sans analyse réelle du contexte de l’entreprise.</p>
          <h2>Déploiement progressif</h2>
          <p>Le meilleur usage consiste à tester un agent sur une tâche simple, fréquente et vérifiable avant toute extension.</p>
        </section>
      </div>
    </main>
  );
}
