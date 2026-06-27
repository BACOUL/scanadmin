import Link from 'next/link';
import { guides } from '../../lib/guides';

export default function GuidesPage() {
  return (
    <main className="container page-section">
      <p style={{ color: '#0f766e', fontWeight: 800 }}>Ressources</p>
      <h1 className="page-title">Guides IA administrative pour PME</h1>
      <p className="page-lead">Des pages pratiques pour comprendre où l’IA peut faire gagner du temps, sans perdre le contrôle humain.</p>
      <div className="grid grid-3" style={{ marginTop: 28 }}>
        {guides.map((guide) => (
          <Link key={guide.slug} href={`/guides/${guide.slug}`} className="card content-card">
            <h2>{guide.title}</h2>
            <p>{guide.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
