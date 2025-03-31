# cleancode

## Branches par Fonctionnalité

### 1. `feature/authentification`
- **Backend :**
    - Créer les endpoints d’inscription, connexion et déconnexion.
    - Implémenter les use cases pour :
        - Valider les informations d’inscription (longueur du mot de passe, unicité de l’email, etc.).
        - Générer et valider des tokens (JWT, par exemple).
        - Gérer la réinitialisation de mot de passe.
    - Mettre en place un middleware pour protéger les endpoints sensibles.

- **Frontend :**
    - Créer des formulaires pour l’inscription et la connexion.
    - Gérer l’état de l’authentification (stockage du token, redirection après connexion).
    - Afficher des messages d’erreur et de succès.

---

### 2. `feature/gestionMotos`
- **Backend :**
    - Implémenter un CRUD pour les motos :
        - **Create** : Ajouter une moto (enregistrer VIN, marque, modèle, etc.).
        - **Read** : Récupérer la liste complète et les détails d’une moto spécifique.
        - **Update** : Modifier les informations d’une moto.
        - **Delete** : Supprimer une moto.
    - Assurer le suivi du statut des motos (active, en maintenance, décommissionnée).

- **Frontend :**
    - Développer une interface pour afficher la liste des motos.
    - Créer une page de détail pour consulter et modifier une moto.
    - Fournir des formulaires pour ajouter ou supprimer une moto.

---

### 3. `feature/gestionMaintenance`
- **Backend :**
    - Développer des use cases pour :
        - Planifier les entretiens préventifs et curatifs.
        - Définir des intervalles d’entretien (ex. 10 000 km pour une Street Triple, annuel, etc.).
        - Envoyer des rappels automatiques à l’approche de l’échéance.
        - Enregistrer l’historique des entretiens et des pannes/garanties.
    - Créer les endpoints nécessaires pour accéder à ces fonctionnalités.

- **Frontend :**
    - Concevoir une interface de planification des entretiens.
    - Afficher l’historique des maintenances réalisées.
    - Mettre en place un système de notifications pour les entretiens à venir.

---

### 4. `feature/gestionStocks`
- **Backend :**
    - Implémenter un CRUD pour la gestion des pièces détachées :
        - **Create** : Ajouter de nouvelles pièces.
        - **Read** : Récupérer la liste des pièces et leurs niveaux de stock.
        - **Update** : Mettre à jour les informations ou quantités en stock.
        - **Delete** : Supprimer une pièce.
    - Détecter automatiquement les seuils critiques de stock et générer des alertes.
    - Enregistrer l’historique des commandes (coûts, délais, quantités restantes).

- **Frontend :**
    - Développer des tableaux de bord pour consulter et suivre le stock de pièces.
    - Créer des formulaires pour la gestion des commandes et la mise à jour des stocks.
    - Afficher des alertes en cas de stock bas.

---

### 5. `feature/suiviEssais`
- **Backend :**
    - Gérer les profils des conducteurs (informations, permis, expérience, historique de conduite).
    - Implémenter des use cases pour :
        - Affecter des motos aux conducteurs pour des essais.
        - Enregistrer et consulter l’historique des incidents (accidents, infractions, etc.).
    - Créer les endpoints associés.

- **Frontend :**
    - Concevoir une interface pour visualiser et gérer les profils des conducteurs.
    - Mettre en place des formulaires pour assigner des motos aux essais.
    - Afficher l’historique des incidents liés aux essais.

---

## Architecture et Organisation

- **Domain :**
    - Contient les entités, interfaces, agrégats, erreurs et value objects.
- **Application :**
    - Contient les use cases, DTOs et services.
- **Infrastructure :**
    - **Database :** Connexions (PostgreSQL, MongoDB).
    - **Repositories/Adapters :** Implémentations concrètes (Sequelize, etc.).
    - **Controllers/Routes :** Endpoints Express (pour l’instant, uniquement Express).
- **Frontend :**
    - Interfaces utilisateur (Next.js, React, etc.).
