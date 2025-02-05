// infrastructure/sequelize/models/BikeModel.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../sequelizedb';
import VinIdentifier from "@domain/value-objects/Vinidentifier";

class BikeModel extends Model {
    public vin!: string;
    public brand!: string;
    public model!: string;
    public mileage!: number;
    public registrationNumber!: string;
    public purchaseDate!: Date;
    public warrantyExpirationDate!: Date | null;
    public ownerId!: string;
    public isActive!: boolean;
    public isInMaintenance!: boolean;
    public isDecommissioned!: boolean;
    public nextMaintenanceMileage!: number | null;
    public nextMaintenanceDate!: Date | null;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date | null;
}

BikeModel.init(
    {
        vin: {
            type: DataTypes.STRING(17),
            primaryKey: true,
            allowNull: false,
            unique: true,
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        mileage: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        registrationNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        purchaseDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        warrantyExpirationDate: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        ownerId: {
            type: DataTypes.UUID, // Utilisez UUID pour l'ownerId
            allowNull: false,
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
        isInMaintenance: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        isDecommissioned: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        nextMaintenanceMileage: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        nextMaintenanceDate: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    },
    {
        sequelize,
        modelName: 'Bike',
        tableName: 'bikes',
        timestamps: true,
    },
);

export default BikeModel;