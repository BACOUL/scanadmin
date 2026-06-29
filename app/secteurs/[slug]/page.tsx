import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getSector, sectors } from '../../../lib/sectors';

const aiFirstSteps = [
  ['01', 'Identifier les tâches du métier', 'Lister les tâches administratives qui reviennent souvent dans ce secteur.'],
  ['02', 'Relier chaque tâche à un agent IA', 'Repérer si un agent mails, devis, relance, documents, dossiers ou reporting peut préparer le travail.'],
  ['03', 'Mesurer le potentiel', 'Estimer le temps mensuel, le coût et le niveau de répétition avant toute décision.'],
  ['04', 'Tester sous supervision', 'Commencer par un test limité, avec validation humaine, avant d’étendre l’usage.'],
];

const decisionCriteria = [
  ['Volume', 'La tâche revient-elle assez souvent pour justifier un agent IA ?'],
  ['Répétition', 'Les demandes ou documents se ressemblent-ils suffisamment ?'],
  ['Risque', 'Une erreur peut-elle avoir un impact client, financier, opérationnel ou contractuel ?'],
  ['Contrôle humain', 'Une personne peut-elle vérifier rapidement ce que l’IA prépare ?'],
];

const safetyRules = [
  'Ne pas donner d’accès aux outils internes pour un premier scan',
  'Ne pas laisser l’IA valider seule un prix, une facture ou un engagement',
  'Faire relire les brouillons avant tout envoi client',
  'Mesurer le temps réellement gagné pendant le test',
  'Arrêter le test si la relecture humaine devient trop lourde',
];

const agentTaskLinks: Record<string, string> = {
  'Agent devis': '/taches/devis',
  'Agent relance': '/taches/relances-clients',
  'Agent mails': '/taches/emails-administratifs',
  'Agent documents': '/taches/documents-entrants',
  'Agent reporting': '/taches/reporting',
  'Agent dossiers clients': '/taches/dossiers-clients',
  'Agent planning': '/taches/planning',
};

