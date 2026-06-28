# ScanAdmin — process manuel de vente de l’analyse à 200 €

## Objectif

Transformer une demande d’analyse ScanAdmin en vente manuelle simple, sans Stripe au départ.

Le process doit rester court :

```txt
Lead reçu
→ qualification
→ réponse rapide
→ paiement manuel
→ collecte complémentaire
→ production analyse
→ livraison
→ relance
```

## Offre vendue

- Nom : Analyse personnalisée ScanAdmin.
- Prix lancement : 200 €.
- Prix normal annoncé : 490 €.
- Format : diagnostic court, sérieux, orienté décision.
- Promesse : transformer le résultat du scan en priorités concrètes et en premier test d’agent IA supervisé.
- Limite : pas de gain garanti, pas de déploiement technique complet, pas d’automatisation sans validation humaine.

## Délais recommandés

- Réponse au lead : sous 24 h ouvrées.
- Paiement : avant production de l’analyse.
- Livraison : 48 à 72 h ouvrées après paiement et réception des informations nécessaires.
- Suivi : relance 7 jours après livraison.

## Étape 1 — Réception du lead

Le lead arrive par :

- webhook,
- email Resend,
- ou fallback logs serveur temporaire.

À vérifier immédiatement :

- nom,
- entreprise,
- email,
- téléphone,
- secteur,
- message,
- résultat du scan si disponible,
- tâches principales détectées,
- coût mensuel estimé,
- potentiel récupérable.

## Étape 2 — Qualification rapide

Un lead est prioritaire si :

- l’entreprise semble être une vraie PME,
- il y a des tâches répétitives identifiables,
- le coût mensuel estimé est significatif,
- le prospect comprend que l’IA reste supervisée,
- le message indique un besoin concret.

Un lead est faible si :

- email douteux,
- entreprise non identifiable,
- aucun contexte,
- demande trop vague,
- attente d’automatisation magique,
- budget probablement absent.

## Étape 3 — Réponse initiale

Objectif : confirmer réception, reformuler la valeur, annoncer le prix, demander les derniers éléments utiles.

### Email 1 — réception du lead

Objet : Votre demande d’analyse ScanAdmin

```txt
Bonjour [Prénom],

Merci pour votre demande d’analyse ScanAdmin.

J’ai bien reçu les informations liées à votre scan. L’objectif de l’analyse personnalisée est de vérifier vos chiffres, identifier les tâches administratives les plus coûteuses et définir le premier agent IA supervisé à tester sans automatiser au hasard.

L’offre de lancement est actuellement à 200 € au lieu du prix normal prévu de 490 €.

Pour préparer l’analyse, pouvez-vous me confirmer :
1. votre secteur d’activité exact ;
2. les 2 ou 3 tâches administratives qui vous prennent le plus de temps ;
3. si vous souhaitez prioriser le gain de temps, la réduction d’erreurs ou l’organisation interne ;
4. si vous préférez être recontacté par email ou téléphone.

Après confirmation, je vous envoie les modalités de paiement et le délai de livraison.

Cordialement,
Jeason Bacoul
ScanAdmin
```

## Étape 4 — Paiement manuel

Tant que Stripe n’est pas branché, utiliser un paiement manuel :

- lien de paiement bancaire,
- virement,
- facture manuelle,
- Stripe Payment Link si disponible,
- PayPal professionnel si utilisé.

### Email 2 — paiement

Objet : Paiement analyse ScanAdmin — 200 €

```txt
Bonjour [Prénom],

Merci pour votre retour.

Je peux lancer l’analyse personnalisée ScanAdmin sur la base de votre scan et des éléments complémentaires.

Montant de l’offre de lancement : 200 €.
Prix normal prévu : 490 €.

L’analyse comprend :
- vérification du résultat du scan ;
- diagnostic chiffré ;
- classement des tâches prioritaires ;
- recommandation du premier agent IA supervisé à tester ;
- plan de test simple sur 7 à 14 jours ;
- limites et points de validation humaine.

Lien ou modalité de paiement :
[INSÉRER LIEN / IBAN / INSTRUCTIONS]

Dès réception du paiement, je prépare l’analyse. Le délai prévu est de 48 à 72 h ouvrées après réception des informations nécessaires.

Cordialement,
Jeason Bacoul
ScanAdmin
```

