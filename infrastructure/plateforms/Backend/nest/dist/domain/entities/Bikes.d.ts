import VinIdentifier from "@domain/value-objects/Vinidentifier";
export declare class Bikes {
    id: number;
    vin: VinIdentifier;
    brand: string;
    model: string;
    mileage: number;
    registrationNumber: string;
    purchaseDate: Date;
    warrantyExpirationDate: Date | null;
    ownerId: number;
    isActive: boolean;
    isInMaintenance: boolean;
    isDecommissioned: boolean;
    nextMaintenanceMileage: number | null;
    nextMaintenanceDate: Date | null;
    createdAt: Date;
    updatedAt: Date | null;
    constructor(id: number, vin: VinIdentifier, brand: string, model: string, mileage: number, registrationNumber: string, purchaseDate: Date, warrantyExpirationDate: Date | null, ownerId: number, isActive: boolean, isInMaintenance: boolean, isDecommissioned: boolean, nextMaintenanceMileage: number | null, nextMaintenanceDate: Date | null, createdAt: Date, updatedAt: Date | null);
}
