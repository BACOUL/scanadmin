# Instructions pour assistant IA / Codex — ScanAdmin

Ce fichier est la mémoire opérationnelle du projet. Avant toute modification, lire dans l'ordre :

1. `README.md`
2. `docs/PROJECT_STATE.md`
3. `docs/PRODUCT_VISION.md`
4. `docs/EXECUTION_PLAN.md`
5. `docs/CALCULATION_MODEL.md`
6. `docs/AGENTS_CATALOG.md`
7. `docs/BACKLOG.md`

## Objectif du projet

Construire ScanAdmin, un produit web qui permet à une PME de calculer combien ses tâches administratives répétitives lui coûtent chaque mois, puis de recommander les agents IA supervisés les plus rentables à mettre en place.

## Règle produit principale

Ne jamais vendre de l'IA abstraite. Toujours partir de la perte administrative : temps perdu, coût mensuel, coût annuel, tâches prioritaires, agents IA recommandés.

## Promesse officielle

Découvrez combien vos tâches administratives répétitives vous coûtent chaque mois, et quels agents IA peuvent vous faire gagner du temps et de l'argent.

## Ton UX et commercial

- Français simple.
- PME terrain.
- Pas de jargon IA inutile.
- Toujours parler de mails, devis, relances, factures, documents, dossiers clients, planning et reporting.
- Toujours préciser que les gains sont des estimations.
- Toujours préciser que les agents sont supervisés : l'IA prépare, l'humain valide.

## Architecture cible

- Next.js App Router.
- TypeScript.
- Vercel.
- Calculs côté client en V1.
- Capture lead en V2.
- Paiement et rapport PDF en V3.
- Agents IA supervisés réutilisables en V4.

## Ce qu'il ne faut pas faire au début

- Ne pas créer un SaaS lourd trop tôt.
- Ne pas créer de comptes utilisateurs en V1.
- Ne pas promettre un ROI garanti.
- Ne pas dire que les agents sont autonomes à 100 %.
- Ne pas intégrer 50 outils avant validation commerciale.

## Priorité absolue

Créer une V1 simple et vendable :

Accueil → Scan → Résultat → Agents recommandés → Demande d'analyse personnalisée.
