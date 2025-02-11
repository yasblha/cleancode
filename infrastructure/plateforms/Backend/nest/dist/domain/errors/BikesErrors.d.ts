import { DomainError } from "./DomainError";
export declare class InvalidVinError extends DomainError {
    constructor(vin: string);
}
export declare class BikeAlreadyExistsError extends DomainError {
    constructor(vin: string);
}
export declare class BikeNotFoundError extends DomainError {
    constructor(vin: string);
}
export declare class ModelEmptyError extends DomainError {
    constructor();
}
export declare class NoBikesFoundError extends DomainError {
    constructor();
}
export declare class MissingBrandError extends DomainError {
    constructor();
}
export declare class NegativeMileageError extends DomainError {
    constructor(mileage: number);
}
export declare class RegistrationNumberFormatError extends DomainError {
    constructor(registration: string);
}
export declare class BikeAlreadyDecommissionedError extends DomainError {
    constructor(vin: string);
}
export declare class MaintenanceInProgressError extends DomainError {
    constructor(vin: string);
}
export declare class UnauthorizedBikeAccessError extends DomainError {
    constructor(userId: string, bikeOwnerId: string);
}
export declare class OwnershipNotConfirmedError extends DomainError {
    constructor();
}
export declare class DatabaseConnectionError extends DomainError {
    constructor(details?: string);
}
export declare class ConcurrencyError extends DomainError {
    constructor();
}
export declare class RepositoryError extends DomainError {
    constructor(message: string);
}
