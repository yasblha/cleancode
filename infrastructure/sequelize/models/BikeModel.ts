import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../sequelizedb';

interface BikeAttributes {
    vin: string;
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
    createdAt: Date;
    updatedAt: Date | null;
}

type BikeCreationAttributes = Optional<
    BikeAttributes,
    'createdAt' | 'updatedAt'
>;

class BikeModel
    extends Model<BikeAttributes, BikeCreationAttributes>
    implements BikeAttributes
{
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

    static associate(models: any) {
        // Une moto appartient à un utilisateur (propriétaire)
        BikeModel.belongsTo(models.User, { foreignKey: 'ownerId', targetKey: 'id' });
        // Une moto a plusieurs incidents
        BikeModel.hasMany(models.Incident, { foreignKey: 'bikeId', sourceKey: 'vin' });
        // Une moto a plusieurs services de maintenance
        BikeModel.hasMany(models.MaintenanceService, { foreignKey: 'bikeId', sourceKey: 'vin' });
    }
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
            type: DataTypes.UUID,
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
