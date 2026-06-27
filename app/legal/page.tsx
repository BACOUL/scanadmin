export const metadata = {
  title: 'Informations légales | ScanAdmin',
  description: 'Informations légales du site ScanAdmin, limites de responsabilité et contact.',
};

export default function LegalPage() {
  return (
    <main className="container page-section">
      <p style={{ color: '#0f766e', fontWeight: 800 }}>Informations légales</p>
      <h1 className="page-title">Informations du site</h1>
      <div className="card content-card">
        <h2>Éditeur</h2>
        <p>Les informations complètes de l’éditeur seront finalisées avant l’ouverture commerciale complète du service.</p>
        <h2>Contact</h2>
        <p>Contact : contact@scanadmin.fr</p>
        <h2>Hébergement</h2>
        <p>Le site est déployé avec Vercel.</p>
        <h2>Responsabilité</h2>
        <p>Les résultats ScanAdmin sont des estimations indicatives. Ils ne garantissent pas un gain réel, un retour sur investissement ou une performance sans analyse personnalisée.</p>
        <h2>Propriété intellectuelle</h2>
        <p>Les textes, éléments graphiques, contenus et structures du site appartiennent à ScanAdmin ou à leurs titulaires respectifs.</p>
      </div>
    </main>
  );
}
