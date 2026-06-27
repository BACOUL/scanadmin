# Modèle de calcul — ScanAdmin

## Principe général

Le MVP utilise un modèle simple :

```txt
Temps mensuel perdu = volume de tâches × temps moyen × fréquence mensuelle
Coût mensuel = temps mensuel perdu × coût horaire
Coût annuel = coût mensuel × 12
Temps récupérable bas = temps perdu × taux bas d'automatisation
Temps récupérable haut = temps perdu × taux haut d'automatisation
```

## Fréquences

- Jour ouvré vers mois : × 20.
- Semaine vers mois : × 4.33.
- Mois : × 1.

## Taux d'automatisation par tâche

| Tâche | Bas | Haut |
|---|---:|---:|
| Mails | 30 % | 50 % |
| Devis | 35 % | 60 % |
| Relances | 50 % | 70 % |
| Factures | 25 % | 45 % |
| Documents | 40 % | 60 % |
| Dossiers clients | 30 % | 50 % |
| Planning | 25 % | 45 % |
| Reporting | 40 % | 65 % |

## Règle de recommandation

Les agents IA sont recommandés selon les tâches qui génèrent le plus de temps récupérable estimé.

## Prudence commerciale

Les résultats doivent être présentés comme des estimations. Ne jamais garantir un gain réel sans audit personnalisé.
