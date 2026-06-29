import Link from 'next/link';
import { guides } from '../../lib/guides';

const guideGroups = [
  {
    title: 'Comprendre avant d’automatiser',
    description: 'Guides pour poser la méthode : audit IA, coût administratif, automatisation prudente et choix du premier cas d’usage.',
    slugs: ['audit-ia-pme', 'automatiser-taches-administratives', 'cout-administratif-pme'],
  },
  {
    title: 'Agents IA administratifs',
    description: 'Guides par agent pour comprendre ce que l’IA peut préparer, ce qu’elle ne doit pas décider seule et quand le test devient pertinent.',
    slugs: ['agent-ia-administratif', 'agent-ia-devis', 'agent-ia-relance-client', 'agent-ia-documents', 'agent-ia-dossiers-clients', 'agent-ia-planning', 'agent-ia-reporting', 'agent-ia-factures'],
  },
  {
    title: 'Guides par secteur',
    description: 'Guides orientés métiers pour relier les agents IA aux tâches administratives réelles des PME terrain.',
    slugs: ['ia-administrative-btp', 'ia-administrative-transport', 'ia-administrative-nettoyage'],
  },
];

const seoThemes = [
  ['Audit IA PME', 'Comprendre par où commencer sans choisir un outil au hasard.'],
  ['Agent IA administratif', 'Identifier les tâches que l’IA peut préparer sous validation humaine.'],
  ['Automatisation administrative', 'Automatiser seulement les tâches fréquentes, répétitives et vérifiables.'],
  ['Coût administratif', 'Rendre visible le temps administratif qui coûte chaque mois.'],
  ['IA par secteur', 'Adapter les cas d’usage au métier réel de l’entreprise.'],
  ['IA supervisée', 'Garder l’humain responsable des décisions sensibles.'],
];

const path = [
  ['01', 'Lire un guide', 'Comprendre le sujet : audit IA, coût administratif, agent IA ou usage par secteur.'],
  ['02', 'Lancer le scan', 'Mesurer votre propre charge administrative répétitive.'],
  ['03', 'Demander une analyse', 'Transformer le résultat en priorités, limites et premier plan de test.'],
];

export const metadata = {
  title: 'Guides IA administrative pour PME | ScanAdmin',
  description: 'Guides ScanAdmin sur l’audit IA PME, les agents IA administratifs, l’automatisation des tâches, le coût administratif et les cas d’usage IA par secteur.',
};