## Étape 5 — Collecte complémentaire

Si nécessaire, demander :

- exemple de tâche répétitive,
- volume mensuel approximatif,
- temps moyen par tâche,
- outils utilisés,
- personne qui valide aujourd’hui,
- niveau de risque acceptable,
- contrainte métier particulière.

Ne pas demander de données sensibles si elles ne sont pas nécessaires.

## Étape 6 — Production de l’analyse

Structure de l’analyse à produire :

1. Résumé dirigeant.
2. Rappel du contexte.
3. Chiffres issus du scan.
4. Vérification de cohérence.
5. Top 3 tâches administratives.
6. Matrice coût / répétition / risque / contrôle.
7. Agent IA recommandé.
8. Ce que l’agent peut faire.
9. Ce que l’agent ne doit pas faire.
10. Plan de test sur 7 à 14 jours.
11. Points de vigilance.
12. Conclusion actionnable.

## Étape 7 — Livraison

### Email 3 — livraison

Objet : Votre analyse ScanAdmin

```txt
Bonjour [Prénom],

Vous trouverez ci-joint votre analyse personnalisée ScanAdmin.

L’objectif de ce document est de vous aider à décider quelle tâche administrative traiter en priorité et quel premier agent IA supervisé tester.

Les points les plus importants sont :
1. [priorité 1]
2. [priorité 2]
3. [agent recommandé]

Comme indiqué dans l’analyse, les résultats restent indicatifs. Le gain réel doit être vérifié par un test court avec validation humaine.

Je vous conseille de commencer par le plan de test sur 7 à 14 jours proposé dans le document, puis de décider seulement ensuite si le cas mérite d’être prolongé ou automatisé davantage.

Cordialement,
Jeason Bacoul
ScanAdmin
```

## Étape 8 — Relance après livraison

Relancer après 7 jours.

### Email 4 — suivi

Objet : Retour sur votre analyse ScanAdmin

```txt
Bonjour [Prénom],

Je reviens vers vous concernant l’analyse ScanAdmin envoyée la semaine dernière.

Avez-vous pu identifier la première tâche administrative que vous souhaitez tester avec un agent IA supervisé ?

Votre retour m’intéresse particulièrement sur trois points :
1. la priorité recommandée vous semble-t-elle juste ?
2. le plan de test est-il applicable dans votre entreprise ?
3. voyez-vous un blocage avant de passer à l’action ?

Cordialement,
Jeason Bacoul
ScanAdmin
```

## Statuts internes recommandés

Utiliser ces statuts dans un tableur ou CRM simple :

- Nouveau lead
- Contacté
- En attente retour
- Paiement envoyé
- Payé
- Analyse en cours
- Analyse livrée
- Relancé
- Perdu
- À rappeler

## Tableur minimal de suivi

Colonnes recommandées :

```txt
Date lead
Entreprise
Prénom
Nom
Email
Téléphone
Secteur
Coût mensuel estimé
Priorité détectée
Statut
Paiement
Date paiement
Date livraison prévue
Date livraison réelle
Relance J+7
Notes
```

## Règles importantes

- Ne pas produire l’analyse avant paiement, sauf décision volontaire.
- Ne pas promettre de gain garanti.
- Ne pas promettre d’agent autonome complet.
- Toujours rappeler que l’IA prépare et que l’humain valide.
- Toujours garder une trace écrite du paiement et de la livraison.
- Ne pas collecter plus de données que nécessaire.

## Critère de validation du process

Le process est validé si, sur les premiers leads :

```txt
10 demandes reçues
→ 5 réponses obtenues
→ 2 paiements à 200 €
→ 2 analyses livrées
→ 1 retour exploitable
```

Si ce ratio est atteint, l’offre mérite d’être renforcée.

Si aucun paiement n’arrive malgré des leads qualifiés, il faudra retravailler :

- la preuve du livrable,
- la confiance,
- le prix,
- ou la clarté du résultat après paiement.
