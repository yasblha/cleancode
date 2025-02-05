export declare class Bikes {
    id: string;
    brand: string;
    model: string;
    mileage: number;
    registrationNumber: string;
    purchaseDate: Date;
    warrantyExpirationDate: Date | null;
    ownerId: string;
    isActive: boolean;
    isInMaintenance: boolean;
    isDecommissioned: boolean;
    nextMaintenanceMileage: number | null;
    nextMaintenanceDate: Date | null;
    createdAt: Date;
    updatedAt: Date | null;
    constructor(id: string, brand: string, model: string, mileage: number, registrationNumber: string, purchaseDate: Date, warrantyExpirationDate: Date | null, ownerId: string, isActive: boolean, isInMaintenance: boolean, isDecommissioned: boolean, nextMaintenanceMileage: number | null, nextMaintenanceDate: Date | null, createdAt: Date, updatedAt: Date | null);
}
