import Link from 'next/link';

const categories = [
  {
    title: 'Comprendre ScanAdmin',
    questions: [
      ['À quoi sert ScanAdmin ?', 'ScanAdmin sert à mesurer la charge administrative répétitive d’une PME, à estimer son coût mensuel et à repérer les tâches qui pourraient mériter un test avec un agent IA supervisé.'],
      ['ScanAdmin est-il un outil d’automatisation ?', 'Pas au départ. ScanAdmin commence par le diagnostic : mesurer, chiffrer et prioriser. La mise en place d’un agent IA vient seulement si le cas d’usage est suffisamment clair.'],
      ['Pourquoi mesurer avant d’automatiser ?', 'Parce qu’une automatisation mal choisie peut coûter du temps au lieu d’en faire gagner. Le bon point de départ est la tâche fréquente, répétitive, coûteuse et vérifiable.'],
      ['Pour quelles entreprises ScanAdmin est-il adapté ?', 'ScanAdmin vise surtout les PME, indépendants structurés et petites équipes qui gèrent des mails, devis, relances, documents, factures, dossiers clients ou reportings répétitifs.'],
    ],
  },
  {
    title: 'Scan gratuit et résultats',
    questions: [
      ['Combien de temps prend le scan ?', 'Le scan prend quelques minutes si vous connaissez approximativement vos volumes administratifs et le temps passé sur les principales tâches.'],
      ['Les résultats du scan sont-ils exacts ?', 'Les résultats sont des estimations. Ils donnent un ordre de grandeur utile pour prioriser, mais ils ne remplacent pas une analyse personnalisée ou un audit complet.'],
      ['Que signifie le coût administratif estimé ?', 'Il s’agit d’une estimation du temps administratif répétitif multiplié par un coût horaire indicatif. Le but est de rendre visible un coût souvent sous-estimé.'],
      ['Que faire après le scan ?', 'Si le résultat montre un potentiel réel, l’étape logique est l’analyse personnalisée. Elle vérifie les chiffres, classe les priorités et propose un premier plan de test.'],
    ],
  },
  {
    title: 'Analyse personnalisée',
    questions: [
      ['Pourquoi payer une analyse après un scan gratuit ?', 'Le scan donne un résultat brut. L’analyse transforme ce résultat en décision : tâches prioritaires, agent IA recommandé, limites, risques et plan de test.'],
      ['Que contient l’analyse personnalisée ?', 'Elle contient un diagnostic chiffré, une matrice de priorisation, les trois premières actions recommandées, un agent IA supervisé à tester et un plan de test sur 7 à 14 jours.'],
      ['Pourquoi le prix normal est-il fixé à 490 € ?', 'Parce que l’analyse doit être une prestation sérieuse : lecture du contexte, vérification des ordres de grandeur, priorisation, recommandation et limites.'],
      ['Pourquoi l’offre de lancement est-elle à 200 € ?', 'Le tarif de lancement sert à construire les premiers cas clients et améliorer la méthode ScanAdmin, tout en gardant un livrable utile et professionnel.'],
    ],
  },
  {
    title: 'Agents IA supervisés',
    questions: [
      ['Les agents IA sont-ils autonomes ?', 'Non. La logique ScanAdmin est supervisée : l’IA prépare, résume, classe ou propose, mais l’humain garde la validation finale.'],
      ['Quels agents IA peuvent être recommandés ?', 'Selon le scan, ScanAdmin peut recommander un agent mails, devis, relance, documents, factures, dossiers clients ou reporting.'],
      ['Un agent IA peut-il envoyer un devis ou un mail seul ?', 'Ce n’est pas la logique recommandée. L’agent peut préparer un brouillon, mais l’envoi, le prix, les conditions ou les engagements doivent être validés par une personne.'],
      ['Quand faut-il éviter un agent IA ?', 'Il faut éviter de commencer par une tâche rare, trop sensible, difficile à vérifier ou dépendante d’un jugement humain important.'],
    ],
  },
  {
    title: 'Données et confidentialité',
    questions: [
      ['Quelles données sont utilisées dans le scan ?', 'Le scan utilise surtout des informations déclaratives : volumes de tâches, temps estimé, coût horaire indicatif, secteur et catégories administratives.'],
      ['Faut-il transmettre des documents confidentiels ?', 'Non pour le scan gratuit. Il ne faut pas transmettre de documents sensibles, mots de passe ou accès internes si ce n’est pas nécessaire.'],
      ['Les données sont-elles revendues ?', 'ScanAdmin ne doit pas revendre les informations transmises. Les données servent à produire le résultat, répondre à une demande ou préparer une analyse.'],
      ['Le résultat peut-il être stocké dans le navigateur ?', 'Oui, le résultat du scan peut être conservé temporairement dans le navigateur pour afficher la page de résultat et poursuivre vers une analyse.'],
    ],
  },
  {
    title: 'Limites et responsabilité',
    questions: [
      ['ScanAdmin garantit-il un gain de temps ?', 'Non. ScanAdmin fournit une estimation et une méthode de priorisation. Le gain réel dépend de votre organisation, de vos outils, de vos données et du test effectué.'],
      ['ScanAdmin remplace-t-il un audit complet ?', 'Non. ScanAdmin est un diagnostic de première intention. Il aide à repérer les priorités, mais ne remplace pas un audit organisationnel, juridique, comptable ou technique complet.'],
      ['Peut-on utiliser ScanAdmin sans connaissances techniques ?', 'Oui. Le scan est conçu pour des dirigeants ou équipes non techniques. L’objectif est de parler en tâches, temps, coût et priorités.'],
      ['Que se passe-t-il si le potentiel est faible ?', 'Si le potentiel semble faible, il vaut mieux ne pas payer une analyse ou une mise en place. C’est précisément l’intérêt de mesurer avant d’automatiser.'],
    ],
  },
];

