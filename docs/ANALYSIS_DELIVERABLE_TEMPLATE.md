# ScanAdmin — modèle de livrable d’analyse personnalisée

## Usage

Ce document sert de modèle interne pour produire chaque analyse personnalisée ScanAdmin après paiement confirmé.

Règles :

- ne pas promettre de gain garanti ;
- ne pas recommander d’automatisation totale ;
- garder la formulation : `l’IA prépare, l’humain valide` ;
- toujours distinguer estimation, hypothèse et recommandation ;
- ne jamais demander ou inclure de données sensibles inutiles ;
- livrer une décision claire, pas un rapport décoratif.

---

# Analyse personnalisée ScanAdmin

## 1. Informations générales

| Élément | Valeur |
|---|---|
| Client | [Nom entreprise] |
| Contact | [Prénom Nom] |
| Email | [Email] |
| Secteur | [Secteur] |
| Date de commande | [Date paiement] |
| Date de livraison | [Date livraison] |
| Offre | Analyse personnalisée ScanAdmin — lancement 200 € |
| Référence lead | [leadId] |
| Référence paiement | [session Stripe / paiement] |

---

## 2. Résumé dirigeant

### Conclusion courte

[En 5 à 8 lignes maximum, expliquer la situation principale. Exemple :]

L’entreprise consacre une part significative de son temps administratif à des tâches répétitives liées à [tâche 1], [tâche 2] et [tâche 3]. Le scan indique un volume mensuel estimé de [X] heures, pour un coût théorique de [X] € par mois. Les tâches les plus pertinentes à traiter en premier sont celles qui combinent répétition, volume suffisant et validation humaine simple.

La recommandation ScanAdmin est de commencer par [tâche prioritaire], avec un agent IA supervisé de type [agent recommandé]. L’objectif n’est pas d’automatiser toute l’activité, mais de tester un cas simple et mesurable sur 7 à 14 jours.

### Décision recommandée

```txt
Priorité n°1 : [tâche prioritaire]
Agent recommandé : [agent IA]
Niveau de risque : [faible / moyen / élevé]
Test conseillé : [7 / 10 / 14 jours]
Validation humaine : obligatoire avant toute utilisation externe
```

---

## 3. Contexte de l’entreprise

### Activité

- Secteur : [secteur]
- Taille approximative : [nombre salariés si connu]
- Organisation administrative : [dirigeant / assistante / équipe / prestataire]
- Outils utilisés : [email, tableur, logiciel devis, CRM, comptabilité, etc.]

### Problème déclaré

[Reprendre le besoin exprimé par le client.]

Exemple :

Le client indique perdre du temps sur [devis / relances / documents / factures / reporting]. Le besoin principal est de [gagner du temps / réduire les oublis / mieux organiser les demandes / préparer plus vite les réponses].

---

## 4. Résultat du scan

| Indicateur | Résultat estimé |
|---|---:|
| Temps administratif répétitif estimé | [X] h / mois |
| Coût mensuel estimé | [X] € / mois |
| Coût annuel estimé | [X] € / an |
| Temps potentiellement récupérable | [X à Y] h / mois |
| Coût horaire utilisé | [X] € / h |

### Lecture du résultat

Ces chiffres sont des estimations issues des réponses au scan. Ils servent à identifier les ordres de grandeur et les priorités, pas à garantir un gain réel.

Le gain réel dépendra de :

- la qualité des informations fournies ;
- le niveau réel de répétition ;
- la standardisation des tâches ;
- le temps nécessaire à la relecture humaine ;
- les outils déjà utilisés ;
- la capacité à tester sur un périmètre limité.

---

## 5. Vérification de cohérence

### Points cohérents

- [Point cohérent 1]
- [Point cohérent 2]
- [Point cohérent 3]

### Points à confirmer

- [Point à confirmer 1]
- [Point à confirmer 2]
- [Point à confirmer 3]

### Interprétation

[Expliquer si le volume semble suffisant pour justifier un test IA.]

Exemple :

