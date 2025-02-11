import VinIdentifier from "@domain/value-objects/Vinidentifier";

export class Bikes {
    constructor(
        public id: number,
        public vin: VinIdentifier,
        public brand: string,
        public model: string,
        public mileage: number,
        public registrationNumber: string,
        public purchaseDate: Date,
        public warrantyExpirationDate: Date | null,
        public ownerId: number,
        public isActive: boolean,
        public isInMaintenance: boolean,
        public isDecommissioned: boolean,
        public nextMaintenanceMileage: number | null,
        public nextMaintenanceDate: Date | null,
        public createdAt: Date,
        public updatedAt: Date | null,
    ) {}
}