export default function GuidesPage() {
  return (
    <main>
      <section className="premium-hero">
        <div className="container hero-shell">
          <div className="hero-copy">
            <p className="badge">Guides IA administrative</p>
            <h1>Comprendre où l’IA peut vraiment aider votre administratif.</h1>
            <p className="hero-subtitle">Les guides ScanAdmin aident les PME à comprendre les cas d’usage IA, mesurer le coût administratif et éviter les automatisations lancées trop vite.</p>
            <div className="hero-actions">
              <Link className="button" href="/scan">Lancer le scan gratuit</Link>
              <Link className="ghost-button" href="/cas-usages">Voir les cas d’usage</Link>
            </div>
            <p className="hero-note">Objectif SEO long terme : répondre aux problèmes réels avant de proposer une analyse ou un agent IA supervisé.</p>
          </div>

          <div className="report-preview">
            <div className="report-topline"><span>Ressources</span><strong>{guides.length} guides</strong></div>
            <div className="report-metric-main"><span>Thème central</span><strong style={{ fontSize: 34 }}>Mesurer avant d’automatiser</strong></div>
            <div className="metric-grid">
              <div><span>Guides</span><strong>PME</strong></div>
              <div><span>IA</span><strong>Supervisée</strong></div>
            </div>
            <div className="priority-list">
              <p>Entrées principales</p>
              <span>Audit IA PME</span>
              <span>Agents IA</span>
              <span>Coût administratif</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container premium-section split-section">
        <div>
          <p className="section-kicker">Rôle des guides</p>
          <h2>Les guides ne vendent pas de l’IA magique. Ils aident à choisir le bon premier problème.</h2>
        </div>
        <div className="text-stack">
          <p>Une PME peut perdre beaucoup de temps sur des tâches administratives répétitives sans savoir quel sujet traiter en premier : mails, devis, relances, factures, documents ou reporting.</p>
          <p>Les guides ScanAdmin structurent cette réflexion. Ils expliquent les usages possibles, les limites, les risques et les critères qui permettent de prioriser.</p>
          <p>La suite logique reste toujours la même : comprendre, mesurer avec le scan, puis demander une analyse si le potentiel semble réel.</p>
        </div>
      </section>

      {guideGroups.map((group) => {
        const groupGuides = group.slugs
          .map((slug) => guides.find((guide) => guide.slug === slug))
          .filter((guide): guide is (typeof guides)[number] => Boolean(guide));

        return (
          <section key={group.title} className="container premium-section">
            <div className="section-heading">
              <p className="section-kicker">{group.title}</p>
              <h2>{group.title}</h2>
              <p>{group.description}</p>
            </div>
            <div className="comparison-grid" style={{ marginTop: 26 }}>
              {groupGuides.map((guide) => (
                <Link key={guide.slug} href={`/guides/${guide.slug}`} className="comparison-card muted-card">
                  <h3>{guide.title}</h3>
                  <p>{guide.description}</p>
                  <span style={{ fontWeight: 800 }}>Lire le guide →</span>
                </Link>
              ))}
            </div>
          </section>
        );
      })}

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Thèmes SEO</p>
          <h2>Les sujets couverts par les guides ScanAdmin.</h2>
          <p>Chaque thème renvoie à une intention de recherche utile pour une PME qui découvre l’IA administrative.</p>
        </div>
        <div className="comparison-grid">
          {seoThemes.map(([title, text]) => (
            <div key={title} className="comparison-card muted-card">
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container premium-section split-section reversed">
        <div className="deliverable-preview">
          <div className="deliverable-header"><span>Parcours recommandé</span><strong>SEO → Scan</strong></div>
          {path.map(([number, title, text]) => (
            <div key={number} className="deliverable-row">
              <strong>{number}. {title}</strong>
              <span>{text}</span>
            </div>
          ))}
        </div>
        <div>
          <p className="section-kicker">Conversion</p>
          <h2>Un bon guide doit mener vers une décision mesurable.</h2>
          <p className="section-text">Le contenu pédagogique attire l’attention. Le scan transforme ensuite cette attention en estimation concrète : temps administratif, coût mensuel et potentiel de priorité.</p>
          <p className="section-text">C’est cette articulation qui donne au site une base SEO durable, sans dépendre uniquement de la publicité ou du démarchage.</p>
        </div>
      </section>

      <section className="container premium-section comparison-section">
        <div className="section-heading">
          <p className="section-kicker">Ce que les guides évitent</p>
          <h2>Ne pas tomber dans le contenu IA générique.</h2>
        </div>
        <div className="comparison-grid">
          <div className="comparison-card muted-card"><h3>Liste d’outils sans méthode</h3><p>Un guide ScanAdmin doit expliquer comment décider, pas seulement citer des solutions.</p></div>
          <div className="comparison-card highlight-card"><h3>Mesure concrète</h3><p>Chaque sujet doit ramener vers le temps perdu, le coût administratif et le premier test réaliste.</p></div>
          <div className="comparison-card muted-card"><h3>Promesse excessive</h3><p>Les guides doivent garder la logique supervisée : l’IA prépare, l’humain valide.</p></div>
        </div>
      </section>

      <section className="container premium-final-cta">
        <p className="section-kicker">Après la lecture</p>
        <h2>Le meilleur guide reste votre propre scan.</h2>
        <p>Les guides expliquent la méthode. Le scan gratuit mesure votre situation réelle et vous aide à savoir si une analyse personnalisée mérite d’être demandée.</p>
        <div className="hero-actions center-actions">
          <Link className="button" href="/scan">Lancer mon scan gratuit</Link>
          <Link className="ghost-button" href="/analyse-personnalisee">Voir l’analyse personnalisée</Link>
        </div>
      </section>
    </main>
  );
}
