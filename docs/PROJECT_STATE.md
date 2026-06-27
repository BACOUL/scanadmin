# Project State — ScanAdmin

## État actuel

Le projet est en phase d'initialisation MVP.

Le repo contient déjà :

- documentation produit ;
- modèle de calcul des pertes administratives ;
- catalogue initial des agents IA ;
- structure Next.js ;
- landing page ;
- page de scan ;
- page résultat ;
- composants de résultat ;
- formulaire de scan côté client.

## Branche de travail initiale

La première branche de travail est :

```txt
init-mvp
```

Une fois la PR initiale mergée dans `main`, cette branche devient l'historique de départ du projet.

## Produit visé

ScanAdmin doit devenir un outil web simple qui permet à une PME de :

1. faire un scan rapide de ses tâches administratives ;
2. connaître le temps perdu par mois ;
3. connaître le coût mensuel et annuel estimé ;
4. voir le temps récupérable avec agents IA supervisés ;
5. recevoir les 3 agents IA recommandés ;
6. demander une analyse personnalisée.

## Domaine cible

Nom de marque : ScanAdmin.

Domaine cible : `scanadmin.fr` si réservé par Jeason.

## Statut fonctionnel V1

Fonctionnalités déjà prévues ou amorcées :

- `/` : landing page.
- `/scan` : formulaire de scan.
- `/result` : résultat du scan depuis localStorage.
- `lib/calculations.ts` : calcul du temps et du coût administratif.
- `lib/agents.ts` : catalogue des agents IA.

## Ce qu'il reste à faire immédiatement

1. Vérifier que `npm install` fonctionne.
2. Vérifier que `npm run build` passe.
3. Corriger les erreurs TypeScript éventuelles.
4. Améliorer le design mobile.
5. Ajouter les métadonnées SEO.
6. Ajouter une vraie capture de lead.
7. Connecter Vercel.
8. Connecter le domaine.

## Décision stratégique

Le projet ne doit pas être vendu comme une agence IA généraliste. Le bon angle est :

> mesurer d'abord les pertes de temps administratives, puis recommander les agents IA vraiment rentables.
