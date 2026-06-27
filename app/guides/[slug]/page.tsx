import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getGuide, guides } from '../../../lib/guides';

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const guide = getGuide(params.slug);
  if (!guide) return {};
  return {
    title: `${guide.title} | ScanAdmin`,
    description: guide.description,
  };
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const guide = getGuide(params.slug);
  if (!guide) notFound();

  return (
    <main className="container page-section">
      <Link href="/guides" style={{ color: '#0f766e', fontWeight: 800 }}>← Tous les guides</Link>
      <p style={{ color: '#0f766e', fontWeight: 800, marginTop: 24 }}>Guide ScanAdmin</p>
      <h1 className="page-title">{guide.title}</h1>
      <p className="page-lead">{guide.intro}</p>
      <div className="grid" style={{ marginTop: 28 }}>
        {guide.sections.map((section) => (
          <section key={section.title} className="card content-card">
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </section>
        ))}
      </div>
      <section className="card content-card" style={{ marginTop: 28 }}>
        <h2>À retenir</h2>
        <p>ScanAdmin sert à mesurer avant d’automatiser. Les résultats restent indicatifs et doivent être confirmés avant toute mise en place d’agent IA.</p>
        <Link className="button" href="/scan">{guide.cta}</Link>
      </section>
    </main>
  );
}
