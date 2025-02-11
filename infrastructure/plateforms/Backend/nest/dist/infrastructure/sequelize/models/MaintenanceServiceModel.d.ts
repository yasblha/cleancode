import { Model, Optional } from "sequelize";
interface MaintenanceServiceAttributes {
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
}
type MaintenanceServiceCreationAttributes = Optional<MaintenanceServiceAttributes, "id" | "createdAt" | "updatedAt">;
declare class MaintenanceServiceModel extends Model<MaintenanceServiceAttributes, MaintenanceServiceCreationAttributes> implements MaintenanceServiceAttributes {
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
    readonly createdAt: Date;
    readonly updatedAt: Date | null;
    static associate(models: any): void;
}
export default MaintenanceServiceModel;
