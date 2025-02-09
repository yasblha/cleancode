import { DataTypes, Model } from 'sequelize';
import sequelize from '../sequelizedb';

interface MaintenanceServiceAttributes {
    id: string;
    bikeId: string;
    date: Date;
    description: string;
    type: string;
    isResolved: boolean;
    cost: number;
    partsUsed: { partId: string; quantity: number }[];
    technicianId: string;
    createdAt: Date;
    updatedAt: Date | null;
}

class MaintenanceServiceModel
    extends Model<MaintenanceServiceAttributes>
    implements MaintenanceServiceAttributes
{
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

    /**
     * Définir les associations entre les modèles.
     */
    public static associate(models: any) {
        // Chaque MaintenanceService appartient à une Bike, identifiée par son vin.
        MaintenanceServiceModel.belongsTo(models.Bike, { foreignKey: 'bikeId', targetKey: 'vin' });
        // Chaque MaintenanceService est liée à un utilisateur (technicien) par l'ID.
        MaintenanceServiceModel.belongsTo(models.User, { foreignKey: 'technicianId', targetKey: 'id' });
    }
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
    }
);

export default MaintenanceServiceModel;
