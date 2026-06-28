# ScanAdmin — exemple de livrable rempli

## Avertissement

Ce document est un exemple fictif.

Il ne correspond à aucun client réel et sert uniquement à montrer le type de livrable qu’un client peut recevoir après paiement d’une analyse personnalisée ScanAdmin.

---

# Analyse personnalisée ScanAdmin

## 1. Informations générales

| Élément | Valeur |
|---|---|
| Client | Bâti Nord Services |
| Contact | Marc Lemaire |
| Email | marc.lemaire@example.com |
| Secteur | BTP / rénovation second œuvre |
| Date de commande | Exemple fictif |
| Date de livraison | Exemple fictif |
| Offre | Analyse personnalisée ScanAdmin — lancement 200 € |
| Référence lead | lead_exemple_btp |
| Référence paiement | session_stripe_exemple |

---

## 2. Résumé dirigeant

### Conclusion courte

Bâti Nord Services consacre une part importante de son temps administratif à la préparation de devis, aux relances clients et à la centralisation de documents chantier. Le scan indique un volume mensuel estimé de 46 heures, pour un coût théorique de 1 380 € par mois sur la base d’un coût horaire indicatif de 30 €.

La tâche la plus pertinente à traiter en premier est la préparation de devis simples à partir de demandes entrantes structurées. Cette tâche est fréquente, coûteuse en temps et peut être préparée par IA sans que l’IA ne valide seule le prix ou l’engagement commercial.

La recommandation ScanAdmin est de commencer par un agent IA supervisé de préparation de devis. L’objectif n’est pas d’automatiser la vente, mais de préparer une première version relue et corrigée par l’humain.

### Décision recommandée

```txt
Priorité n°1 : préparation de devis simples
Agent recommandé : agent IA devis supervisé
Niveau de risque : moyen
Test conseillé : 14 jours
Validation humaine : obligatoire avant envoi client
```

---

## 3. Contexte de l’entreprise

### Activité

- Secteur : BTP / rénovation second œuvre.
- Taille approximative : 6 personnes.
- Organisation administrative : dirigeant + assistante à temps partiel.
- Outils utilisés : email, téléphone, tableur, modèle Word de devis, logiciel de facturation.

### Problème déclaré

Le dirigeant indique perdre du temps à transformer les demandes clients en premiers devis, à relancer les prospects et à rassembler les informations nécessaires avant intervention.

Le besoin principal est de réduire le temps passé sur les tâches répétitives sans perdre le contrôle sur les prix, les engagements et la relation client.

---

## 4. Résultat du scan

| Indicateur | Résultat estimé |
|---|---:|
| Temps administratif répétitif estimé | 46 h / mois |
| Coût mensuel estimé | 1 380 € / mois |
| Coût annuel estimé | 16 560 € / an |
| Temps potentiellement récupérable | 10 à 16 h / mois |
| Coût horaire utilisé | 30 € / h |

### Lecture du résultat

Ces chiffres sont des estimations issues des réponses au scan. Ils servent à identifier les ordres de grandeur et les priorités, pas à garantir un gain réel.

Le volume déclaré est suffisant pour justifier un test court sur une tâche ciblée. En revanche, l’entreprise ne doit pas démarrer par une automatisation complète des devis ou des réponses clients, car les prix, conditions et délais doivent rester validés par une personne compétente.

---

## 5. Vérification de cohérence

### Points cohérents

- Le volume de devis est régulier et répétitif.
- Les demandes clients suivent souvent les mêmes informations : type de travaux, surface, délai souhaité, adresse, photos éventuelles.
- Le coût administratif devient significatif si le dirigeant passe lui-même beaucoup de temps sur la préparation.
- La validation humaine est simple à organiser : le dirigeant ou l’assistante peut relire chaque devis préparé.

### Points à confirmer

- Le nombre exact de demandes entrantes par semaine.
- Le temps moyen réellement passé sur un devis simple.
- Les cas à exclure du test : gros chantier, demande complexe, client professionnel, prix incertain.
- La qualité des modèles de devis existants.

