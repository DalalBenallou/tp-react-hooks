## Exercice 1: Recherche en temps réel

### Objectif :
Dans cet exercice, l'objectif était d'implémenter une fonctionnalité de recherche en temps réel pour filtrer les produits en fonction du texte saisi dans la barre de recherche.

### Solution :
J'ai utilisé le hook `useState` pour stocker le terme de recherche et `useEffect` pour mettre à jour les résultats en temps réel. Le filtrage est effectué sur le titre des produits en fonction du texte saisi. J'ai également implémenté un **debounce** pour éviter des requêtes multiples inutiles lors de la saisie rapide du terme de recherche.

### Fonctionnement :
1. L'utilisateur tape un terme de recherche dans la barre de recherche.
2. Les produits sont filtrés en temps réel en fonction du texte saisi.
3. Le filtre est appliqué sur le titre des produits.

### Capture d'écran avant la recherche :
![Avant la recherche](./assets/before.png)

### Capture d'écran après avoir saisi "chaise" dans la barre de recherche :
![Après la recherche](./assets/after.png)

### Difficultés rencontrées et solutions :
- **Problème de performance** : Lors de la saisie rapide, l'application envoyait trop de requêtes. J'ai résolu cela en utilisant un debounce pour attendre que l'utilisateur cesse de taper avant de filtrer les résultats.