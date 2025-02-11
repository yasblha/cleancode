import { DomainError } from "./DomainError";

export class InvalidVinError extends DomainError {
    constructor(vin: string) {
        super(`Le VIN "${vin}" est invalide.`);
        this.name = "InvalidVinError";
    }
}

export class BikeAlreadyExistsError extends DomainError {
    constructor(vin: string) {
        super(`Un vélo avec le VIN "${vin}" existe déjà.`);
        this.name = "BikeAlreadyExistsError";
    }
}

export class BikeNotFoundError extends DomainError {
    constructor(vin: string) {
        super(`Aucun vélo trouvé pour le VIN "${vin}".`);
        this.name = "BikeNotFoundError";
    }
}

export class ModelEmptyError extends DomainError {
    constructor() {
        super(`Le champ "model" ne peut pas être vide ou manquant.`);
        this.name = "ModelEmptyError";
    }
}

export class NoBikesFoundError extends DomainError {
    constructor() {
        super(`Aucun vélo n'a été trouvé dans la base de données.`);
        this.name = "NoBikesFoundError";
    }
}

/** Nouveautés */

// brand manquante
export class MissingBrandError extends DomainError {
    constructor() {
        super("La marque (brand) du vélo est manquante ou vide.");
        this.name = "MissingBrandError";
    }
}

// Kilométrage négatif
export class NegativeMileageError extends DomainError {
    constructor(mileage: number) {
        super(`Le kilométrage (${mileage}) ne peut pas être négatif.`);
        this.name = "NegativeMileageError";
    }
}

// Numéro d'immatriculation invalide
export class RegistrationNumberFormatError extends DomainError {
    constructor(registration: string) {
        super(`Le numéro d'immatriculation "${registration}" est invalide.`);
        this.name = "RegistrationNumberFormatError";
    }
}

// Vélo déjà décommissionné (hors service)
export class BikeAlreadyDecommissionedError extends DomainError {
    constructor(vin: string) {
        super(`Le vélo avec le VIN "${vin}" est déjà décommissionné.`);
        this.name = "BikeAlreadyDecommissionedError";
    }
}

// Vélo en cours de maintenance
export class MaintenanceInProgressError extends DomainError {
    constructor(vin: string) {
        super(`Impossible d'effectuer l'opération : le vélo "${vin}" est en maintenance.`);
        this.name = "MaintenanceInProgressError";
    }
}

// Erreurs d'autorisation
export class UnauthorizedBikeAccessError extends DomainError {
    constructor(userId: string, bikeOwnerId: string) {
        super(`L'utilisateur "${userId}" n'est pas autorisé à accéder à ce vélo (propriétaire: "${bikeOwnerId}").`);
        this.name = "UnauthorizedBikeAccessError";
    }
}

export class OwnershipNotConfirmedError extends DomainError {
    constructor() {
        super("Le propriétaire du vélo n'est pas confirmé.");
        this.name = "OwnershipNotConfirmedError";
    }
}

export class DatabaseConnectionError extends DomainError {
    constructor(details?: string) {
        super(`Erreur de connexion à la base de données. ${details || ""}`);
        this.name = "DatabaseConnectionError";
    }
}

export class ConcurrencyError extends DomainError {
    constructor() {
        super("Conflit de concurrence : l'entité a été modifiée par un autre processus.");
        this.name = "ConcurrencyError";
    }
}

export class RepositoryError extends DomainError {
    constructor(message: string) {
        super(`Erreur au niveau du repository : ${message}`);
        this.name = "RepositoryError";
    }
}
