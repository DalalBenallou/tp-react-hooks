# TP React Hooks - Application de Gestion de Produits

## Exercice 1: Recherche en temps réel

### Objectif :
L'objectif de cet exercice était d'implémenter une fonctionnalité de recherche en temps réel. Quand un utilisateur tape un terme dans la barre de recherche, la liste des produits doit se filtrer pour ne montrer que ceux qui correspondent à ce terme.

### Solution :
- **Filtrage en temps réel** : J'ai utilisé le hook `useState` pour maintenir l'état du terme de recherche, et j'ai utilisé `useEffect` pour filtrer les produits en fonction de ce terme.
- **Débounce** : Pour éviter d'effectuer une recherche à chaque frappe, j'ai implémenté un **debounce** (délai d'attente) afin de ne lancer la recherche qu'après un certain temps d'inactivité de l'utilisateur (ce qui réduit les requêtes inutiles).
- **Affichage dynamique** : Le filtrage des produits est effectué sur le titre des produits et l'affichage est mis à jour en temps réel sans avoir besoin de recharger la page.

### Fonctionnement :
1. L'utilisateur tape un texte dans la barre de recherche.
2. Le filtre est appliqué en temps réel sur les produits dont le titre correspond au texte saisi.
3. Les produits sont affichés dynamiquement sur la page.

### Capture d'écran avant la recherche :
![Avant la recherche](./assets/before.png)

### Capture d'écran après avoir saisi un terme de recherche :
![Après la recherche](./assets/after.png)


