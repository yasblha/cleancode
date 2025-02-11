"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoryError = exports.ConcurrencyError = exports.DatabaseConnectionError = exports.OwnershipNotConfirmedError = exports.UnauthorizedBikeAccessError = exports.MaintenanceInProgressError = exports.BikeAlreadyDecommissionedError = exports.RegistrationNumberFormatError = exports.NegativeMileageError = exports.MissingBrandError = exports.NoBikesFoundError = exports.ModelEmptyError = exports.BikeNotFoundError = exports.BikeAlreadyExistsError = exports.InvalidVinError = void 0;
const DomainError_1 = require("./DomainError");
class InvalidVinError extends DomainError_1.DomainError {
    constructor(vin) {
        super(`Le VIN "${vin}" est invalide.`);
        this.name = "InvalidVinError";
    }
}
exports.InvalidVinError = InvalidVinError;
class BikeAlreadyExistsError extends DomainError_1.DomainError {
    constructor(vin) {
        super(`Un vélo avec le VIN "${vin}" existe déjà.`);
        this.name = "BikeAlreadyExistsError";
    }
}
exports.BikeAlreadyExistsError = BikeAlreadyExistsError;
class BikeNotFoundError extends DomainError_1.DomainError {
    constructor(vin) {
        super(`Aucun vélo trouvé pour le VIN "${vin}".`);
        this.name = "BikeNotFoundError";
    }
}
exports.BikeNotFoundError = BikeNotFoundError;
class ModelEmptyError extends DomainError_1.DomainError {
    constructor() {
        super(`Le champ "model" ne peut pas être vide ou manquant.`);
        this.name = "ModelEmptyError";
    }
}
exports.ModelEmptyError = ModelEmptyError;
class NoBikesFoundError extends DomainError_1.DomainError {
    constructor() {
        super(`Aucun vélo n'a été trouvé dans la base de données.`);
        this.name = "NoBikesFoundError";
    }
}
exports.NoBikesFoundError = NoBikesFoundError;
class MissingBrandError extends DomainError_1.DomainError {
    constructor() {
        super("La marque (brand) du vélo est manquante ou vide.");
        this.name = "MissingBrandError";
    }
}
exports.MissingBrandError = MissingBrandError;
class NegativeMileageError extends DomainError_1.DomainError {
    constructor(mileage) {
        super(`Le kilométrage (${mileage}) ne peut pas être négatif.`);
        this.name = "NegativeMileageError";
    }
}
exports.NegativeMileageError = NegativeMileageError;
class RegistrationNumberFormatError extends DomainError_1.DomainError {
    constructor(registration) {
        super(`Le numéro d'immatriculation "${registration}" est invalide.`);
        this.name = "RegistrationNumberFormatError";
    }
}
exports.RegistrationNumberFormatError = RegistrationNumberFormatError;
class BikeAlreadyDecommissionedError extends DomainError_1.DomainError {
    constructor(vin) {
        super(`Le vélo avec le VIN "${vin}" est déjà décommissionné.`);
        this.name = "BikeAlreadyDecommissionedError";
    }
}
exports.BikeAlreadyDecommissionedError = BikeAlreadyDecommissionedError;
class MaintenanceInProgressError extends DomainError_1.DomainError {
    constructor(vin) {
        super(`Impossible d'effectuer l'opération : le vélo "${vin}" est en maintenance.`);
        this.name = "MaintenanceInProgressError";
    }
}
exports.MaintenanceInProgressError = MaintenanceInProgressError;
class UnauthorizedBikeAccessError extends DomainError_1.DomainError {
    constructor(userId, bikeOwnerId) {
        super(`L'utilisateur "${userId}" n'est pas autorisé à accéder à ce vélo (propriétaire: "${bikeOwnerId}").`);
        this.name = "UnauthorizedBikeAccessError";
    }
}
exports.UnauthorizedBikeAccessError = UnauthorizedBikeAccessError;
class OwnershipNotConfirmedError extends DomainError_1.DomainError {
    constructor() {
        super("Le propriétaire du vélo n'est pas confirmé.");
        this.name = "OwnershipNotConfirmedError";
    }
}
exports.OwnershipNotConfirmedError = OwnershipNotConfirmedError;
class DatabaseConnectionError extends DomainError_1.DomainError {
    constructor(details) {
        super(`Erreur de connexion à la base de données. ${details || ""}`);
        this.name = "DatabaseConnectionError";
    }
}
exports.DatabaseConnectionError = DatabaseConnectionError;
class ConcurrencyError extends DomainError_1.DomainError {
    constructor() {
        super("Conflit de concurrence : l'entité a été modifiée par un autre processus.");
        this.name = "ConcurrencyError";
    }
}
exports.ConcurrencyError = ConcurrencyError;
class RepositoryError extends DomainError_1.DomainError {
    constructor(message) {
        super(`Erreur au niveau du repository : ${message}`);
        this.name = "RepositoryError";
    }
}
exports.RepositoryError = RepositoryError;
//# sourceMappingURL=BikesErrors.js.map