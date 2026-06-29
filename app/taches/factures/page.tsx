import Link from 'next/link';

const canDo = [
  'Repérer fournisseur, date, montant et référence de facture.',
  'Signaler une information manquante ou incohérente.',
  'Préparer une synthèse de contrôle avant validation.',
  'Classer les factures par statut à vérifier.',
  'Aider à préparer une liste de questions pour le comptable ou l’équipe interne.',
];

const mustNotDo = [
  'Valider seule une facture.',
  'Déclencher un paiement automatiquement.',
  'Modifier une donnée comptable sans contrôle.',
  'Décider qu’une facture est conforme sans validation humaine.',
  'Remplacer le comptable, l’expert-comptable ou le contrôle interne.',
];

const testSteps = [
  ['Jour 1', 'Choisir 10 factures simples déjà traitées pour comparer avec le contrôle humain.'],
  ['Jours 2 à 4', 'Définir les champs à extraire : fournisseur, date, montant, TVA, référence, statut.'],
  ['Jours 5 à 10', 'Faire préparer une fiche de contrôle par l’IA sans aucun paiement ni validation automatique.'],
  ['Jours 11 à 14', 'Comparer les erreurs, les oublis et le temps gagné après relecture humaine.'],
];

const faq = [
  ['L’IA peut-elle valider une facture ?', 'Non. Elle peut préparer un pré-contrôle, mais la validation et le paiement doivent rester humains.'],
  ['Quels cas tester en premier ?', 'Les factures simples et récurrentes, déjà connues, avec un format facile à lire et peu d’exceptions.'],
  ['Quel est le risque principal ?', 'Une erreur de montant, de TVA, de fournisseur, de doublon ou de statut de paiement.'],
  ['Pourquoi cette tâche est-elle classée prudente ?', 'Parce qu’une erreur peut avoir un impact financier ou comptable. Le contrôle humain doit être strict.'],
];

export const metadata = {
  title: 'Agent IA pour factures : pré-contrôle avec validation humaine | ScanAdmin',
  description: 'Comment utiliser prudemment un agent IA pour préparer le contrôle de factures en PME, sans validation ni paiement automatique.',
};

export default function FacturesTaskPage() {
  return (
    <main>
      <section className="premium-hero">
        <div className="container hero-shell">
          <div className="hero-copy">
            <p className="badge">Tâche administrative sensible</p>
            <h1>Agent IA pour factures : aider au pré-contrôle, jamais valider seule.</h1>
            <p className="hero-subtitle">Les factures peuvent être analysées par IA pour gagner du temps, mais c’est un cas sensible. L’IA doit préparer une vérification, pas décider ni déclencher un paiement.</p>
            <div className="hero-actions">
              <Link className="button" href="/scan">Estimer mon coût administratif</Link>
              <Link className="ghost-button" href="/taches">Voir toutes les tâches</Link>
            </div>
            <p className="hero-note">Règle stricte : aucune validation comptable ou financière autonome.</p>
          </div>

          <div className="report-preview">
            <div className="report-topline"><span>Cas d’usage</span><strong>Factures</strong></div>
            <div className="report-metric-main"><span>Niveau de risque</span><strong>Élevé</strong></div>
            <div className="metric-grid">
              <div><span>Usage</span><strong>Pré-contrôle</strong></div>
              <div><span>Décision</span><strong>Humaine</strong></div>
            </div>
            <div className="priority-list">
              <p>À retenir</p>
              <span>Extraire les champs</span>
              <span>Signaler les anomalies</span>
              <span>Ne jamais payer seule</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container premium-section split-section">
        <div>
          <p className="section-kicker">Réponse courte</p>
          <h2>L’IA peut préparer le contrôle des factures, mais ce n’est pas un bon premier cas autonome.</h2>
        </div>
        <div className="text-stack">
          <p>Une facture contient des informations structurées que l’IA peut aider à repérer : fournisseur, date, montant, TVA, référence ou statut.</p>
          <p>Mais une erreur peut coûter cher. Le bon usage est donc un pré-contrôle assisté, limité à des factures simples, avec validation humaine obligatoire.</p>
          <p>ScanAdmin classe ce cas en prudence : intéressant pour gagner du temps, mais uniquement avec des garde-fous stricts.</p>
        </div>
      </section>

      <section className="container premium-section comparison-section">
        <div className="section-heading">
          <p className="section-kicker">Garde-fous</p>
          <h2>Ce que l’agent IA peut faire, et ce qu’il ne doit pas faire.</h2>
        </div>
        <div className="comparison-grid">
          <div className="comparison-card highlight-card">
            <h3>Peut faire</h3>
            {canDo.map((item) => <p key={item}>• {item}</p>)}
          </div>
          <div className="comparison-card muted-card">
            <h3>Ne doit pas faire</h3>
            {mustNotDo.map((item) => <p key={item}>• {item}</p>)}
          </div>
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Plan de test prudent</p>
          <h2>Tester un agent IA factures pendant 14 jours sans automatiser la décision.</h2>
        </div>
        <div className="process-grid">
          {testSteps.map(([period, text]) => (
            <div key={period} className="process-card"><span>{period}</span><p>{text}</p></div>
          ))}
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">FAQ</p>
          <h2>Questions fréquentes sur les factures avec IA.</h2>
        </div>
        <div className="comparison-grid">
          {faq.map(([question, answer]) => (
            <div key={question} className="comparison-card muted-card">
              <h3>{question}</h3>
              <p>{answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container premium-final-cta">
        <p className="section-kicker">Diagnostic ScanAdmin</p>
        <h2>Vos factures doivent-elles être analysées en priorité ?</h2>
        <p>Le scan gratuit aide à comparer les factures avec d’autres tâches moins risquées, comme les relances, les emails ou les documents entrants.</p>
        <div className="hero-actions center-actions">
          <Link className="button" href="/scan">Lancer mon scan gratuit</Link>
          <Link className="ghost-button" href="/taches">Retour aux tâches</Link>
        </div>
      </section>
    </main>
  );
}
