export class Maintenance{
    constructor(
        public id: number,
        public bikeId: number,
        public date: Date,
        public description: string,
        public type: string,
        public isResolved: boolean,
        public price: number,
        public partsUsed: { partId: number; quantity: number }[],
        public technicianId: number,
        public createdAt: Date,
        public updatedAt: Date | null,
    ) {}
}