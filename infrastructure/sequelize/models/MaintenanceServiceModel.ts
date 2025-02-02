import { DataTypes, Model } from 'sequelize';
import sequelize from '../sequelize';

class MaintenanceServiceModel extends Model {
    public id!: string;
    public bikeId!: string;
    public date!: Date;
    public description!: string;
    public type!: string;
    public isResolved!: boolean;
    public cost!: number;
    public partsUsed!: { partId: string; quantity: number }[];
    public technicianId!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date | null;
}

MaintenanceServiceModel.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        bikeId: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isResolved: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        cost: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        partsUsed: {
            type: DataTypes.JSONB,
            allowNull: false,
        },
        technicianId: {
            type: DataTypes.UUID,
            allowNull: false,
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
        modelName: 'MaintenanceService',
        tableName: 'maintenance_services',
        timestamps: true,
    },
);

export default MaintenanceServiceModel;