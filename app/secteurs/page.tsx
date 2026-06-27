import Link from 'next/link';
import { sectors } from '../../lib/sectors';

const aiFirstPrinciples = [
  ['Partir du métier', 'Chaque secteur a ses tâches répétitives, ses risques et ses contraintes. ScanAdmin commence par ce contexte métier.'],
  ['Identifier les agents IA utiles', 'L’objectif n’est pas de vendre un outil générique, mais de repérer quel agent IA supervisé peut préparer le bon travail.'],
  ['Mesurer avant de déployer', 'Le scan estime le temps et le coût administratif avant toute mise en place.'],
  ['Garder le contrôle humain', 'Les agents IA préparent, classent, résument ou proposent. Les décisions sensibles restent humaines.'],
];

const sectorFamilies = [
  {
    title: 'Métiers terrain',
    description: 'BTP, nettoyage, sécurité, espaces verts, maintenance, transport : beaucoup de documents, devis, relances et suivis récurrents.',
    slugs: ['btp', 'transport-logistique', 'nettoyage-professionnel', 'securite-privee', 'espaces-verts', 'maintenance-industrielle'],
  },
  {
    title: 'Services et conseil',
    description: 'Agences, cabinets, formation et services B2B : mails, reportings, dossiers clients, briefs et synthèses répétitives.',
    slugs: ['agence-marketing', 'cabinet-conseil', 'formation'],
  },
  {
    title: 'Commerce, immobilier et restauration',
    description: 'Des secteurs où l’administratif s’accumule vite entre clients, fournisseurs, documents, planning et relances.',
    slugs: ['commerce-detail', 'immobilier', 'restauration'],
  },
];

const path = [
  ['01', 'Choisir votre secteur', 'Lire les tâches administratives les plus fréquentes dans votre métier.'],
  ['02', 'Repérer les agents IA possibles', 'Identifier les agents qui peuvent préparer le travail : mails, devis, relances, documents ou reporting.'],
  ['03', 'Lancer le scan', 'Mesurer votre propre volume administratif avant toute décision.'],
  ['04', 'Prioriser le premier test', 'Demander une analyse si le potentiel semble réel et si le risque est maîtrisé.'],
];

const useCases = [
  ['Devis', 'BTP, espaces verts, nettoyage, maintenance', 'Agent IA devis supervisé'],
  ['Relances', 'Immobilier, formation, nettoyage, BTP', 'Agent IA relance'],
  ['Documents', 'Transport, sécurité, immobilier, maintenance', 'Agent IA documents'],
  ['Reporting', 'Agences, transport, sécurité, conseil', 'Agent IA reporting'],
  ['Mails', 'Commerce, restauration, services, agences', 'Agent IA mails'],
];

export const metadata = {
  title: 'IA administrative par secteur | Agents IA-first pour PME | ScanAdmin',
  description: 'Pages sectorielles ScanAdmin : identifier les tâches administratives par métier, les agents IA supervisés adaptés et mesurer le potentiel avant automatisation.',
};