### Interprétation

Le cas semble suffisamment structuré pour tester un agent IA supervisé. Le test doit porter uniquement sur des devis simples, répétitifs et relus avant envoi. Les devis complexes doivent rester hors périmètre au départ.

---

## 6. Top 3 tâches administratives à traiter

| Priorité | Tâche | Volume estimé | Pourquoi c’est prioritaire |
|---:|---|---:|---|
| 1 | Préparation de devis simples | 18 h / mois | Tâche fréquente, coûteuse, partiellement standardisable. |
| 2 | Relances prospects | 10 h / mois | Répétitif, facile à préparer par IA, mais ton commercial à valider. |
| 3 | Centralisation documents chantier | 8 h / mois | Utile, mais dépend de la discipline interne et des outils existants. |

### Priorité 1 — Préparation de devis simples

- Fréquence : élevée.
- Valeur temps : élevée.
- Niveau de risque : moyen.
- Facilité de contrôle humain : élevée.
- Recommandation : tester en premier.

### Priorité 2 — Relances prospects

- Fréquence : moyenne.
- Valeur temps : moyenne.
- Niveau de risque : moyen.
- Facilité de contrôle humain : élevée.
- Recommandation : tester ensuite, après le devis.

### Priorité 3 — Centralisation documents chantier

- Fréquence : moyenne.
- Valeur temps : moyenne.
- Niveau de risque : faible à moyen.
- Facilité de contrôle humain : moyenne.
- Recommandation : utile, mais moins prioritaire que les devis.

---

## 7. Matrice de décision

| Tâche | Coût estimé | Répétition | Risque | Contrôle humain | Décision |
|---|---|---|---|---|---|
| Préparation de devis simples | élevé | élevée | moyen | élevé | tester en premier |
| Relances prospects | moyen | élevée | moyen | élevé | tester ensuite |
| Documents chantier | moyen | moyenne | faible/moyen | moyen | à cadrer |
| Factures et règlements | moyen | moyenne | élevé | élevé | éviter au départ |

### Règle appliquée

Un bon premier cas d’usage IA doit être fréquent, répétitif, assez coûteux en temps et facilement vérifiable par un humain.

La préparation de devis simples correspond mieux à cette règle que la facturation ou les décisions de prix.

---

## 8. Agent IA recommandé

### Agent recommandé

```txt
Nom : Agent IA devis supervisé
Rôle : préparer une première version de devis simple à partir d’une demande client structurée
Tâche prioritaire associée : préparation de devis simples
Niveau de supervision : élevé
```

### Pourquoi cet agent

Cet agent est recommandé car la tâche est répétitive et suit souvent le même schéma. L’IA peut aider à transformer une demande client en brouillon structuré : résumé du besoin, questions manquantes, éléments du devis, message de réponse.

Le risque reste maîtrisable si l’humain valide chaque information avant envoi : prix, délais, conditions, matériaux, disponibilité et engagement commercial.

### Ce que l’agent peut faire

- Résumer une demande client.
- Identifier les informations manquantes.
- Préparer une trame de devis simple.
- Préparer un email de réponse au client.
- Classer les demandes selon urgence ou complexité.

### Ce que l’agent ne doit pas faire

- Ne pas envoyer seul un devis.
- Ne pas fixer seul un prix.
- Ne pas promettre un délai d’intervention.
- Ne pas accepter un chantier.
- Ne pas modifier une condition commerciale sans validation.

### Validation humaine obligatoire

La validation humaine doit porter sur :

- exactitude des travaux demandés ;
- prix ;
- TVA ;
- délai ;
- disponibilité ;
- marge ;
- ton du message ;
- mentions obligatoires du devis.

---

## 9. Plan de test recommandé — 14 jours

### Objectif du test

Vérifier si un agent IA supervisé réduit réellement le temps de préparation des devis simples après relecture humaine.

### Périmètre du test

