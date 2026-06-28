import Link from 'next/link';

const collected = [
  ['Scan gratuit', 'Volumes de tâches, temps estimé, coût horaire indicatif, secteur ou informations nécessaires au calcul.'],
  ['Résultat du scan', 'Estimation du temps administratif, coût mensuel, coût annuel, potentiel récupérable et agents potentiels.'],
  ['Commande d’analyse', 'Nom, email, entreprise, téléphone si fourni, secteur, message, consentement de contact, acceptation des CGV et demande d’exécution après paiement.'],
  ['Paiement', 'Statut de paiement, identifiant de session Stripe, montant, devise, email client et métadonnées nécessaires au rapprochement avec la commande.'],
  ['Navigation et sécurité', 'Données techniques minimales pouvant être nécessaires au fonctionnement du site, à la sécurité, aux logs serveur et au diagnostic d’incident.'],
];

const tools = [
  ['Navigateur', 'Le résultat du scan peut être conservé localement dans votre navigateur afin d’afficher la page de résultat et poursuivre vers la commande.'],
  ['Serveur ScanAdmin', 'Les informations du formulaire peuvent être transmises au serveur pour créer un lead, préparer une commande et notifier ScanAdmin.'],
  ['Stripe', 'Stripe traite le paiement de l’analyse personnalisée. ScanAdmin ne stocke pas les données complètes de carte bancaire.'],
  ['Resend ou email', 'Si configuré, les demandes et notifications de paiement peuvent être transmises par email à ScanAdmin.'],
  ['Webhook ou outil de suivi', 'Si configuré, les leads ou paiements peuvent être envoyés vers un outil interne de suivi, un tableur, un CRM ou un outil d’automatisation.'],
];

const notRequested = [
  'Mots de passe internes',
  'Accès à votre comptabilité',
  'Accès direct à vos boîtes mail',
  'Documents clients confidentiels sans accord clair',
  'Données bancaires complètes hors prestataire de paiement sécurisé',
  'Informations sensibles inutiles au diagnostic',
];

const purposes = [
  ['Produire le résultat du scan', 'Transformer vos réponses en estimation administrative indicative.'],
  ['Créer la demande ou commande', 'Créer un lead, associer le scan à une commande et permettre le paiement de l’analyse.'],
  ['Traiter le paiement', 'Rediriger vers Stripe Checkout, confirmer le paiement et rapprocher le paiement de la demande.'],
  ['Préparer une analyse personnalisée', 'Comprendre vos tâches, vos priorités et les cas d’usage IA à vérifier.'],
  ['Assurer le suivi client', 'Vous contacter si une information manque, livrer l’analyse et assurer un suivi après livraison.'],
  ['Améliorer la méthode', 'Identifier les formulaires, pages ou explications à rendre plus claires.'],
];

const principles = [
  ['Minimisation', 'Ne collecter que les informations utiles au scan, à l’analyse, au paiement ou au contact.'],
  ['Transparence', 'Expliquer clairement pourquoi une information est demandée.'],
  ['Séparation paiement', 'Ne pas stocker les données complètes de carte bancaire dans ScanAdmin : le paiement est traité par Stripe.'],
  ['Supervision humaine', 'Ne pas confier une décision administrative ou commerciale à l’IA seule.'],
  ['Prudence', 'Présenter les résultats comme des estimations, pas comme des garanties.'],
];

const rights = [
  ['Accès', 'Demander quelles informations vous concernant ont été transmises ou conservées.'],
  ['Rectification', 'Corriger une information inexacte ou incomplète.'],
  ['Suppression', 'Demander la suppression d’une demande ou d’informations conservées, lorsque cela est possible au regard des obligations de suivi, paiement ou facturation.'],
  ['Opposition', 'Demander à ne plus être recontacté dans le cadre de votre demande.'],
];

export const metadata = {
  title: 'Confidentialité ScanAdmin | Données, scan IA administratif et paiement',
  description: 'Politique de confidentialité ScanAdmin : données collectées, scan IA administratif, commande d’analyse, paiement Stripe, notifications et droits utilisateur.',
};

