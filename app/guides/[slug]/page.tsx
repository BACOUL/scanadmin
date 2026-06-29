import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getGuide, guides } from '../../../lib/guides';

const methodCards = [
  ['Mesurer', 'Estimer le volume, le temps moyen, la fréquence et le coût administratif lié au sujet.'],
  ['Prioriser', 'Comparer le potentiel avec le risque, la répétition et la facilité de validation humaine.'],
  ['Tester', 'Commencer par un périmètre court, mesurable et supervisé avant toute généralisation.'],
];

const safetyRules = [
  'Ne pas transmettre de données sensibles si elles ne sont pas nécessaires',
  'Ne pas laisser l’IA décider seule sur un sujet commercial, comptable ou contractuel',
  'Faire valider les résultats par une personne avant toute action externe',
  'Mesurer le temps réellement gagné pendant le test',
];

const decisionCriteria = [
  ['Fréquence', 'La tâche revient-elle chaque semaine ou chaque mois ?'],
  ['Temps perdu', 'Le volume justifie-t-il un test ou une analyse ?'],
  ['Risque', 'Une erreur peut-elle avoir un impact client, financier ou juridique ?'],
  ['Contrôle', 'Une personne peut-elle vérifier rapidement ce que l’IA prépare ?'],
];

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

  const relatedGuides = guides.filter((item) => item.slug !== guide.slug).slice(0, 3);

  return (
    <main>
      <section className="premium-hero">
        <div className="container hero-shell">
          <div className="hero-copy">
            <Link href="/guides" style={{ color: '#5eead4', fontWeight: 800 }}>← Tous les guides</Link>
            <p className="badge" style={{ marginTop: 22 }}>Guide ScanAdmin</p>
            <h1>{guide.title}</h1>
            <p className="hero-subtitle">{guide.intro}</p>
            <div className="hero-actions">
              <Link className="button" href="/scan">Lancer le scan gratuit</Link>
              <Link className="ghost-button" href="/analyse-personnalisee">Voir l’analyse personnalisée</Link>
            </div>
            <p className="hero-note">Chaque guide suit la même logique : comprendre le problème, mesurer le coût administratif, puis tester l’IA seulement si le cas est clair.</p>
          </div>

          <div className="report-preview">
            <div className="report-topline"><span>Guide</span><strong>PME</strong></div>
            <div className="report-metric-main"><span>Objectif</span><strong style={{ fontSize: 34 }}>Décider avant d’automatiser</strong></div>
            <div className="metric-grid">
              <div><span>Scan</span><strong>0 €</strong></div>
              <div><span>IA</span><strong>Supervisée</strong></div>
            </div>
            <div className="priority-list">
              <p>À retenir</p>
              <span>Mesurer le temps</span>
              <span>Évaluer le risque</span>
              <span>Valider humainement</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container premium-section split-section">
        <div>
          <p className="section-kicker">Objectif du guide</p>
          <h2>Comprendre le sujet sans tomber dans l’automatisation automatique.</h2>
        </div>
        <div className="text-stack">
          <p>{guide.description}</p>
          <p>Le but n’est pas de choisir un outil IA parce qu’il est à la mode. Le but est d’identifier si la tâche concernée est assez fréquente, coûteuse, répétitive et vérifiable pour justifier un test.</p>
          <p>ScanAdmin relie donc chaque sujet à une décision simple : mesurer, prioriser, puis tester sous validation humaine.</p>
          {guide.taskHref ? <Link className="ghost-button" href={guide.taskHref}>{guide.taskLabel}</Link> : null}
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Guide pratique</p>
          <h2>Les points essentiels à comprendre.</h2>
        </div>
        <div className="grid" style={{ marginTop: 26 }}>
          {guide.sections.map((section) => (
            <article key={section.title} className="card content-card">
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Méthode ScanAdmin</p>
          <h2>Transformer le guide en décision concrète.</h2>
        </div>
        <div className="comparison-grid">
          {methodCards.map(([title, text]) => (
            <div key={title} className="comparison-card muted-card">
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container premium-section split-section reversed">
        <div className="deliverable-preview">
          <div className="deliverable-header"><span>Critères de décision</span><strong>Avant test</strong></div>
          {decisionCriteria.map(([title, text]) => (
            <div key={title} className="deliverable-row">
              <strong>{title}</strong>
              <span>{text}</span>
            </div>
          ))}
        </div>
        <div>
          <p className="section-kicker">Avant de passer à l’action</p>
          <h2>Un bon cas IA doit rester simple à vérifier.</h2>
          <p className="section-text">Le meilleur premier cas n’est pas toujours le plus impressionnant. C’est souvent une tâche répétitive, limitée, avec un volume suffisant et un contrôle humain rapide.</p>
          <p className="section-text">Si la tâche est rare, trop sensible ou impossible à vérifier, il vaut mieux la reporter et commencer par un cas plus sûr.</p>
        </div>
      </section>

      <section className="container premium-section split-section">
        <div>
          <p className="section-kicker">Sécurité</p>
          <h2>Les règles à garder en tête avec l’IA administrative.</h2>
        </div>
        <div className="deliverable-preview">
          <div className="deliverable-header"><span>Bonnes pratiques</span><strong>Supervision</strong></div>
          {safetyRules.map((rule) => (
            <div key={rule} className="deliverable-row"><span>{rule}</span></div>
          ))}
        </div>
      </section>

      <section className="container premium-section comparison-section">
        <div className="section-heading">
          <p className="section-kicker">À retenir</p>
          <h2>Ce guide doit mener vers une mesure réelle.</h2>
        </div>
        <div className="comparison-grid">
          <div className="comparison-card muted-card"><h3>Comprendre</h3><p>Le guide donne le cadre et les points de vigilance.</p></div>
          <div className="comparison-card highlight-card"><h3>Mesurer</h3><p>Le scan gratuit estime votre propre charge administrative et le potentiel à prioriser.</p></div>
          <div className="comparison-card muted-card"><h3>Décider</h3><p>L’analyse personnalisée confirme les hypothèses et propose un premier plan de test.</p></div>
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Autres guides</p>
          <h2>Continuer la lecture.</h2>
        </div>
        <div className="comparison-grid">
          {relatedGuides.map((item) => (
            <Link key={item.slug} href={`/guides/${item.slug}`} className="comparison-card muted-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span style={{ fontWeight: 800 }}>Lire le guide →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="container premium-final-cta">
        <p className="section-kicker">Passer du guide à vos chiffres</p>
        <h2>{guide.cta}</h2>
        <p>Le scan gratuit transforme la lecture en estimation concrète : temps administratif, coût mensuel et premières priorités IA.</p>
        <div className="hero-actions center-actions">
          <Link className="button" href="/scan">Lancer mon scan gratuit</Link>
          <Link className="ghost-button" href="/guides">Voir tous les guides</Link>
        </div>
      </section>
    </main>
  );
}
