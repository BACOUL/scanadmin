# ScanAdmin — process payant de l’analyse personnalisée

## Objectif

Définir exactement ce qui se passe lorsqu’un client paie l’analyse personnalisée ScanAdmin à 200 €.

ScanAdmin est un service / une branche commerciale exploitée par TimeProofs.

```txt
TimeProofs
→ exploite ScanAdmin
→ vend l’analyse personnalisée ScanAdmin
→ peut proposer ensuite une mise en place d’agent IA supervisé sur devis séparé
```

---

## Règle principale

L’analyse personnalisée ne démarre qu’après paiement confirmé.

Un lead sans paiement peut être suivi, mais il ne doit pas déclencher la production du livrable.

Le paiement de 200 € correspond uniquement à l’analyse personnalisée.

Il ne comprend pas :

- la création complète d’un agent IA ;
- l’installation d’un outil ;
- la connexion à une boîte email, un CRM, un drive ou un logiciel métier ;
- le développement d’une automatisation ;
- le paramétrage complet d’un système IA ;
- un accompagnement illimité.

---

## Offre vendue

- Nom : Analyse personnalisée ScanAdmin.
- Exploitation : TimeProofs.
- Prix lancement : 200 €.
- Prix normal annoncé : 490 €.
- Paiement : Stripe Checkout.
- Délai cible : 48 à 72 h ouvrées après paiement et réception des informations nécessaires.
- TVA : franchise en base, TVA non applicable, art. 293 B du CGI.

---

## Parcours officiel

```txt
Scan gratuit
→ demande d’analyse
→ acceptation CGV
→ demande d’exécution après paiement
→ création lead
→ paiement Stripe Checkout 200 €
→ confirmation paiement
→ vérification interne
→ collecte complémentaire si nécessaire
→ production analyse
→ livraison
→ proposition éventuelle de cadrage IA sur devis
→ relance qualité
```

---

## Étape 1 — Lead créé

Le formulaire `/analyse` crée d’abord un lead avec :

- prénom ;
- nom ;
- entreprise ;
- email ;
- téléphone ;
- secteur ;
- message ;
- résultat du scan si disponible ;
- consentement ;
- acceptation des CGV ;
- demande d’exécution après paiement.

---

## Étape 2 — Checkout Stripe

Après création du lead, le site appelle :

```txt
POST /api/checkout
```

L’API crée une session Stripe Checkout avec :

- email client ;
- entreprise ;
- leadId ;
- prix Stripe `STRIPE_ANALYSIS_PRICE_ID` ;
- page succès `/paiement/succes` ;
- page retour `/paiement/retour`.

---

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

- webhook ;
- email ;
- ou logs serveur temporairement.

Statut interne à passer :

```txt
Paiement confirmé
```

---

## Étape 4 — Action interne immédiate après paiement

Dès paiement confirmé :

1. Créer ou mettre à jour la fiche client interne.
2. Associer le paiement Stripe au lead.
3. Noter la date de paiement.
4. Calculer la date cible de livraison.
5. Vérifier que le scan est présent.
6. Vérifier que le secteur est clair.
7. Vérifier que la tâche prioritaire ressort suffisamment.
8. Décider si des informations complémentaires sont nécessaires.

Statut interne :

```txt
Analyse à produire
```

---

## Étape 5 — Email de confirmation client

Email à envoyer après paiement :

```txt
Bonjour [Prénom],

Votre paiement pour l’analyse personnalisée ScanAdmin est bien confirmé.

Je vais analyser votre scan, vos réponses et les priorités administratives qui ressortent.

Objectif du livrable :
1. identifier les tâches administratives les plus coûteuses ;
2. recommander le premier cas d’usage IA supervisé à tester ;
3. préciser ce que l’IA peut faire, ce qu’elle ne doit pas faire et comment tester sans risque.

Délai cible : 48 à 72 heures ouvrées, sous réserve que les informations transmises soient suffisantes.

Si un point manque, je reviendrai vers vous avec quelques questions simples.

Cordialement,
Jeason Bacoul
ScanAdmin — TimeProofs
```

---

## Étape 6 — Collecte complémentaire si nécessaire

Demander uniquement les informations utiles.

Questions maximales :

1. Quelle tâche administrative vous prend le plus de temps aujourd’hui ?
2. Qui réalise cette tâche ?
3. Qui valide avant envoi ou décision ?
4. Quel outil utilisez-vous aujourd’hui ?
5. Avez-vous un exemple non sensible à décrire ?
6. Votre priorité est-elle le temps, les erreurs, l’organisation ou le suivi ?

Ne pas demander :

- données médicales ;
- données bancaires ;
- mots de passe ;
- documents clients sensibles ;
- accès à des outils internes ;
- fichiers confidentiels non nécessaires.

---

## Étape 7 — Production de l’analyse

Structure obligatoire du livrable :

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
12. Option suivante : cadrage IA sur devis si le client veut aller plus loin.
13. Conclusion actionnable.

Règle de fond :

```txt
L’IA prépare.
L’humain valide.
ScanAdmin recommande un test.
ScanAdmin ne promet pas un gain garanti.
```

---

## Étape 8 — Livraison

Format possible :

- PDF ;
- Google Docs exporté ;
- document structuré envoyé par email ;
- lien de consultation si système interne prévu plus tard.

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

Si vous souhaitez ensuite mettre en place l’agent IA recommandé, il faudra cadrer cette étape séparément : objectif exact, outils concernés, données nécessaires, limites, validations humaines et devis.

Cordialement,
Jeason Bacoul
ScanAdmin — TimeProofs
```

---

## Étape 9 — Si le client veut une IA

Si le client répond qu’il veut mettre en place l’agent IA recommandé, ne pas promettre immédiatement une installation.

Réponse officielle :

```txt
Oui, c’est possible d’étudier une mise en place, mais ce n’est pas inclus dans l’analyse à 200 €.

La prochaine étape consiste à cadrer précisément l’agent IA :
- tâche à traiter ;
- outils concernés ;
- données nécessaires ;
- niveau de risque ;
- validations humaines ;
- livrables attendus ;
- délai ;
- prix.

Ensuite seulement, je peux vous proposer un devis séparé.
```

Statut interne :

```txt
Demande IA à cadrer
```

Puis appliquer :

```txt
docs/AI_IMPLEMENTATION_PROCESS.md
```

---

## Étape 10 — Relance qualité

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
ScanAdmin — TimeProofs
```

---

## Statuts internes recommandés

- Lead créé.
- Checkout lancé.
- Paiement confirmé.
- Analyse à produire.
- Infos complémentaires demandées.
- Analyse en cours.
- Analyse livrée.
- Demande IA à cadrer.
- Devis IA envoyé.
- Devis IA accepté.
- Devis IA refusé.
- Relance J+7.
- Retour reçu.
- Perdu / remboursé si nécessaire.

---

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
Agent IA recommandé
Client veut une IA ?
Statut cadrage IA
Devis IA envoyé ?
Relance J+7
Notes
```

---

## Règle de validation commerciale

Le signal principal n’est pas un nombre forcé de testeurs.

Le signal à suivre est :

```txt
visiteurs qualifiés
→ scans terminés
→ clics analyse
→ paiements confirmés
→ analyses livrées
→ demandes éventuelles de cadrage IA
```

Si les clients paient l’analyse mais ne demandent jamais d’IA, l’analyse reste une offre autonome.

Si plusieurs clients demandent une IA après l’analyse, créer une offre dédiée de cadrage / mise en place IA supervisée.
