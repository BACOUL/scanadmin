import Link from 'next/link';

const reasons = [
  ['Demander une analyse personnalisée', 'Vous avez fait le scan et vous voulez transformer le résultat en diagnostic chiffré, priorités et plan de test.'],
  ['Clarifier un cas d’usage IA', 'Vous hésitez entre mails, devis, relances, documents, factures ou reporting.'],
  ['Préparer une mise en place', 'Vous avez déjà identifié une tâche prioritaire et vous voulez cadrer un agent IA supervisé.'],
  ['Question entreprise', 'Vous voulez vérifier si ScanAdmin est adapté à votre secteur, votre taille ou votre organisation.'],
];

const beforeContact = [
  'Avoir lancé le scan gratuit si possible',
  'Connaître les tâches administratives qui prennent le plus de temps',
  'Indiquer votre secteur d’activité',
  'Préciser si vous cherchez une analyse ou une mise en place',
];

const steps = [
  ['01', 'Vous lancez le scan', 'Le scan gratuit donne une première estimation du temps administratif et du coût mensuel.'],
  ['02', 'Vous demandez une analyse', 'La demande permet de comprendre votre contexte et de vérifier si le potentiel mérite une analyse personnalisée.'],
  ['03', 'ScanAdmin priorise', 'L’analyse classe les tâches selon coût, répétition, risque et facilité de validation humaine.'],
  ['04', 'Vous décidez', 'Vous repartez avec une première action claire : quoi tester, quoi éviter et quel agent IA supervisé envisager.'],
];

const assurances = [
  ['Pas de promesse magique', 'ScanAdmin ne garantit pas un gain. Le résultat sert à prioriser et à tester prudemment.'],
  ['Validation humaine', 'Les agents IA recommandés doivent préparer le travail, pas décider seuls.'],
  ['Données limitées', 'Ne transmettez pas de données sensibles sans accord clair ni canal adapté.'],
  ['Parcours simple', 'Scan gratuit, analyse personnalisée, puis mise en place seulement si le besoin est confirmé.'],
];

export const metadata = {
  title: 'Contact ScanAdmin | Demander une analyse IA administrative PME',
  description: 'Contactez ScanAdmin pour une analyse personnalisée, un diagnostic IA administratif PME ou une question sur les agents IA supervisés.',
};

export default function Page() {
  return (
    <main>
      <section className="premium-hero">
        <div className="container hero-shell">
          <div className="hero-copy">
            <p className="badge">Contact ScanAdmin</p>
            <h1>Une question sérieuse sur votre administratif ou votre premier agent IA ?</h1>
            <p className="hero-subtitle">Le meilleur point de départ reste le scan gratuit. Il permet d’arriver avec une base chiffrée avant de demander une analyse personnalisée ou une mise en place.</p>
            <div className="hero-actions">
              <Link className="button" href="/scan">Lancer le scan gratuit</Link>
              <Link className="ghost-button" href="/analyse">Demander une analyse</Link>
            </div>
            <p className="hero-note">Pour une demande efficace : secteur, tâches principales, résultat du scan et objectif recherché.</p>
          </div>

          <div className="report-preview">
            <div className="report-topline"><span>Contact utile</span><strong>Priorité</strong></div>
            <div className="report-metric-main"><span>Parcours conseillé</span><strong style={{ fontSize: 34 }}>Scan → Analyse → Test</strong></div>
            <div className="metric-grid">
              <div><span>Scan</span><strong>0 €</strong></div>
              <div><span>Analyse</span><strong>200 €</strong></div>
            </div>
            <div className="priority-list">
              <p>Demandes pertinentes</p>
              <span>Diagnostic administratif</span>
              <span>Cas d’usage IA</span>
              <span>Agent IA supervisé</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container premium-section split-section">
        <div>
          <p className="section-kicker">Avant de nous écrire</p>
          <h2>Le contact est plus utile quand il part d’un problème administratif mesuré.</h2>
        </div>
        <div className="text-stack">
          <p>ScanAdmin n’a pas vocation à vendre une automatisation IA dès le premier message. Le but est d’abord de comprendre si votre charge administrative répétitive mérite une analyse.</p>
          <p>Si vous n’avez pas encore de chiffres, commencez par le scan gratuit. Si vous avez déjà identifié une tâche coûteuse, vous pouvez demander directement une analyse personnalisée.</p>
          <p>Les demandes les plus pertinentes concernent les devis, relances, mails, documents, factures, dossiers clients ou reportings répétitifs.</p>
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Motifs de contact</p>
          <h2>Dans quels cas contacter ScanAdmin ?</h2>
        </div>
        <div className="comparison-grid">
          {reasons.map(([title, text]) => (
            <div key={title} className="comparison-card muted-card">
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container premium-section split-section reversed">
        <div className="deliverable-preview">
          <div className="deliverable-header"><span>À préparer</span><strong>Demande efficace</strong></div>
          {beforeContact.map((item) => (
            <div key={item} className="deliverable-row"><span>{item}</span></div>
          ))}
        </div>
        <div>
          <p className="section-kicker">Demande prioritaire</p>
          <h2>Vous avez déjà fait le scan ? Demandez l’analyse personnalisée.</h2>
          <p className="section-text">L’analyse personnalisée est la suite logique du scan : elle transforme un résultat brut en diagnostic, priorités et plan de test. C’est la demande à privilégier si vous voulez avancer concrètement.</p>
          <Link className="button" href="/analyse">Demander mon analyse</Link>
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Parcours</p>
          <h2>Ce qui se passe après votre demande.</h2>
        </div>
        <div className="process-grid">
          {steps.map(([number, title, text]) => (
            <div key={number} className="process-card">
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container premium-section comparison-section">
        <div className="section-heading">
          <p className="section-kicker">Rassurance</p>
          <h2>Un contact clair, sans promesse excessive.</h2>
        </div>
        <div className="comparison-grid">
          {assurances.map(([title, text]) => (
            <div key={title} className="comparison-card muted-card">
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container premium-section split-section">
        <div>
          <p className="section-kicker">Contact direct</p>
          <h2>Pour une question simple, vous pouvez aussi écrire directement.</h2>
        </div>
        <div className="card content-card">
          <h2>Email</h2>
          <p>Pour une demande liée à ScanAdmin, indiquez votre entreprise, votre secteur, le type de tâches administratives concernées et, si possible, le résultat du scan.</p>
          <p><strong>Adresse :</strong> contact@scanadmin.fr</p>
          <p>Si cette adresse n’est pas encore activée au lancement, le formulaire d’analyse reste le canal prioritaire.</p>
          <Link className="button" href="/analyse">Utiliser le formulaire d’analyse</Link>
        </div>
      </section>

      <section className="container premium-final-cta">
        <p className="section-kicker">Commencer proprement</p>
        <h2>Le plus simple : lancer le scan avant de nous contacter.</h2>
        <p>Vous aurez une première base chiffrée, ce qui rendra l’analyse plus utile et plus rapide à cadrer.</p>
        <div className="hero-actions center-actions">
          <Link className="button" href="/scan">Lancer mon scan gratuit</Link>
          <Link className="ghost-button" href="/analyse-personnalisee">Voir l’analyse personnalisée</Link>
        </div>
      </section>
    </main>
  );
}
