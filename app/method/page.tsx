import Link from 'next/link';

const steps = [
  ['01', 'Inventorier les tâches répétitives', 'Le scan isole les tâches administratives fréquentes : mails, devis, relances, documents, factures, dossiers clients, planning et reporting.'],
  ['02', 'Estimer le volume mensuel', 'Chaque famille de tâches est ramenée à un volume mensuel pour éviter les impressions vagues. Une petite tâche répétée chaque semaine peut devenir un vrai coût annuel.'],
  ['03', 'Traduire le temps en coût', 'Le temps déclaré est multiplié par un coût horaire indicatif afin d’obtenir une estimation mensuelle et annuelle compréhensible par un dirigeant.'],
  ['04', 'Prioriser selon le potentiel', 'La priorité dépend du coût, de la répétition, du risque, de la facilité de contrôle et du niveau de validation humaine nécessaire.'],
  ['05', 'Recommander un agent supervisé', 'L’agent IA proposé doit préparer, classer, résumer ou structurer. Il ne doit pas prendre seul une décision commerciale, comptable ou contractuelle.'],
  ['06', 'Tester avant de généraliser', 'La méthode recommande un test court sur 7 à 14 jours avant toute extension. Le gain réel doit être observé, pas supposé.'],
];

const criteria = [
  ['Coût', 'La tâche représente-t-elle assez d’heures ou d’argent pour justifier un test ?'],
  ['Répétition', 'La tâche revient-elle souvent avec une structure suffisamment similaire ?'],
  ['Risque', 'Une erreur peut-elle avoir un impact commercial, comptable, juridique ou client ?'],
  ['Contrôle humain', 'Le résultat produit par l’IA peut-il être vérifié facilement par une personne ?'],
  ['Données disponibles', 'L’entreprise dispose-t-elle des informations nécessaires pour que l’agent prépare correctement le travail ?'],
  ['Simplicité du test', 'Le cas peut-il être testé rapidement sans perturber l’organisation ?'],
];

const examples = [
  ['Devis simples', 'fort volume, valeur élevée, contrôle humain nécessaire', 'Prioritaire si les demandes sont fréquentes et répétitives.'],
  ['Relances clients', 'risque faible, répétition forte, validation facile', 'Bon deuxième cas d’usage car le résultat est simple à vérifier.'],
  ['Factures', 'risque plus élevé, contrôle indispensable', 'À traiter avec prudence, surtout si les données ne sont pas propres.'],
  ['Reporting', 'utile mais souvent moins urgent', 'Intéressant si les synthèses reviennent souvent et prennent du temps.'],
];

const faq = [
  ['ScanAdmin garantit-il un gain de temps ?', 'Non. ScanAdmin fournit une estimation et une méthode de priorisation. Le gain réel dépend de l’organisation, des outils, des données et de la validation humaine.'],
  ['Pourquoi ne pas recommander directement un agent IA ?', 'Parce qu’un agent IA n’a de valeur que si la tâche est fréquente, coûteuse, vérifiable et assez peu risquée pour être testée progressivement.'],
  ['La méthode remplace-t-elle un audit complet ?', 'Non. Le scan est un premier diagnostic. L’analyse personnalisée permet ensuite de confirmer les priorités et de construire un plan de test.'],
  ['Pourquoi garder une validation humaine ?', 'Parce que l’IA peut préparer ou structurer le travail, mais les décisions commerciales, comptables ou sensibles doivent rester validées par une personne.'],
];

export const metadata = {
  title: 'Méthodologie ScanAdmin | Diagnostic IA administratif pour PME',
  description: 'Découvrez la méthode ScanAdmin : mesurer les tâches administratives, estimer leur coût, prioriser les cas d’usage IA et tester des agents IA supervisés.',
};

