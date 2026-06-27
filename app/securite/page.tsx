import Link from 'next/link';

const principles = [
  ['Données minimales', 'Le scan doit demander uniquement les informations utiles pour estimer la charge administrative : tâches, volumes, temps et coût indicatif.'],
  ['Pas d’accès forcé', 'Le scan gratuit ne demande pas d’accès à vos mails, à votre comptabilité, à vos documents internes ou à vos outils métier.'],
  ['IA supervisée', 'Un agent IA doit préparer, classer, résumer ou proposer. Il ne doit pas décider seul sur un sujet sensible.'],
  ['Validation humaine', 'Toute réponse client, devis, facture, document ou action administrative importante doit être vérifiée par une personne.'],
];

const risks = [
  ['Erreur de contexte', 'L’IA peut mal comprendre une demande, oublier une exception ou produire une réponse trop générale.'],
  ['Donnée incomplète', 'Si les informations fournies sont incomplètes, le résultat ou la recommandation peut être moins fiable.'],
  ['Décision sensible', 'Prix, paiement, conformité, engagement commercial ou document contractuel ne doivent pas être validés automatiquement.'],
  ['Faux gain', 'Un gain estimé n’est pas un gain réel. Il doit être vérifié dans le contexte de l’entreprise.'],
];

const goodPractices = [
  'Commencer par une tâche simple et répétitive',
  'Limiter le premier test à un périmètre clair',
  'Faire relire toutes les sorties IA avant usage externe',
  'Ne pas transmettre de données sensibles sans nécessité',
  'Mesurer le temps gagné réellement pendant le test',
  'Arrêter ou corriger le test si le contrôle humain devient trop lourd',
];

const levels = [
  ['Risque faible', 'relances simples, classement, synthèses internes', 'Bon premier test si le volume est suffisant.'],
  ['Risque moyen', 'devis, dossiers clients, documents entrants', 'À tester avec validation humaine claire.'],
  ['Risque élevé', 'factures, paiement, conformité, engagements contractuels', 'À traiter avec prudence ou à exclure au départ.'],
];

const safeguards = [
  ['Avant le scan', 'Ne demandez pas de documents sensibles : estimez d’abord les volumes et le temps perdu.'],
  ['Avant l’analyse', 'Partagez uniquement le contexte nécessaire pour comprendre vos tâches et priorités.'],
  ['Avant un agent IA', 'Définissez ce que l’agent peut préparer, ce qu’il ne doit pas faire et qui valide.'],
  ['Pendant le test', 'Mesurez les résultats, les erreurs, le temps de relecture et la vraie valeur obtenue.'],
];

export const metadata = {
  title: 'Sécurité ScanAdmin | IA administrative supervisée et données PME',
  description: 'Sécurité ScanAdmin : données minimales, scan IA administratif sans accès forcé, agents IA supervisés, validation humaine et limites de l’automatisation.',
};

