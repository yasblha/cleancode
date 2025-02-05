import { Model } from 'sequelize';
declare class MaintenanceServiceModel extends Model {
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
    readonly createdAt: Date;
    readonly updatedAt: Date | null;
}
export default MaintenanceServiceModel;
