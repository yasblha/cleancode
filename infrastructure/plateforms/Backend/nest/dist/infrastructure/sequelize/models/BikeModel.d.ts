import { Model, Optional } from "sequelize";
interface BikeAttributes {
    id: number;
    vin: string;
    brand: string;
    model: string;
    mileage: number;
    registrationNumber: string;
    purchaseDate: Date;
    warrantyExpirationDate: Date | null;
    ownerId: number;
    isActive: boolean;
    isInMaintenance: boolean;
    isDecommissioned: boolean;
    nextMaintenanceMileage: number | null;
    nextMaintenanceDate: Date | null;
}
type BikeCreationAttributes = Optional<BikeAttributes, "id">;
declare class BikeModel extends Model<BikeAttributes, BikeCreationAttributes> implements BikeAttributes {
    id: number;
    vin: string;
    brand: string;
    model: string;
    mileage: number;
    registrationNumber: string;
    purchaseDate: Date;
    warrantyExpirationDate: Date | null;
    ownerId: number;
    isActive: boolean;
    isInMaintenance: boolean;
    isDecommissioned: boolean;
    nextMaintenanceMileage: number | null;
    nextMaintenanceDate: Date | null;
    static associate(models: any): void;
}
export default BikeModel;
