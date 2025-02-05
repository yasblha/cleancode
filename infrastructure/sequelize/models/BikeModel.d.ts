import { Model } from 'sequelize';
declare class BikeModel extends Model {
    id: string;
    brand: string;
    model: string;
    mileage: number;
    registrationNumber: string;
    purchaseDate: Date;
    warrantyExpirationDate: Date | null;
    ownerId: string;
    isActive: boolean;
    isInMaintenance: boolean;
    isDecommissioned: boolean;
    nextMaintenanceMileage: number | null;
    nextMaintenanceDate: Date | null;
    readonly createdAt: Date;
    readonly updatedAt: Date | null;
}
export default BikeModel;