Le volume déclaré semble suffisant pour justifier un test court, surtout sur les tâches qui se répètent chaque semaine. En revanche, les tâches à fort enjeu commercial ou comptable doivent rester supervisées et ne doivent pas être automatisées seules.

---

## 6. Top 3 tâches administratives à traiter

| Priorité | Tâche | Volume estimé | Pourquoi c’est prioritaire |
|---:|---|---:|---|
| 1 | [Tâche 1] | [X] h / mois | [raison] |
| 2 | [Tâche 2] | [X] h / mois | [raison] |
| 3 | [Tâche 3] | [X] h / mois | [raison] |

### Analyse des priorités

#### Priorité 1 — [Tâche]

- Fréquence : [faible / moyenne / élevée]
- Valeur temps : [faible / moyenne / élevée]
- Niveau de risque : [faible / moyen / élevé]
- Facilité de contrôle humain : [faible / moyenne / élevée]
- Recommandation : [tester / analyser davantage / éviter au départ]

#### Priorité 2 — [Tâche]

- Fréquence : [faible / moyenne / élevée]
- Valeur temps : [faible / moyenne / élevée]
- Niveau de risque : [faible / moyen / élevé]
- Facilité de contrôle humain : [faible / moyenne / élevée]
- Recommandation : [tester / analyser davantage / éviter au départ]

#### Priorité 3 — [Tâche]

- Fréquence : [faible / moyenne / élevée]
- Valeur temps : [faible / moyenne / élevée]
- Niveau de risque : [faible / moyen / élevé]
- Facilité de contrôle humain : [faible / moyenne / élevée]
- Recommandation : [tester / analyser davantage / éviter au départ]

---

## 7. Matrice de décision

| Tâche | Coût estimé | Répétition | Risque | Contrôle humain | Décision |
|---|---|---|---|---|---|
| [Tâche 1] | [faible/moyen/élevé] | [faible/moyenne/élevée] | [faible/moyen/élevé] | [faible/moyen/élevé] | [tester en premier] |
| [Tâche 2] | [faible/moyen/élevé] | [faible/moyenne/élevée] | [faible/moyen/élevé] | [faible/moyen/élevé] | [tester ensuite] |
| [Tâche 3] | [faible/moyen/élevé] | [faible/moyenne/élevée] | [faible/moyen/élevé] | [faible/moyen/élevé] | [à surveiller] |
| [Tâche 4] | [faible/moyen/élevé] | [faible/moyenne/élevée] | [faible/moyen/élevé] | [faible/moyen/élevé] | [non prioritaire] |

### Règle de décision

Un bon premier cas d’usage IA doit être :

```txt
fréquent
+ assez coûteux en temps
+ répétitif
+ facilement vérifiable par un humain
+ peu dangereux si l’IA se trompe
```

---

## 8. Agent IA recommandé

### Agent recommandé

```txt
Nom : [Agent IA devis / relance / documents / factures / reporting / dossiers clients / planning]
Rôle : [rôle court]
Tâche prioritaire associée : [tâche]
Niveau de supervision : [faible / moyen / élevé]
```

### Pourquoi cet agent

[Expliquer pourquoi cet agent est le meilleur premier test.]

Exemple :

Cet agent est recommandé car la tâche est fréquente, répétitive et suffisamment structurée pour être préparée par IA. Le risque reste maîtrisable si l’humain valide chaque sortie avant utilisation externe.

### Ce que l’agent peut faire

- [Action possible 1]
- [Action possible 2]
- [Action possible 3]
- [Action possible 4]

### Ce que l’agent ne doit pas faire

- Ne pas envoyer seul un message client.
- Ne pas fixer seul un prix.
- Ne pas valider seul une facture.
- Ne pas prendre une décision commerciale ou contractuelle.
- Ne pas modifier une information sensible sans validation.

### Validation humaine obligatoire

La validation humaine doit porter sur :

- exactitude des informations ;
- cohérence avec le contexte client ;
- ton du message ;
- prix, montant, engagement ou échéance ;
- risque d’erreur ou d’oubli ;
- données confidentielles.