- Tâche testée : devis simples de rénovation intérieure.
- Durée : 14 jours.
- Volume test : 10 à 15 demandes.
- Personne responsable : dirigeant.
- Validation finale : dirigeant ou assistante formée.

### Déroulé

| Période | Action |
|---|---|
| Jour 1 | Sélectionner 5 anciens devis simples et identifier leur structure commune. |
| Jours 2 à 3 | Préparer une trame IA : informations nécessaires, exclusions, règles de ton. |
| Jours 4 à 10 | Tester l’agent sur les nouvelles demandes simples uniquement. |
| Jours 11 à 12 | Mesurer le temps avant / après et noter les corrections. |
| Jours 13 à 14 | Décider si le test doit être prolongé, modifié ou arrêté. |

### Indicateurs à mesurer

| Indicateur | Cible |
|---|---|
| Temps moyen avant IA | 35 à 45 minutes par devis simple |
| Temps moyen avec IA + relecture | 20 à 30 minutes |
| Taux de corrections nécessaires | inférieur à 30 % |
| Erreurs bloquantes | 0 |
| Satisfaction utilisateur | moyenne à élevée |

### Décision après test

À la fin du test, choisir une décision :

```txt
continuer si le gain réel dépasse 20 %
modifier si le gain existe mais les corrections sont trop nombreuses
arrêter si le temps de relecture annule le gain
```

---

## 10. Risques et limites

### Limites du scan

- Les résultats sont basés sur des déclarations.
- Les volumes peuvent être sous-estimés ou surestimés.
- Le coût horaire utilisé influence fortement le résultat.
- Le gain récupérable reste théorique avant test réel.

### Limites de l’IA

- L’IA peut oublier une contrainte chantier.
- L’IA peut mal interpréter une demande client.
- L’IA peut proposer une formulation trop engageante.
- L’IA ne connaît pas les marges, disponibilités ou contraintes réelles si elles ne sont pas fournies.

### Cas à éviter au départ

- Gros chantier complexe.
- Devis avec prix incertain.
- Demande nécessitant visite technique.
- Client à enjeu élevé.
- Litige ou réclamation.
- Facturation ou décision de remboursement.

---

## 11. Recommandations finales

### À faire maintenant

1. Créer une liste de devis simples éligibles au test.
2. Définir les cas exclus du test.
3. Préparer une trame standard de demande client.
4. Mesurer le temps réel sur 10 devis avant de généraliser.
5. Garder une validation humaine systématique avant envoi.

### À éviter maintenant

1. Automatiser l’envoi des devis.
2. Laisser l’IA décider des prix.
3. Tester sur des dossiers complexes.
4. Mélanger devis, factures et relances dans le même premier test.
5. Promettre un gain sans mesure réelle.

### Prochaine meilleure action

La meilleure prochaine action est de tester un agent IA supervisé sur la préparation de devis simples pendant 14 jours, avec validation systématique par le dirigeant, puis de comparer le temps réellement gagné avant de décider d’aller plus loin.

---

## 12. Conclusion

L’analyse ScanAdmin indique que le meilleur premier levier n’est pas d’automatiser toute l’organisation administrative, mais de tester un cas d’usage limité, fréquent et vérifiable.

Le cas prioritaire recommandé est :

```txt
préparation de devis simples
```

avec un agent IA de type :

```txt
agent IA devis supervisé
```

Le test doit rester supervisé. L’objectif est de mesurer un gain réel, pas de déléguer une décision sensible à l’IA.

---

# Annexe — checklist qualité avant livraison

- [x] Le nom de l’entreprise est fictif.
- [x] Le secteur est cohérent.
- [x] Les chiffres du scan sont repris correctement.
- [x] Les limites sont bien mentionnées.
- [x] La priorité recommandée est justifiée.
- [x] L’agent IA recommandé est cohérent avec la tâche.
- [x] Le plan de test est concret.
- [x] Le document ne promet aucun gain garanti.
- [x] Le document rappelle que l’humain valide.
- [x] Les données sensibles inutiles ont été supprimées.
- [x] La conclusion est claire et actionnable.
