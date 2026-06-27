# Prompts Codex — ScanAdmin

Ce fichier contient les prompts à utiliser pour faire avancer le projet sans perdre le contexte.

## Prompt 1 — Audit build

```txt
Tu travailles sur le repo ScanAdmin. Lis d'abord AGENTS.md, README.md, docs/PROJECT_STATE.md, docs/PRODUCT_VISION.md et docs/EXECUTION_PLAN.md.

Objectif : vérifier que le projet Next.js compile.

Actions :
1. Installe les dépendances.
2. Lance le typecheck.
3. Lance le build.
4. Corrige toutes les erreurs TypeScript ou Next.js.
5. Ne change pas le positionnement produit.
6. Ouvre une PR avec un résumé clair.
```

## Prompt 2 — Améliorer landing page

```txt
Tu travailles sur ScanAdmin, un scan IA administratif pour PME. Lis AGENTS.md et docs/PRODUCT_VISION.md.

Objectif : améliorer la landing page pour vendre plus clairement le produit.

Contraintes :
- rester simple ;
- parler aux dirigeants de PME ;
- mettre en avant le coût des tâches administratives ;
- éviter le jargon IA ;
- CTA principal : Lancer mon scan gratuit ;
- CTA secondaire : Demander une analyse personnalisée.
```

## Prompt 3 — Capture lead

```txt
Tu travailles sur ScanAdmin. Lis docs/EXECUTION_PLAN.md et docs/BACKLOG.md.

Objectif : remplacer le lien mailto par un vrai formulaire de demande d'analyse personnalisée.

Livrables :
- page /merci ;
- formulaire avec nom, entreprise, email, téléphone optionnel ;
- conservation des résultats du scan ;
- préparation pour future sauvegarde serveur ;
- message RGPD simple.
```

## Prompt 4 — Rapport PDF

```txt
Tu travailles sur ScanAdmin. Lis docs/CALCULATION_MODEL.md et docs/COMMERCIAL_STRATEGY.md.

Objectif : créer une première structure de rapport PDF ScanAdmin.

Le rapport doit contenir :
- résumé entreprise ;
- temps administratif perdu ;
- coût mensuel ;
- coût annuel ;
- top 3 tâches coûteuses ;
- top 3 agents recommandés ;
- avertissement : estimation non garantie ;
- proposition d'analyse personnalisée.
```

## Prompt 5 — SEO initial

```txt
Tu travailles sur ScanAdmin. Lis docs/COMMERCIAL_STRATEGY.md.

Objectif : créer les premières pages SEO ciblées.

Pages :
- /audit-ia-administratif-pme
- /calculateur-cout-administratif
- /agent-ia-devis
- /agent-ia-relance-client
- /automatisation-administrative-pme
- /scan-ia-pme

Chaque page doit rester concrète, orientée PME et éviter le jargon.
```