export function generateStaticParams() {
  return sectors.map((sector) => ({ slug: sector.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const sector = getSector(params.slug);
  if (!sector) return {};
  return {
    title: `${sector.title} | Agents IA administratifs supervisés | ScanAdmin`,
    description: sector.description,
  };
}

export default function SectorPage({ params }: { params: { slug: string } }) {
  const sector = getSector(params.slug);
  if (!sector) notFound();

  const relatedSectors = sectors.filter((item) => item.slug !== sector.slug).slice(0, 3);

  return (
    <main>
      <section className="premium-hero">
        <div className="container hero-shell">
          <div className="hero-copy">
            <Link href="/secteurs" style={{ color: '#5eead4', fontWeight: 800 }}>← Tous les secteurs</Link>
            <p className="badge" style={{ marginTop: 22 }}>Secteur IA-first</p>
            <h1>{sector.title}</h1>
            <p className="hero-subtitle">{sector.intro}</p>
            <div className="hero-actions">
              <Link className="button" href="/scan">Scanner mon administratif</Link>
              <Link className="ghost-button" href="/catalogue">Voir les agents IA</Link>
            </div>
            <p className="hero-note">Logique ScanAdmin : tâches du secteur → agents IA possibles → mesure du potentiel → test supervisé.</p>
          </div>

          <div className="report-preview">
            <div className="report-topline"><span>Secteur</span><strong>IA supervisée</strong></div>
            <div className="report-metric-main"><span>Priorité</span><strong style={{ fontSize: 34 }}>Trouver le bon premier agent IA</strong></div>
            <div className="metric-grid">
              <div><span>Tâches</span><strong>{sector.tasks.length}</strong></div>
              <div><span>Agents</span><strong>{sector.agents.length}</strong></div>
            </div>
            <div className="priority-list">
              <p>Agents possibles</p>
              {sector.agents.slice(0, 3).map((agent) => <span key={agent}>{agent}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="container premium-section split-section">
        <div>
          <p className="section-kicker">Lecture métier</p>
          <h2>Dans ce secteur, l’IA devient utile quand elle part des tâches administratives réelles.</h2>
        </div>
        <div className="text-stack">
          <p>{sector.description}</p>
          <p>Le but n’est pas de choisir un outil IA générique, mais d’identifier les tâches répétitives qui coûtent vraiment du temps dans votre activité.</p>
          <p>ScanAdmin mesure ensuite le volume, le coût et le niveau de risque afin de recommander un premier agent IA supervisé seulement si le cas est pertinent.</p>
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Tâches fréquentes</p>
          <h2>Les tâches administratives à mesurer en priorité.</h2>
          <p>Ces tâches sont des points de départ possibles. Le scan permet de vérifier leur poids réel dans votre entreprise.</p>
        </div>
        <div className="comparison-grid">
          {sector.tasks.map((task) => (
            <div key={task} className="comparison-card muted-card">
              <h3>{task}</h3>
              <p>À mesurer : fréquence mensuelle, temps moyen, complexité et niveau de validation nécessaire.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container premium-section split-section reversed">
        <div className="deliverable-preview">
          <div className="deliverable-header"><span>Agents IA adaptés</span><strong>Supervisés</strong></div>
          {sector.agents.map((agent) => {
            const href = agentTaskLinks[agent];
            return (
              <div key={agent} className="deliverable-row">
                <strong>{agent}</strong>
                <span>prépare le travail, mais ne valide pas seul</span>
                {href ? <Link className="ghost-button" href={href}>Voir la tâche liée</Link> : null}
              </div>
            );
          })}
        </div>
        <div>
          <p className="section-kicker">Agents IA-first</p>
          <h2>Les agents IA utiles dépendent du métier et du volume réel.</h2>
          <p className="section-text">Un agent IA n’a de valeur que s’il traite une tâche assez fréquente, assez répétitive et assez facile à vérifier.</p>
          <p className="section-text">Dans ce secteur, les agents listés sont des pistes. Le scan et l’analyse servent à choisir lequel tester en premier.</p>
          <Link className="button" href="/scan">Mesurer mon potentiel</Link>
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Méthode IA-first</p>
          <h2>Comment passer du secteur au premier test IA.</h2>
        </div>
        <div className="process-grid">
          {aiFirstSteps.map(([number, title, text]) => (
            <div key={number} className="process-card">
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Critères de décision</p>
          <h2>Avant de tester un agent IA, quatre questions doivent être posées.</h2>
        </div>
        <div className="comparison-grid">
          {decisionCriteria.map(([title, text]) => (
            <div key={title} className="comparison-card muted-card">
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container premium-section split-section">
        <div>
          <p className="section-kicker">Sécurité et limites</p>
          <h2>L’approche IA-first ne veut pas dire automatisation totale.</h2>
          <p className="section-text">Le bon agent IA est celui qui fait gagner du temps sans faire perdre le contrôle. Les décisions sensibles doivent rester humaines.</p>
        </div>
        <div className="deliverable-preview">
          <div className="deliverable-header"><span>Garde-fous</span><strong>Contrôle humain</strong></div>
          {safetyRules.map((rule) => (
            <div key={rule} className="deliverable-row"><span>{rule}</span></div>
          ))}
        </div>
      </section>

      <section className="container premium-section comparison-section">
        <div className="section-heading">
          <p className="section-kicker">Pourquoi commencer par un scan ?</p>
          <h2>Deux entreprises du même secteur peuvent avoir des priorités IA différentes.</h2>
        </div>
        <div className="comparison-grid">
          <div className="comparison-card muted-card"><h3>Même secteur</h3><p>Les tâches administratives peuvent sembler similaires d’une entreprise à l’autre.</p></div>
          <div className="comparison-card highlight-card"><h3>Priorités différentes</h3><p>Le volume, le temps perdu, les outils et le risque changent selon l’organisation.</p></div>
          <div className="comparison-card muted-card"><h3>Scan nécessaire</h3><p>Le scan permet de mesurer avant de recommander un agent IA ou une analyse.</p></div>
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Autres secteurs</p>
          <h2>Comparer avec d’autres métiers.</h2>
        </div>
        <div className="comparison-grid">
          {relatedSectors.map((item) => (
            <Link key={item.slug} href={`/secteurs/${item.slug}`} className="comparison-card muted-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span style={{ fontWeight: 800 }}>Voir le secteur →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="container premium-final-cta">
        <p className="section-kicker">Passer du secteur à vos chiffres</p>
        <h2>Quel agent IA administratif tester en premier dans votre entreprise ?</h2>
        <p>Le scan gratuit estime votre charge administrative et vous aide à repérer les tâches qui méritent une analyse personnalisée.</p>
        <div className="hero-actions center-actions">
          <Link className="button" href="/scan">Scanner mon administratif</Link>
          <Link className="ghost-button" href="/analyse-personnalisee">Voir l’analyse personnalisée</Link>
        </div>
      </section>
    </main>
  );
}
