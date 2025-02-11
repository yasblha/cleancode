export declare class Maintenance {
    id: number;
    bikeId: number;
    date: Date;
    description: string;
    type: string;
    isResolved: boolean;
    cost: number;
    partsUsed: {
        partId: number;
        quantity: number;
    }[];
    technicianId: number;
    createdAt: Date;
    updatedAt: Date | null;
    constructor(id: number, bikeId: number, date: Date, description: string, type: string, isResolved: boolean, cost: number, partsUsed: {
        partId: number;
        quantity: number;
    }[], technicianId: number, createdAt: Date, updatedAt: Date | null);
}
