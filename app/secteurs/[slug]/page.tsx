import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getSector, sectors } from '../../../lib/sectors';

export function generateStaticParams() {
  return sectors.map((sector) => ({ slug: sector.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const sector = getSector(params.slug);
  if (!sector) return {};
  return {
    title: `${sector.title} | ScanAdmin`,
    description: sector.description,
  };
}

export default function SectorPage({ params }: { params: { slug: string } }) {
  const sector = getSector(params.slug);
  if (!sector) notFound();

  return (
    <main className="container page-section">
      <Link href="/secteurs" style={{ color: '#0f766e', fontWeight: 800 }}>← Tous les secteurs</Link>
      <p style={{ color: '#0f766e', fontWeight: 800, marginTop: 24 }}>Page secteur</p>
      <h1 className="page-title">{sector.title}</h1>
      <p className="page-lead">{sector.intro}</p>

      <div className="grid grid-2" style={{ marginTop: 28 }}>
        <section className="card content-card">
          <h2>Tâches administratives fréquentes</h2>
          <ul>
            {sector.tasks.map((task) => <li key={task}>{task}</li>)}
          </ul>
        </section>
        <section className="card content-card">
          <h2>Agents IA souvent utiles</h2>
          <ul>
            {sector.agents.map((agent) => <li key={agent}>{agent}</li>)}
          </ul>
        </section>
      </div>

      <section className="card content-card" style={{ marginTop: 28 }}>
        <h2>Pourquoi commencer par un scan ?</h2>
        <p>Deux entreprises du même secteur peuvent avoir des charges administratives très différentes. Le scan permet d’estimer le volume, le coût et les priorités avant de proposer un agent IA.</p>
        <p>Les résultats restent indicatifs. La mise en place d’un agent IA doit toujours garder une validation humaine.</p>
        <Link className="button" href="/scan">Scanner mon administratif</Link>
      </section>
    </main>
  );
}
