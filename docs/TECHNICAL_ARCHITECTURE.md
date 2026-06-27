# Architecture technique — ScanAdmin

## Stack actuelle

- Next.js App Router.
- TypeScript.
- React.
- CSS simple global.
- Calculs côté client pour V1.
- Stockage temporaire dans localStorage pour afficher le résultat.

## Structure actuelle

```txt
app/
  page.tsx
  scan/page.tsx
  result/page.tsx
  layout.tsx
  globals.css
components/
  ScanForm.tsx
  ResultCard.tsx
  AgentRecommendation.tsx
lib/
  calculations.ts
  agents.ts
docs/
  documentation projet
```

## Pages

### `/`

Landing page commerciale.

Objectif : expliquer la promesse et envoyer vers le scan.

### `/scan`

Formulaire de scan.

Objectif : collecter les volumes de tâches administratives.

### `/result`

Page résultat.

Objectif : afficher le temps perdu, le coût estimé, le temps récupérable et les agents recommandés.

## Calculs

Le modèle de calcul se trouve dans :

```txt
lib/calculations.ts
```

Le catalogue des agents se trouve dans :

```txt
lib/agents.ts
```

## Limites V1

- Pas de base de données.
- Pas de compte utilisateur.
- Pas de formulaire serveur.
- Pas d'email automatique.
- Pas de paiement.
- Pas de génération PDF.

## Architecture cible V2

Ajouter :

- formulaire serveur ;
- stockage des résultats ;
- notification email ;
- page merci ;
- RGPD simple ;
- analytics.

## Architecture cible V3

Ajouter :

- génération rapport PDF ;
- paiement Stripe ;
- prise de rendez-vous ;
- emails transactionnels.

## Architecture cible SaaS

Plus tard seulement :

- authentification ;
- espace client ;
- historique des scans ;
- rapports sauvegardés ;
- espace admin ;
- catalogue d'agents activables.
