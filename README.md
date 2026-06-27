# ScanAdmin

**Scan IA Administratif pour PME**

ScanAdmin aide les PME à mesurer le coût de leurs tâches administratives répétitives, puis à recommander les agents IA supervisés les plus rentables à mettre en place.

## Site déployé

Première URL Vercel :

```txt
https://scanadmin.vercel.app/
```

## Phrase centrale

> Découvrez combien vos tâches administratives répétitives vous coûtent chaque mois, et quels agents IA peuvent vous faire gagner du temps et de l'argent.

## À lire en premier

Pour reprendre le projet sans contexte externe, lire dans cet ordre :

1. [`AGENTS.md`](./AGENTS.md) — instructions pour assistant IA / Codex.
2. [`docs/PROJECT_STATE.md`](./docs/PROJECT_STATE.md) — état actuel du projet.
3. [`docs/PRODUCT_VISION.md`](./docs/PRODUCT_VISION.md) — vision produit complète.
4. [`docs/EXECUTION_PLAN.md`](./docs/EXECUTION_PLAN.md) — plan de création de A à Z.
5. [`docs/TECHNICAL_ARCHITECTURE.md`](./docs/TECHNICAL_ARCHITECTURE.md) — architecture technique.
6. [`docs/BACKLOG.md`](./docs/BACKLOG.md) — prochaines tâches.
7. [`docs/CODEX_PROMPTS.md`](./docs/CODEX_PROMPTS.md) — prompts pour continuer avec Codex.

## Positionnement

ScanAdmin ne doit pas être présenté comme une agence IA généraliste.

Le bon angle est :

> mesurer d'abord les pertes de temps administratives, puis recommander les agents IA vraiment rentables.

Le scan couvre en priorité :

- mails ;
- devis ;
- relances ;
- factures ;
- documents ;
- dossiers clients ;
- planning ;
- reporting.

## MVP V1

La première version doit permettre à un dirigeant de PME de :

1. lancer un scan gratuit ;
2. répondre à quelques questions simples ;
3. obtenir une estimation du temps perdu ;
4. obtenir une estimation du coût mensuel et annuel ;
5. voir le temps récupérable avec agents IA supervisés ;
6. voir les 3 agents IA recommandés ;
7. demander une analyse personnalisée.

## Stack prévue

- Next.js
- TypeScript
- calculs côté client pour le MVP
- déploiement Vercel
- domaine cible : `scanadmin.fr` si réservé

## Tunnel cible

Accueil → Scan → Résultat → Agents recommandés → Demande d'analyse personnalisée.

## Règles importantes

- Les résultats sont des estimations.
- Ne jamais garantir un ROI sans audit personnalisé.
- Les agents IA sont supervisés : l'IA prépare, l'humain valide.
- Ne pas créer un SaaS lourd avant validation commerciale.

## Prochaine priorité

1. Vérifier le parcours en production.
2. Connecter `scanadmin.fr` à Vercel.
3. Améliorer la landing page mobile.
4. Ajouter une vraie capture de lead.
5. Tester le scan avec 5 PME.
