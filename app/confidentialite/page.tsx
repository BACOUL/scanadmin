import Link from 'next/link';

const collected = [
  ['Scan gratuit', 'Volumes de tâches, temps estimé, coût horaire indicatif, secteur ou informations nécessaires au calcul.'],
  ['Résultat du scan', 'Estimation du temps administratif, coût mensuel, coût annuel, potentiel récupérable et agents potentiels.'],
  ['Demande d’analyse', 'Nom, email, entreprise, téléphone si fourni, secteur, message et résumé du besoin.'],
  ['Navigation', 'Données techniques minimales pouvant être nécessaires au fonctionnement du site et à la sécurité.'],
];

const notRequested = [
  'Mots de passe internes',
  'Accès à votre comptabilité',
  'Accès direct à vos boîtes mail',
  'Documents clients confidentiels sans accord clair',
  'Données bancaires hors prestataire de paiement sécurisé',
  'Informations sensibles inutiles au diagnostic',
];

const purposes = [
  ['Produire le résultat du scan', 'Transformer vos réponses en estimation administrative indicative.'],
  ['Répondre à une demande', 'Vous recontacter si vous demandez une analyse ou une information complémentaire.'],
  ['Préparer une analyse personnalisée', 'Comprendre vos tâches, vos priorités et les cas d’usage IA à vérifier.'],
  ['Améliorer la méthode', 'Identifier les formulaires, pages ou explications à rendre plus claires.'],
];

const principles = [
  ['Minimisation', 'Ne collecter que les informations utiles au scan, à l’analyse ou au contact.'],
  ['Transparence', 'Expliquer clairement pourquoi une information est demandée.'],
  ['Supervision humaine', 'Ne pas confier une décision administrative ou commerciale à l’IA seule.'],
  ['Prudence', 'Présenter les résultats comme des estimations, pas comme des garanties.'],
];

const rights = [
  ['Accès', 'Demander quelles informations vous concernant ont été transmises.'],
  ['Rectification', 'Corriger une information inexacte ou incomplète.'],
  ['Suppression', 'Demander la suppression d’une demande ou d’informations conservées.'],
  ['Opposition', 'Demander à ne plus être recontacté dans le cadre de votre demande.'],
];

export const metadata = {
  title: 'Confidentialité ScanAdmin | Données du scan IA administratif PME',
  description: 'Politique de confidentialité ScanAdmin : données collectées, usage du scan IA administratif, demandes d’analyse, limites IA et droits utilisateur.',
};

