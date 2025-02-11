import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../sequelizedb";

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

class BikeModel
    extends Model<BikeAttributes, BikeCreationAttributes>
    implements BikeAttributes
{
    public id!: number;
    public vin!: string;
    public brand!: string;
    public model!: string;
    public mileage!: number;
    public registrationNumber!: string;
    public purchaseDate!: Date;
    public warrantyExpirationDate!: Date | null;
    public ownerId!: number;
    public isActive!: boolean;
    public isInMaintenance!: boolean;
    public isDecommissioned!: boolean;
    public nextMaintenanceMileage!: number | null;
    public nextMaintenanceDate!: Date | null;

    static associate(models: any) {
        // Exemple de relations
        BikeModel.belongsTo(models.User, { foreignKey: "ownerId", targetKey: "id" });
        BikeModel.hasMany(models.Incident, { foreignKey: "bikeId", sourceKey: "id" });
        BikeModel.hasMany(models.MaintenanceService, { foreignKey: "bikeId", sourceKey: "id" });
        BikeModel.belongsToMany(models.Part, {
            through: "bikeparts",
            foreignKey: "bikeId",
            otherKey: "partId",
        });
    }
}

BikeModel.init(
    {
        id: {
            type: DataTypes.INTEGER, // Pas de UNSIGNED
            autoIncrement: true,
            primaryKey: true,
        },
        vin: {
            type: DataTypes.STRING(17),
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
            defaultValue: 0,
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
            type: DataTypes.INTEGER,
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
    },
    {
        sequelize,
        tableName: "bikes",
        modelName: "Bike",
        timestamps: true,
    }
);

export default BikeModel;