const summaryCards = [
  ['Mesurer', 'Le scan estime la charge administrative répétitive avant toute décision.'],
  ['Prioriser', 'L’analyse classe les tâches selon coût, répétition, risque et contrôle humain.'],
  ['Tester', 'L’agent IA n’est envisagé que sur un cas d’usage clair et supervisé.'],
];

export const metadata = {
  title: 'FAQ ScanAdmin | Questions sur le scan IA administratif PME',
  description: 'FAQ ScanAdmin : scan gratuit, analyse personnalisée, agents IA administratifs supervisés, confidentialité, tarifs et limites pour PME.',
};

export default function FaqPage() {
  return (
    <main>
      <section className="premium-hero">
        <div className="container hero-shell">
          <div className="hero-copy">
            <p className="badge">FAQ ScanAdmin</p>
            <h1>Les réponses essentielles avant de lancer un scan ou une analyse.</h1>
            <p className="hero-subtitle">ScanAdmin repose sur une logique simple : mesurer les tâches administratives, prioriser les cas d’usage IA et garder une validation humaine.</p>
            <div className="hero-actions">
              <Link className="button" href="/scan">Lancer mon scan gratuit</Link>
              <Link className="ghost-button" href="/tarifs">Voir les tarifs</Link>
            </div>
            <p className="hero-note">Les réponses ci-dessous expliquent aussi les limites : pas de gain garanti, pas d’automatisation aveugle, pas de décision IA sans validation.</p>
          </div>

          <div className="report-preview">
            <div className="report-topline"><span>FAQ</span><strong>Avant lancement</strong></div>
            <div className="report-metric-main"><span>Principe</span><strong style={{ fontSize: 34 }}>Mesurer avant d’automatiser</strong></div>
            <div className="metric-grid">
              <div><span>Scan</span><strong>0 €</strong></div>
              <div><span>Analyse</span><strong>200 €</strong></div>
            </div>
            <div className="priority-list">
              <p>Questions clés</p>
              <span>Fiabilité du scan</span>
              <span>Données utilisées</span>
              <span>Agents IA supervisés</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Résumé</p>
          <h2>ScanAdmin tient en trois étapes.</h2>
        </div>
        <div className="comparison-grid">
          {summaryCards.map(([title, text]) => (
            <div key={title} className="comparison-card muted-card">
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {categories.map((category) => (
        <section key={category.title} className="container premium-section">
          <div className="section-heading">
            <p className="section-kicker">{category.title}</p>
            <h2>{category.title}</h2>
          </div>
          <div className="grid grid-2" style={{ marginTop: 24 }}>
            {category.questions.map(([question, answer]) => (
              <article key={question} className="card content-card">
                <h2>{question}</h2>
                <p>{answer}</p>
              </article>
            ))}
          </div>
        </section>
      ))}

      <section className="container premium-section comparison-section">
        <div className="section-heading">
          <p className="section-kicker">Décision</p>
          <h2>La meilleure réponse reste souvent de mesurer.</h2>
        </div>
        <div className="comparison-grid">
          <div className="comparison-card muted-card"><h3>Vous hésitez ?</h3><p>Lancez le scan gratuit pour obtenir une première estimation de votre charge administrative.</p></div>
          <div className="comparison-card highlight-card"><h3>Vous avez un potentiel ?</h3><p>Demandez une analyse personnalisée pour transformer le résultat en plan d’action clair.</p></div>
          <div className="comparison-card muted-card"><h3>Vous voulez automatiser ?</h3><p>Attendez d’avoir identifié une tâche fréquente, coûteuse, répétitive et facilement vérifiable.</p></div>
        </div>
      </section>

      <section className="container premium-final-cta">
        <p className="section-kicker">Commencer</p>
        <h2>Encore une question ? Commencez par le scan gratuit.</h2>
        <p>Vous obtiendrez une première base chiffrée pour savoir si une analyse personnalisée mérite d’être demandée.</p>
        <div className="hero-actions center-actions">
          <Link className="button" href="/scan">Lancer mon scan gratuit</Link>
          <Link className="ghost-button" href="/contact">Contacter ScanAdmin</Link>
        </div>
      </section>
    </main>
  );
}
