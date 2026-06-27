import Link from 'next/link';
import { sectors } from '../../lib/sectors';

export const metadata = {
  title: 'IA administrative par secteur | ScanAdmin',
  description: 'Pages sectorielles ScanAdmin pour PME : BTP, transport, nettoyage, sécurité, espaces verts, maintenance, commerce, immobilier et plus.',
};

export default function SectorsPage() {
  return (
    <main className="container page-section">
      <p style={{ color: '#0f766e', fontWeight: 800 }}>Secteurs</p>
      <h1 className="page-title">IA administrative par secteur</h1>
      <p className="page-lead">Chaque métier a ses tâches répétitives. ScanAdmin aide à mesurer la charge administrative avant de recommander un agent IA supervisé.</p>
      <div className="grid grid-3" style={{ marginTop: 28 }}>
        {sectors.map((sector) => (
          <Link key={sector.slug} href={`/secteurs/${sector.slug}`} className="card content-card">
            <h2>{sector.title}</h2>
            <p>{sector.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
