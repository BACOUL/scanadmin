# ScanAdmin — process payant de l’analyse personnalisée

## Objectif

Le process officiel ScanAdmin doit être payant et propre dès le départ.

```txt
Scan gratuit
→ demande d’analyse
→ création lead
→ paiement Stripe Checkout 200 €
→ confirmation paiement
→ collecte complémentaire si nécessaire
→ production analyse
→ livraison
→ relance qualité
```

## Règle principale

L’analyse personnalisée ne démarre qu’après paiement confirmé.

Un lead sans paiement peut être relancé, mais il ne doit pas déclencher la production du livrable.

## Offre vendue

- Nom : Analyse personnalisée ScanAdmin.
- Prix lancement : 200 €.
- Prix normal annoncé : 490 €.
- Paiement : Stripe Checkout.
- Délai cible : 48 à 72 h ouvrées après paiement et réception des informations nécessaires.

## Étape 1 — Lead créé

Le formulaire `/analyse` crée d’abord un lead avec :

- prénom,
- nom,
- entreprise,
- email,
- téléphone,
- secteur,
- message,
- résultat du scan si disponible,
- consentement.

## Étape 2 — Checkout Stripe

Après création du lead, le site appelle :

```txt
POST /api/checkout
```

L’API crée une session Stripe Checkout avec :

- email client,
- entreprise,
- leadId,
- prix Stripe `STRIPE_ANALYSIS_PRICE_ID`,
- page succès `/paiement/succes`,
- page retour `/paiement/retour`.

## Étape 3 — Paiement confirmé

Stripe appelle :

```txt
POST /api/stripe/webhook
```

Événement traité :

```txt
checkout.session.completed
```

Si `payment_status = paid`, ScanAdmin reçoit une notification par :

- webhook,
- email,
- ou logs serveur temporairement.

## Étape 4 — Collecte complémentaire

Après paiement, demander uniquement les informations nécessaires :

- secteur exact,
- tâche administrative la plus chronophage,
- outil actuel utilisé,
- personne qui valide aujourd’hui,
- exemple non sensible si utile,
- priorité : gain de temps, réduction d’erreur ou organisation.

Ne pas demander de données sensibles si elles ne sont pas nécessaires.

## Étape 5 — Production de l’analyse

Structure du livrable :

1. Résumé dirigeant.
2. Contexte entreprise.
3. Résultat du scan.
4. Vérification de cohérence.
5. Top 3 tâches administratives.
6. Matrice coût / répétition / risque / contrôle.
7. Premier agent IA recommandé.
8. Ce que l’agent peut faire.
9. Ce que l’agent ne doit pas faire.
10. Plan de test 7 à 14 jours.
11. Limites et validation humaine.
12. Conclusion actionnable.

## Étape 6 — Livraison

Email de livraison :

```txt
Bonjour [Prénom],

Votre analyse personnalisée ScanAdmin est prête.

Vous trouverez le livrable en pièce jointe / via le lien ci-dessous.

Les points principaux sont :
1. [priorité principale]
2. [agent IA recommandé]
3. [plan de test conseillé]

Comme indiqué dans le document, les résultats restent indicatifs. Le gain réel doit être vérifié par un test court avec validation humaine.

Cordialement,
Jeason Bacoul
ScanAdmin
```

## Étape 7 — Relance qualité

Relance 7 jours après livraison :

```txt
Bonjour [Prénom],

Je reviens vers vous concernant votre analyse ScanAdmin.

Avez-vous pu identifier le premier test IA à lancer ?

Votre retour m’intéresse sur trois points :
1. la priorité recommandée vous semble-t-elle juste ?
2. le plan de test est-il applicable ?
3. voyez-vous un blocage avant de passer à l’action ?

Cordialement,
Jeason Bacoul
ScanAdmin
```

## Statuts internes recommandés

- Lead créé
- Checkout lancé
- Paiement confirmé
- Infos complémentaires demandées
- Analyse en cours
- Analyse livrée
- Relance J+7
- Retour reçu
- Perdu / remboursé si nécessaire

## Tableur minimal

```txt
Date lead
Lead ID
Session Stripe
Entreprise
Prénom
Nom
Email
Téléphone
Secteur
Coût mensuel estimé
Priorité détectée
Paiement confirmé
Date paiement
Date livraison prévue
Date livraison réelle
Relance J+7
Notes
```

## Critère de validation commerciale

Premier objectif :

```txt
10 leads qualifiés
→ 5 passages Checkout
→ 2 paiements à 200 €
→ 2 analyses livrées
→ 1 retour client exploitable
```

Si ce ratio est atteint, l’offre peut être renforcée.

Si les leads arrivent mais ne paient pas, retravailler :

- la preuve du livrable,
- le rapport exemple,
- le prix,
- la page analyse,
- la confiance avant Checkout.
