export declare class MaintenanceServices {
    id: string;
    bikeId: string;
    date: Date;
    description: string;
    type: string;
    isResolved: boolean;
    cost: number;
    partsUsed: {
        partId: string;
        quantity: number;
    }[];
    technicianId: string;
    createdAt: Date;
    updatedAt: Date | null;
    constructor(id: string, bikeId: string, date: Date, description: string, type: string, isResolved: boolean, cost: number, partsUsed: {
        partId: string;
        quantity: number;
    }[], technicianId: string, createdAt: Date, updatedAt: Date | null);
}