export default function SafetyPage() {
  return (
    <main>
      <section className="premium-hero">
        <div className="container hero-shell">
          <div className="hero-copy">
            <p className="badge">Sécurité et IA supervisée</p>
            <h1>Utiliser l’IA administrative sans abandonner le contrôle.</h1>
            <p className="hero-subtitle">ScanAdmin repose sur une approche prudente : collecter peu d’informations, mesurer avant d’automatiser et garder une validation humaine sur les tâches sensibles.</p>
            <div className="hero-actions">
              <Link className="button" href="/scan">Lancer le scan gratuit</Link>
              <Link className="ghost-button" href="/confidentialite">Voir la confidentialité</Link>
            </div>
            <p className="hero-note">Le scan gratuit ne nécessite pas d’accès direct à vos outils internes.</p>
          </div>

          <div className="report-preview">
            <div className="report-topline"><span>Sécurité</span><strong>Supervision</strong></div>
            <div className="report-metric-main"><span>Principe</span><strong style={{ fontSize: 34 }}>L’IA prépare, l’humain valide</strong></div>
            <div className="metric-grid">
              <div><span>Scan</span><strong>Minimal</strong></div>
              <div><span>Agent</span><strong>Contrôlé</strong></div>
            </div>
            <div className="priority-list">
              <p>Règles clés</p>
              <span>Pas d’accès forcé</span>
              <span>Pas de décision seule</span>
              <span>Test progressif</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container premium-section split-section">
        <div>
          <p className="section-kicker">Position de sécurité</p>
          <h2>ScanAdmin ne cherche pas à connecter toute votre entreprise dès le départ.</h2>
        </div>
        <div className="text-stack">
          <p>La première étape consiste à estimer la charge administrative avec des informations déclaratives : combien de tâches, combien de temps, quelles catégories et quel coût indicatif.</p>
          <p>Cette approche limite le risque. Une PME peut comprendre son potentiel IA sans donner immédiatement accès à ses outils internes, ses documents sensibles ou ses données clients.</p>
          <p>Les connexions, documents ou intégrations ne doivent être envisagés que plus tard, avec un périmètre clair et une validation humaine.</p>
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Principes</p>
          <h2>Les règles de sécurité qui guident ScanAdmin.</h2>
        </div>
        <div className="comparison-grid">
          {principles.map(([title, text]) => (
            <div key={title} className="comparison-card muted-card">
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container premium-section split-section reversed">
        <div className="deliverable-preview">
          <div className="deliverable-header"><span>Bonnes pratiques</span><strong>Premier test</strong></div>
          {goodPractices.map((item) => (
            <div key={item} className="deliverable-row"><span>{item}</span></div>
          ))}
        </div>
        <div>
          <p className="section-kicker">Avant d’utiliser un agent IA</p>
          <h2>Le premier test doit être limité, mesurable et vérifiable.</h2>
          <p className="section-text">Le bon usage de l’IA administrative n’est pas de tout automatiser d’un coup. Il faut commencer par une tâche claire : relance, résumé, classement, préparation de réponse ou brouillon de devis.</p>
          <p className="section-text">Le test doit permettre de mesurer le temps réellement gagné, les erreurs constatées et le temps nécessaire à la validation humaine.</p>
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Risques à connaître</p>
          <h2>Une page sécurité crédible doit aussi expliquer les limites.</h2>
        </div>
        <div className="comparison-grid">
          {risks.map(([title, text]) => (
            <div key={title} className="comparison-card muted-card">
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Niveaux de risque</p>
          <h2>Toutes les tâches administratives ne doivent pas être traitées de la même manière.</h2>
        </div>
        <div className="card content-card" style={{ overflowX: 'auto' }}>
          <table className="premium-table">
            <thead><tr><th>Niveau</th><th>Exemples</th><th>Approche recommandée</th></tr></thead>
            <tbody>
              {levels.map(([level, examples, approach]) => (
                <tr key={level}><td>{level}</td><td>{examples}</td><td>{approach}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Garde-fous</p>
          <h2>La sécurité dépend aussi du parcours.</h2>
        </div>
        <div className="process-grid">
          {safeguards.map(([title, text], index) => (
            <div key={title} className="process-card">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container premium-section comparison-section">
        <div className="section-heading">
          <p className="section-kicker">Ce que ScanAdmin refuse</p>
          <h2>La sécurité passe par des limites claires.</h2>
        </div>
        <div className="comparison-grid">
          <div className="comparison-card muted-card"><h3>Décision automatique sensible</h3><p>Un agent ne doit pas fixer seul un prix, déclencher un paiement, valider une facture ou engager l’entreprise.</p></div>
          <div className="comparison-card highlight-card"><h3>Automatisation sans mesure</h3><p>Avant de déployer, il faut savoir si la tâche est réellement fréquente, coûteuse et vérifiable.</p></div>
          <div className="comparison-card muted-card"><h3>Données inutiles</h3><p>Une première estimation ne doit pas nécessiter de mots de passe, accès internes ou documents sensibles.</p></div>
        </div>
      </section>

      <section className="container premium-section split-section">
        <div>
          <p className="section-kicker">Données personnelles</p>
          <h2>Sécurité et confidentialité doivent rester liées.</h2>
        </div>
        <div className="card content-card">
          <h2>Politique de confidentialité</h2>
          <p>Les détails sur les données collectées, les finalités, les informations à ne pas transmettre et les droits utilisateur sont regroupés dans la page confidentialité.</p>
          <Link className="button" href="/confidentialite">Lire la confidentialité</Link>
        </div>
      </section>

      <section className="container premium-final-cta">
        <p className="section-kicker">Commencer prudemment</p>
        <h2>Mesurez d’abord, sans connecter vos outils internes.</h2>
        <p>Le scan gratuit permet d’obtenir une première estimation administrative avec un minimum d’informations.</p>
        <div className="hero-actions center-actions">
          <Link className="button" href="/scan">Lancer mon scan gratuit</Link>
          <Link className="ghost-button" href="/method">Voir la méthode</Link>
        </div>
      </section>
    </main>
  );
}