---

## 9. Plan de test recommandé — 7 à 14 jours

### Objectif du test

Tester l’agent IA sur un périmètre limité pour vérifier si le gain de temps est réel après relecture humaine.

### Périmètre du test

- Tâche testée : [tâche]
- Durée : [7 / 10 / 14 jours]
- Volume test : [X cas]
- Personne responsable : [nom / rôle]
- Validation finale : [nom / rôle]

### Déroulé

| Période | Action |
|---|---|
| Jour 1 | Sélectionner les exemples ou tâches à tester. |
| Jours 2 à 3 | Préparer le prompt, les règles et les limites. |
| Jours 4 à 7 | Tester l’agent sur des cas réels ou semi-réels. |
| Jours 8 à 10 | Mesurer le temps gagné et les corrections nécessaires. |
| Jours 11 à 14 | Décider si le test doit être prolongé, modifié ou arrêté. |

### Indicateurs à mesurer

| Indicateur | Cible |
|---|---|
| Temps moyen avant IA | [X] minutes |
| Temps moyen avec IA + relecture | [X] minutes |
| Taux de corrections nécessaires | [X] % |
| Erreurs bloquantes | [0 / faible / moyen] |
| Satisfaction utilisateur | [faible / moyenne / élevée] |

### Décision après test

À la fin du test, choisir une décision :

```txt
continuer
modifier le périmètre
changer d’agent
arrêter car le gain réel est insuffisant
```

---

## 10. Risques et limites

### Limites du scan

- Les résultats sont basés sur des déclarations.
- Les volumes peuvent être sous-estimés ou surestimés.
- Le coût horaire utilisé influence fortement le résultat.
- Le gain récupérable reste théorique avant test réel.

### Limites de l’IA

- L’IA peut produire une réponse fausse ou incomplète.
- L’IA peut mal comprendre le contexte.
- L’IA peut oublier une contrainte métier.
- L’IA ne doit pas prendre seule une décision sensible.

### Cas à éviter au départ

- Décision commerciale complexe.
- Facture ou montant non vérifié.
- Donnée confidentielle inutile.
- Réponse client envoyée sans relecture.
- Processus instable ou mal documenté.

---

## 11. Recommandations finales

### À faire maintenant

1. [Action immédiate 1]
2. [Action immédiate 2]
3. [Action immédiate 3]

### À éviter maintenant

1. [Erreur à éviter 1]
2. [Erreur à éviter 2]
3. [Erreur à éviter 3]

### Prochaine meilleure action

[Une phrase claire.]

Exemple :

La meilleure prochaine action est de tester un agent IA supervisé sur [tâche] pendant [durée], avec validation systématique par [rôle/personne], puis de comparer le temps réellement gagné avant de décider d’aller plus loin.

---

## 12. Conclusion

L’analyse ScanAdmin indique que le meilleur premier levier n’est pas d’automatiser toute l’organisation, mais de tester un cas d’usage limité, fréquent et vérifiable.

Le cas prioritaire recommandé est :

```txt
[Tâche prioritaire]
```

avec un agent IA de type :

```txt
[Agent recommandé]
```

Le test doit rester supervisé. L’objectif est de mesurer un gain réel, pas de déléguer une décision sensible à l’IA.

---

# Annexe — checklist qualité avant livraison

Avant d’envoyer l’analyse au client, vérifier :

- [ ] Le nom de l’entreprise est correct.
- [ ] Le secteur est cohérent.
- [ ] Les chiffres du scan sont repris correctement.
- [ ] Les limites sont bien mentionnées.
- [ ] La priorité recommandée est justifiée.
- [ ] L’agent IA recommandé est cohérent avec la tâche.
- [ ] Le plan de test est concret.
- [ ] Le document ne promet aucun gain garanti.
- [ ] Le document rappelle que l’humain valide.
- [ ] Les données sensibles inutiles ont été supprimées.
- [ ] La conclusion est claire et actionnable.