export default function ConfidentialitePage() {
  return (
    <main>
      <section className="premium-hero">
        <div className="container hero-shell">
          <div className="hero-copy">
            <p className="badge">Confidentialité ScanAdmin</p>
            <h1>Vos données administratives doivent être traitées avec prudence.</h1>
            <p className="hero-subtitle">ScanAdmin est conçu pour mesurer des tâches administratives, pas pour aspirer vos données internes. Le site doit collecter le minimum utile au scan, à l’analyse et au contact.</p>
            <div className="hero-actions">
              <Link className="button" href="/scan">Lancer le scan gratuit</Link>
              <Link className="ghost-button" href="/contact">Contacter ScanAdmin</Link>
            </div>
            <p className="hero-note">Cette page est une information de confidentialité. Elle devra être vérifiée et complétée si de nouveaux outils de suivi, paiement ou stockage sont ajoutés.</p>
          </div>

          <div className="report-preview">
            <div className="report-topline"><span>Données</span><strong>Prudence</strong></div>
            <div className="report-metric-main"><span>Principe</span><strong style={{ fontSize: 34 }}>Minimum utile</strong></div>
            <div className="metric-grid">
              <div><span>Scan</span><strong>Local</strong></div>
              <div><span>Analyse</span><strong>Sur demande</strong></div>
            </div>
            <div className="priority-list">
              <p>Règles clés</p>
              <span>Pas de revente</span>
              <span>Pas de promesse de gain</span>
              <span>Validation humaine</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container premium-section split-section">
        <div>
          <p className="section-kicker">Principe général</p>
          <h2>ScanAdmin doit demander peu d’informations, mais les expliquer clairement.</h2>
        </div>
        <div className="text-stack">
          <p>Le scan gratuit sert à produire une estimation. Les informations demandées doivent donc rester liées à vos tâches administratives : volumes, temps, coût horaire indicatif, secteur et catégories de tâches.</p>
          <p>Une demande d’analyse personnalisée nécessite plus de contexte : contact, entreprise, secteur et résumé du besoin. Ces informations servent à répondre à votre demande et à préparer une analyse plus utile.</p>
          <p>Les résultats ScanAdmin restent indicatifs. Ils aident à prioriser une décision, sans garantir un gain réel.</p>
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Données collectées</p>
          <h2>Les informations peuvent varier selon l’étape du parcours.</h2>
        </div>
        <div className="comparison-grid">
          {collected.map(([title, text]) => (
            <div key={title} className="comparison-card muted-card">
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container premium-section split-section reversed">
        <div className="deliverable-preview">
          <div className="deliverable-header"><span>À ne pas transmettre</span><strong>Sans nécessité</strong></div>
          {notRequested.map((item) => (
            <div key={item} className="deliverable-row"><span>{item}</span></div>
          ))}
        </div>
        <div>
          <p className="section-kicker">Données sensibles</p>
          <h2>Ne transmettez pas d’informations sensibles si elles ne sont pas nécessaires.</h2>
          <p className="section-text">ScanAdmin n’a pas besoin de mots de passe, d’accès directs à vos outils internes ou de documents confidentiels pour un premier scan administratif.</p>
          <p className="section-text">Si une analyse plus avancée nécessite des documents ou exemples réels, le périmètre doit être clarifié avant tout envoi.</p>
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Finalités</p>
          <h2>Pourquoi ces informations peuvent être utilisées.</h2>
        </div>
        <div className="comparison-grid">
          {purposes.map(([title, text]) => (
            <div key={title} className="comparison-card muted-card">
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Engagements</p>
          <h2>Les principes à respecter sur un diagnostic IA administratif.</h2>
        </div>
        <div className="process-grid">
          {principles.map(([title, text], index) => (
            <div key={title} className="process-card">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container premium-section split-section">
        <div>
          <p className="section-kicker">Scan et navigateur</p>
          <h2>Le scan peut utiliser le navigateur pour afficher votre résultat.</h2>
        </div>
        <div className="text-stack">
          <p>Le résultat du scan peut être conservé temporairement dans votre navigateur afin d’afficher la page de résultat et de poursuivre vers une demande d’analyse.</p>
          <p>Cette logique permet d’éviter de créer un compte utilisateur pour un premier diagnostic. Si des fonctions de compte, historique, paiement ou stockage serveur sont ajoutées plus tard, cette page devra être mise à jour.</p>
          <p>Pour supprimer les données locales du navigateur, l’utilisateur peut effacer les données de navigation du site depuis les paramètres de son navigateur.</p>
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Vos droits</p>
          <h2>Vous pouvez demander des informations ou une suppression.</h2>
          <p>Pour toute demande concernant vos informations, contactez ScanAdmin avec l’adresse utilisée lors de la demande d’analyse.</p>
        </div>
        <div className="comparison-grid">
          {rights.map(([title, text]) => (
            <div key={title} className="comparison-card muted-card">
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container premium-section comparison-section">
        <div className="section-heading">
          <p className="section-kicker">Limites IA</p>
          <h2>La confidentialité ne suffit pas : l’usage de l’IA doit aussi rester supervisé.</h2>
        </div>
        <div className="comparison-grid">
          <div className="comparison-card muted-card"><h3>Pas de décision automatique</h3><p>ScanAdmin ne doit pas confier à l’IA une décision administrative, commerciale, comptable ou sensible sans validation humaine.</p></div>
          <div className="comparison-card highlight-card"><h3>Analyse prudente</h3><p>Les résultats servent à prioriser et préparer un test. Ils ne remplacent pas le jugement du dirigeant ou de l’équipe.</p></div>
          <div className="comparison-card muted-card"><h3>Données utiles seulement</h3><p>Le diagnostic doit fonctionner avec le minimum d’informations nécessaires, surtout au stade du scan gratuit.</p></div>
        </div>
      </section>

      <section className="container premium-final-cta">
        <p className="section-kicker">Question confidentialité</p>
        <h2>Une question sur vos données avant de commencer ?</h2>
        <p>Vous pouvez contacter ScanAdmin avant d’envoyer une demande d’analyse, surtout si votre cas implique des documents ou informations sensibles.</p>
        <div className="hero-actions center-actions">
          <Link className="button" href="/contact">Contacter ScanAdmin</Link>
          <Link className="ghost-button" href="/scan">Lancer le scan gratuit</Link>
        </div>
      </section>
    </main>
  );
}
