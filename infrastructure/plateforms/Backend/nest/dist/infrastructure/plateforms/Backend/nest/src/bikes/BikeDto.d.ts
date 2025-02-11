import { Bikes } from "@domain/entities/Bikes";
import { Incidents } from "@domain/entities/Incidents";
import { Maintenance } from "@domain/entities/Maintenance";
import VinIdentifier from "@domain/value-objects/Vinidentifier";
export declare class BikeDto implements Partial<Bikes> {
    readonly vin: VinIdentifier;
    readonly brand: string;
    readonly model: string;
    readonly mileage: number;
    readonly purchaseDate: Date;
    readonly warrantyExpirationDate: Date;
    readonly isActive: boolean;
    readonly isDecommissioned: boolean;
    readonly maintenances: Maintenance[];
    readonly incidents: Incidents[];
}
export declare class UpdateBikeDto implements Partial<Bikes> {
    readonly brand?: string;
    readonly model?: string;
    readonly mileage?: number;
    readonly purchaseDate?: Date;
    readonly warrantyExpirationDate?: Date;
    readonly isActive?: boolean;
    readonly isDecommissioned?: boolean;
}