export default function ConfidentialitePage() {
  return (
    <main>
      <section className="premium-hero">
        <div className="container hero-shell">
          <div className="hero-copy">
            <p className="badge">Confidentialité ScanAdmin</p>
            <h1>Vos données administratives doivent être traitées avec prudence.</h1>
            <p className="hero-subtitle">ScanAdmin est conçu pour mesurer des tâches administratives, traiter une commande d’analyse et préparer un livrable utile, sans aspirer inutilement vos données internes.</p>
            <div className="hero-actions">
              <Link className="button" href="/scan">Lancer le scan gratuit</Link>
              <Link className="ghost-button" href="/cgv">Voir les CGV</Link>
            </div>
            <p className="hero-note">Cette page est une base d’information à vérifier et compléter selon les outils réellement activés au lancement : Stripe, Resend, webhook, CRM ou analytics.</p>
          </div>

          <div className="report-preview">
            <div className="report-topline"><span>Données</span><strong>Prudence</strong></div>
            <div className="report-metric-main"><span>Principe</span><strong style={{ fontSize: 34 }}>Minimum utile</strong></div>
            <div className="metric-grid">
              <div><span>Scan</span><strong>Local</strong></div>
              <div><span>Paiement</span><strong>Stripe</strong></div>
            </div>
            <div className="priority-list">
              <p>Règles clés</p>
              <span>Pas de revente</span>
              <span>Pas de carte stockée</span>
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
          <p>Une commande d’analyse personnalisée nécessite plus de contexte : contact, entreprise, secteur, résumé du besoin, acceptation des conditions de vente et éléments permettant de rattacher le paiement à la demande.</p>
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

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Outils utilisés</p>
          <h2>Le traitement peut passer par plusieurs outils selon la configuration.</h2>
          <p>La configuration exacte doit être vérifiée avant lancement public. Les outils ci-dessous correspondent au tunnel prévu pour ScanAdmin.</p>
        </div>
        <div className="comparison-grid">
          {tools.map(([title, text]) => (
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
          <p className="section-text">Le paiement est traité via Stripe Checkout. ScanAdmin n’a pas vocation à recevoir ou conserver les données complètes de carte bancaire.</p>
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
          <p>Cette logique permet d’éviter de créer un compte utilisateur pour un premier diagnostic. Lorsqu’une commande est lancée, les informations nécessaires à la création du lead et au paiement sont transmises côté serveur.</p>
          <p>Pour supprimer les données locales du navigateur, l’utilisateur peut effacer les données de navigation du site depuis les paramètres de son navigateur.</p>
        </div>
      </section>

      <section className="container premium-section split-section reversed">
        <div className="deliverable-preview">
          <div className="deliverable-header"><span>Flux commande</span><strong>Analyse</strong></div>
          <div className="deliverable-row"><strong>1. Scan</strong><span>résultat local dans le navigateur</span></div>
          <div className="deliverable-row"><strong>2. Formulaire</strong><span>création du lead ScanAdmin</span></div>
          <div className="deliverable-row"><strong>3. Paiement</strong><span>redirection vers Stripe Checkout</span></div>
          <div className="deliverable-row"><strong>4. Confirmation</strong><span>webhook Stripe et notification interne</span></div>
        </div>
        <div>
          <p className="section-kicker">Paiement et commande</p>
          <h2>Le paiement est séparé du diagnostic.</h2>
          <p className="section-text">Le formulaire crée une demande associée au scan, puis redirige vers Stripe Checkout pour le paiement de l’analyse personnalisée.</p>
          <p className="section-text">Après paiement confirmé, Stripe peut envoyer un événement à ScanAdmin afin de déclencher une notification interne et permettre la préparation du livrable.</p>
          <p className="section-text">Le lead seul ne déclenche pas la production de l’analyse : le paiement confirmé reste nécessaire.</p>
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
