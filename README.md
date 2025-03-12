# Projet de gestion de la facturation de l'eau

Application complète basée sur une architecture en microservices pour gérer les contrats, la facturation, les opérations techniques, les affaires et les workflows associés à la gestion de l'eau.

## 🚀 Lancer le projet avec Docker Compose

```bash
docker compose up -d --build
```

## 📌 Fonctionnalités principales :

### 🔐 Authentification et Gestion des habilitations

- **Authentification sécurisée :** JWT, MFA, SSO.
- **Gestion fine des utilisateurs internes :** rôles granulaires (administrateur, technicien, chargé clientèle).
- **Logs détaillés des actions utilisateurs.**
- **Conformité RGPD :** gestion des consentements, anonymisation, droit à l'oubli.

### 📑 Gestion des Contrats

- **Gestion des contrats multi-types :** résidentiels, commerciaux, industriels, agricoles.
- **Cycle de vie des contrats :** création, validation, activation, modification, suspension, résiliation.
- **Gestion des cosignataires multiples :** colocation, copropriété.
- **Tarification dynamique :** calcul automatique selon profil, consommation, périodes.
- **Templates personnalisés :** modèles propres à chaque entreprise.

### 💳 Facturation et Paiements

- **Facturation automatisée intelligente :** périodique ou à la demande selon consommation réelle ou estimée.
- **Facturation multi-services :** eau potable, assainissement et services annexes.
- **Intégration complète des paiements :** SEPA, carte bancaire, paiement mobile.
- **Gestion complète du recouvrement :** relances automatiques, échelonnement, gestion des contentieux.

### 🔧 Opérations Techniques

- **Gestion des interventions :** demandes, planification, bons d'intervention automatiques.
- **Suivi des incidents :** fuites, surconsommation, urgences.
- **Intégration IoT :** supervision et relève automatique à distance des compteurs.

### 📁 Affaires et Workflow

- **Système de gestion d'affaires :** regroupement d'opérations selon besoins métier (installation, relances, interventions techniques).
- **Automatisation des workflows :** auto-création d'affaires (contrats, relances, facturations).
- **Suivi d'avancement clair :** visualisation d'étapes, gestion des blocages.

### 📊 Interface Utilisateur (Frontend)

- **Espace client interactif :** accès aux factures, historique de consommation, soumission des réclamations.
- **Notifications personnalisées :** alertes email/SMS.
- **Formulaires dynamiques :** questionnaires de satisfaction, retours d'expérience automatisés.

## 🐳 Lancer l'application localement avec Docker

Assure-toi que Docker est installé puis lance cette commande :

```bash
docker compose up -d --build
```

L'application sera accessible sur :

- Frontend : `http://localhost:8080`
- Auth-service : `http://localhost:3000`
- Agency-service : `http://localhost:3001`
- Contrat-service : `http://localhost:3002`
- Operations-service : `http://localhost:3003`
- Billing-service : `http://localhost:3004`

**RabbitMQ Management UI :** `http://localhost:15672`

---

## 🔑 Identifiants par défaut

- **Postgres :**
  - User : `postgres`
  - Password : `postgres`

---

## 🌐 Architecture du projet

```
project-root/
├── domain/         (Entités métier globales)
├── application/    (Cas d'utilisation métier)
├── Infrastructure/
│   ├── microservices/ (Backends NestJS)
│   └── Front/         (Vue.js)
├── docker-compose.yml
└── README.md
```

---

🚀 **Bonne utilisation !**

