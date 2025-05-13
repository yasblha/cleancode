# 🧼 CleanCode — Gestion de flotte de motos

## 🛠️ Objectif

Plateforme de gestion complète d’un parc de motos incluant :
- Authentification sécurisée
- Suivi des véhicules (état, historique, essais)
- Gestion des maintenances
- Suivi des stocks de pièces
- Affectation des essais à des conducteurs
- Architecture modulaire Clean Code

---

## 🌱 Stack Technique

| Backend                   | Frontend        | Base de données      | DevOps & Architecture      |
|---------------------------|-----------------|----------------------|----------------------------|
| Node.js (Express, NestJS) | React / Next.js | PostgreSQL / MongoDB | Clean Architecture, Docker |

---

## 🌿 Arborescence Clean Code

```
cleancode/
├── application/
│   ├── services/
│   └── usecases/
├── domain/
│   ├── entities/
│   ├── errors/
│   ├── repositories/
│   └── value-objects/
├── infrastructure/
│   ├── Mongo/
│   ├── sequelize/
│   └── plateforms/
│       ├── Backend/
│       │   ├── express/
│       │   └── nestjs/
│       └── Frontend/
│           └── frontreact/
```

---

##  Branches par Fonctionnalité

### 🔐 feature/authentification

#### Backend
- Endpoints : inscription, connexion, déconnexion
- Validation email, sécurité mot de passe, JWT
- Middleware de protection des routes
- Réinitialisation du mot de passe

#### Frontend
- Formulaires d’inscription et connexion
- Gestion de session, redirection
- Feedback utilisateur

---

### 🏍️ feature/gestionMotos

#### Backend
- CRUD moto : VIN, marque, modèle, état
- Statuts : active, maintenance, retirée

#### Frontend
- Liste, fiche, formulaire d'ajout/modification/suppression moto

---

### 🔧 feature/gestionMaintenance

#### Backend
- Entretien préventif/curatif
- Intervalles personnalisés
- Rappels automatiques
- Historique des interventions

#### Frontend
- Planification des maintenances
- Historique
- Notifications d’échéance

---

### 🧩 feature/gestionStocks

#### Backend
- CRUD pièces détachées
- Alertes de seuil critique
- Suivi des commandes (coût, stock, délais)

#### Frontend
- Tableaux de bord stock
- Formulaire de commande/édition
- Alertes visuelles

---

### 🧪 feature/suiviEssais

#### Backend
- Profils des conducteurs (permis, historique)
- Affectation moto/essai
- Historique incidents

#### Frontend
- Interface profils conducteurs
- Formulaires d’affectation
- Visualisation des essais

---

## 🧭 Architecture Technique

| Couche         | Rôle                                                   |
|----------------|--------------------------------------------------------|
| Domain         | Entités, interfaces, erreurs, value-objects            |
| Application    | UseCases, Services, DTOs                               |
| Infrastructure | DB, Repositories, Adapters, Routes, External services  |
| Frontend       | Vue client (Next.js, React)                            |

---

## 🧠 Convention Git

### 📝 Commits

```
Feature: feature/(nom) : sujet
Fix: fix/(issue) : correction
Docs: docs/(issue) : mise à jour documentation
```

### 🌿 Branches

```
feature/{nom}
fix/{nom}
docs/{nom}
```

### 🔀 Merge Requests

- Toujours vers `develop`
- Review obligatoire par un autre dev

---

## 👨‍💻 Auteurs

| Nom                    | GitHub                                   | Rôle / Fonctionnalité                     |
|------------------------|------------------------------------------|-------------------------------------------|
| Yassine BOULAHNINE     | [@yasblha](https://github.com/yasblha)   | Backend CleanCode, Architecture, Auth, Motos |
|                        | [@yasblha](https://github.com/yasblha)   | Frontend gestion essais / maintenance     |
|                        | [@yasblha](https://github.com/yasblha)   | Stock pièces, back + front                |

---

## 📃 Licence

Projet développé dans un objectif de démonstration pédagogique.  
Utilisation libre à condition de mentionner les auteurs.
