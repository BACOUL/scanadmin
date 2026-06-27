import Link from 'next/link';

export const metadata = {
  title: 'Qui sommes-nous | ScanAdmin',
  description: 'Découvrez la vision de ScanAdmin : aider les PME à mesurer leur charge administrative avant de choisir des agents IA supervisés.',
};

export default function AboutPage() {
  return (
    <main className="container page-section">
      <p style={{ color: '#0f766e', fontWeight: 800 }}>À propos</p>
      <h1 className="page-title">ScanAdmin aide les PME à mesurer avant d’automatiser</h1>
      <p className="page-lead">ScanAdmin part d’un constat simple : beaucoup d’entreprises veulent utiliser l’IA, mais ne savent pas quelles tâches administratives traiter en premier.</p>

      <div className="grid grid-2" style={{ marginTop: 28 }}>
        <section className="card content-card">
          <h2>Notre approche</h2>
          <p>Avant de parler outil, intégration ou agent IA, il faut comprendre où part le temps administratif : mails, devis, relances, factures, documents, dossiers clients, planning ou reporting.</p>
          <p>Le scan donne une première estimation du volume, du coût et du potentiel récupérable. L’objectif est de prioriser, pas de promettre un résultat automatique.</p>
        </section>
        <section className="card content-card">
          <h2>Notre position</h2>
          <p>Nous défendons une IA supervisée : l’IA prépare, l’humain valide. Cette approche est plus adaptée aux PME qu’une automatisation totale et risquée.</p>
          <p>ScanAdmin doit rester clair, prudent et utile pour les dirigeants qui veulent avancer sans se faire vendre une solution magique.</p>
        </section>
      </div>

      <section className="card content-card" style={{ marginTop: 28 }}>
        <h2>Le rôle de ScanAdmin</h2>
        <p>ScanAdmin n’est pas un cabinet de conseil traditionnel ni un simple générateur de texte IA. C’est un point d’entrée pour chiffrer les tâches administratives répétitives et identifier les zones où un agent IA supervisé peut être utile.</p>
        <Link className="button" href="/scan">Lancer mon scan gratuit</Link>
      </section>
    </main>
  );
}