export default function SectorsPage() {
  return (
    <main>
      <section className="premium-hero">
        <div className="container hero-shell">
          <div className="hero-copy">
            <p className="badge">Secteurs IA-first</p>
            <h1>Chaque secteur a ses agents IA prioritaires. Encore faut-il mesurer avant de choisir.</h1>
            <p className="hero-subtitle">ScanAdmin relie votre métier à vos tâches administratives répétitives, puis aux agents IA supervisés qui peuvent préparer le travail sans remplacer la validation humaine.</p>
            <div className="hero-actions">
              <Link className="button" href="/scan">Lancer le scan gratuit</Link>
              <Link className="ghost-button" href="/catalogue">Voir les agents IA</Link>
            </div>
            <p className="hero-note">Approche IA-first : secteur → tâches répétitives → agent IA utile → mesure → test supervisé.</p>
          </div>

          <div className="report-preview">
            <div className="report-topline"><span>Secteurs</span><strong>{sectors.length} pages</strong></div>
            <div className="report-metric-main"><span>Logique</span><strong style={{ fontSize: 34 }}>Agent IA adapté au métier</strong></div>
            <div className="metric-grid">
              <div><span>Scan</span><strong>0 €</strong></div>
              <div><span>IA</span><strong>Supervisée</strong></div>
            </div>
            <div className="priority-list">
              <p>Cas fréquents</p>
              <span>Devis et relances</span>
              <span>Documents et dossiers</span>
              <span>Mails et reporting</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container premium-section split-section">
        <div>
          <p className="section-kicker">IA-first, mais pas aveugle</p>
          <h2>L’IA doit être pensée depuis le métier, pas depuis l’outil.</h2>
        </div>
        <div className="text-stack">
          <p>Une entreprise du BTP ne perd pas son temps administratif exactement comme une agence marketing, une société de transport ou un organisme de formation.</p>
          <p>C’est pour cela que ScanAdmin adopte une approche IA-first par secteur : identifier les tâches répétitives propres au métier, relier ces tâches aux agents IA possibles, puis mesurer si le volume justifie un test.</p>
          <p>Le but n’est pas de proposer une IA générique. Le but est de choisir le premier agent IA utile, contrôlable et rentable à tester.</p>
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Principes</p>
          <h2>Ce que signifie IA-first pour ScanAdmin.</h2>
        </div>
        <div className="comparison-grid">
          {aiFirstPrinciples.map(([title, text]) => (
            <div key={title} className="comparison-card muted-card">
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {sectorFamilies.map((family) => {
        const familySectors = family.slugs
          .map((slug) => sectors.find((sector) => sector.slug === slug))
          .filter((sector): sector is (typeof sectors)[number] => Boolean(sector));

        return (
          <section key={family.title} className="container premium-section">
            <div className="section-heading">
              <p className="section-kicker">{family.title}</p>
              <h2>{family.title}</h2>
              <p>{family.description}</p>
            </div>
            <div className="comparison-grid" style={{ marginTop: 26 }}>
              {familySectors.map((sector) => (
                <Link key={sector.slug} href={`/secteurs/${sector.slug}`} className="comparison-card muted-card">
                  <h3>{sector.title}</h3>
                  <p>{sector.description}</p>
                  <span style={{ fontWeight: 800 }}>Voir le secteur →</span>
                </Link>
              ))}
            </div>
          </section>
        );
      })}

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Cas d’usage par métier</p>
          <h2>Les mêmes agents IA ne sont pas prioritaires dans tous les secteurs.</h2>
        </div>
        <div className="card content-card" style={{ overflowX: 'auto' }}>
          <table className="premium-table">
            <thead><tr><th>Cas d’usage</th><th>Secteurs fréquents</th><th>Agent IA associé</th></tr></thead>
            <tbody>
              {useCases.map(([useCase, sectorsText, agent]) => (
                <tr key={useCase}><td>{useCase}</td><td>{sectorsText}</td><td>{agent}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="container premium-section split-section reversed">
        <div className="deliverable-preview">
          <div className="deliverable-header"><span>Parcours IA-first</span><strong>Secteur → Agent</strong></div>
          {path.map(([number, title, text]) => (
            <div key={number} className="deliverable-row">
              <strong>{number}. {title}</strong>
              <span>{text}</span>
            </div>
          ))}
        </div>
        <div>
          <p className="section-kicker">Conversion</p>
          <h2>Une page secteur doit mener vers un scan, pas vers une promesse vague.</h2>
          <p className="section-text">Le contenu sectoriel attire une PME avec ses problèmes réels. Le scan transforme ensuite cette lecture en estimation concrète : temps perdu, coût mensuel et agents IA possibles.</p>
          <p className="section-text">C’est ce qui rend le site plus fort : il ne parle pas seulement d’IA, il montre où l’IA peut commencer dans chaque métier.</p>
        </div>
      </section>

      <section className="container premium-section comparison-section">
        <div className="section-heading">
          <p className="section-kicker">Différence</p>
          <h2>ScanAdmin ne fait pas des pages secteurs pour remplir le site.</h2>
        </div>
        <div className="comparison-grid">
          <div className="comparison-card muted-card"><h3>SEO générique</h3><p>Dire seulement “l’IA peut aider votre secteur” sans expliquer les tâches concrètes.</p></div>
          <div className="comparison-card highlight-card"><h3>IA-first utile</h3><p>Relier chaque métier à des tâches, des agents IA supervisés et une mesure de potentiel.</p></div>
          <div className="comparison-card muted-card"><h3>Automatisation trop rapide</h3><p>Proposer une solution avant d’avoir mesuré le volume et le risque.</p></div>
        </div>
      </section>

      <section className="container premium-final-cta">
        <p className="section-kicker">Votre secteur</p>
        <h2>Quel agent IA administratif mérite d’être testé dans votre métier ?</h2>
        <p>Choisissez votre secteur ou lancez directement le scan pour mesurer vos tâches administratives répétitives.</p>
        <div className="hero-actions center-actions">
          <Link className="button" href="/scan">Lancer mon scan gratuit</Link>
          <Link className="ghost-button" href="/cas-usages">Voir les cas d’usage</Link>
        </div>
      </section>
    </main>
  );
}
