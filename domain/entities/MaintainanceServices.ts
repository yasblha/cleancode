export class MaintenanceServices {
    public constructor(
        public id: string,
        public bikeId: string,
        public date: Date,
        public description: string,
        public type: string,
        public isResolved: boolean,
        public cost: number,
        public partsUsed: { partId: string; quantity: number }[],
        public technicianId: string,
        public createdAt: Date,
        public updatedAt: Date | null,
    ) {}
}