export default function Page() {
  return (
    <main>
      <section className="premium-hero">
        <div className="container hero-shell">
          <div className="hero-copy">
            <p className="badge">Méthodologie ScanAdmin</p>
            <h1>Une méthode pour décider où l’IA peut vraiment aider votre administratif.</h1>
            <p className="hero-subtitle">ScanAdmin ne part pas d’un outil IA. La méthode part des tâches, du temps perdu, du coût réel et du niveau de risque avant de recommander un agent IA supervisé.</p>
            <div className="hero-actions">
              <Link className="button" href="/scan">Lancer mon scan gratuit</Link>
              <Link className="ghost-button" href="/exemple">Voir un rapport exemple</Link>
            </div>
            <p className="hero-note">Résultats indicatifs. La méthode sert à prioriser, pas à garantir un gain.</p>
          </div>

          <div className="report-preview">
            <div className="report-topline"><span>Logique ScanAdmin</span><strong>IA supervisée</strong></div>
            <div className="report-metric-main"><span>Question centrale</span><strong style={{ fontSize: 34 }}>Quelle tâche tester en premier ?</strong></div>
            <div className="metric-grid">
              <div><span>Entrée</span><strong>Tâches</strong></div>
              <div><span>Sortie</span><strong>Priorités</strong></div>
            </div>
            <div className="priority-list">
              <p>Critères utilisés</p>
              <span>Coût + répétition</span>
              <span>Risque + contrôle humain</span>
              <span>Plan de test progressif</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container premium-section split-section">
        <div>
          <p className="section-kicker">Positionnement</p>
          <h2>ScanAdmin mesure avant de vendre une automatisation.</h2>
        </div>
        <div className="text-stack">
          <p>Beaucoup de projets IA commencent par une mauvaise question : quel outil utiliser ? ScanAdmin commence par une question plus utile : quelle tâche administrative coûte assez de temps pour mériter un test IA ?</p>
          <p>La méthode évite deux erreurs fréquentes : automatiser une tâche trop faible pour être rentable, ou confier trop vite une tâche sensible à un système non supervisé.</p>
          <p>Le résultat est une hiérarchie de priorités, pas une promesse magique.</p>
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Processus</p>
          <h2>La méthode en 6 étapes.</h2>
          <p>Chaque étape réduit l’incertitude : on passe d’une impression vague à une décision plus concrète sur le premier cas d’usage IA à tester.</p>
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

      <section className="container premium-section split-section reversed">
        <div className="deliverable-preview">
          <div className="deliverable-header"><span>Formule simplifiée</span><strong>Estimation</strong></div>
          <div className="deliverable-row"><strong>Volume mensuel</strong><span>nombre de tâches ou fréquence estimée</span></div>
          <div className="deliverable-row"><strong>Temps moyen</strong><span>durée habituelle par tâche</span></div>
          <div className="deliverable-row"><strong>Coût horaire</strong><span>valeur indicative du temps administratif</span></div>
          <div className="deliverable-row"><strong>Potentiel récupérable</strong><span>fourchette prudente, jamais une garantie</span></div>
        </div>
        <div>
          <p className="section-kicker">Calcul</p>
          <h2>Un calcul simple, lisible et volontairement prudent.</h2>
          <p className="section-text">ScanAdmin transforme les volumes déclarés en temps mensuel, puis en coût estimé. L’objectif n’est pas d’obtenir une précision comptable parfaite, mais de donner au dirigeant un ordre de grandeur fiable pour décider quoi analyser.</p>
          <p className="section-text">La fourchette récupérable reste prudente, car une tâche administrative n’est jamais automatisable à 100 %. Il faut tenir compte des validations, exceptions, erreurs possibles et données manquantes.</p>
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Critères</p>
          <h2>Un agent IA n’est recommandé que si le cas d’usage tient debout.</h2>
        </div>
        <div className="comparison-grid">
          {criteria.map(([title, text]) => (
            <div key={title} className="comparison-card muted-card">
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Exemples de décision</p>
          <h2>La méthode ne traite pas toutes les tâches de la même façon.</h2>
        </div>
        <div className="card content-card" style={{ overflowX: 'auto' }}>
          <table className="premium-table">
            <thead><tr><th>Tâche</th><th>Lecture ScanAdmin</th><th>Décision type</th></tr></thead>
            <tbody>
              {examples.map(([task, reading, decision]) => (
                <tr key={task}><td>{task}</td><td>{reading}</td><td>{decision}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="container premium-section split-section">
        <div>
          <p className="section-kicker">Limites</p>
          <h2>Une méthodologie crédible doit aussi dire ce qu’elle ne fait pas.</h2>
        </div>
        <div className="text-stack">
          <p>ScanAdmin ne remplace pas un audit organisationnel complet. Le scan est un diagnostic de première intention qui aide à repérer les sujets à analyser.</p>
          <p>Le résultat dépend des réponses fournies. Si les volumes sont sous-estimés ou surestimés, les résultats le seront aussi.</p>
          <p>Les agents IA recommandés doivent rester supervisés. L’IA prépare, classe ou propose ; l’humain valide et garde la responsabilité de la décision.</p>
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">FAQ méthode</p>
          <h2>Questions fréquentes sur la méthodologie.</h2>
        </div>
        <div className="grid grid-2" style={{ marginTop: 24 }}>
          {faq.map(([question, answer]) => (
            <div key={question} className="card content-card">
              <h2>{question}</h2>
              <p>{answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container premium-final-cta">
        <p className="section-kicker">Appliquer la méthode</p>
        <h2>Commencez par mesurer vos tâches administratives.</h2>
        <p>Le scan gratuit donne une première estimation. L’analyse personnalisée confirme ensuite les priorités et transforme le résultat en plan de test.</p>
        <div className="hero-actions center-actions">
          <Link className="button" href="/scan">Lancer mon scan gratuit</Link>
          <Link className="ghost-button" href="/analyse-personnalisee">Voir l’analyse personnalisée</Link>
        </div>
      </section>
    </main>
  );
}
