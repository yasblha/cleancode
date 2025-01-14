export class Bikes {
    public constructor(
        public id: string,
        public brand: string,
        public model: string,
        public mileage: number,
        public vin: string,
        public purchaseDate: Date,
        public warrantyExpirationDate: Date | null,
        public ownerId: string,
        public isActive: boolean,
        public isInMaintenance: boolean,
        public isDecommissioned: boolean,
        public nextMaintenanceMileage: number | null,
        public nextMaintenanceDate: Date | null,
        public createdAt: Date,
        public updatedAt: Date | null,
    ) {}
}