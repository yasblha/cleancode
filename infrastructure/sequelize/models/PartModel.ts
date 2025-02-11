import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../sequelizedb";

interface PartAttributes {
    id: number;
    name: string;
    description: string;
    reference: string;
    stockQuantity: number;
    minStockLevel: number;
    price: number;
    createdAt: Date;
    updatedAt: Date | null;
}

type PartCreationAttributes = Optional<PartAttributes, "id" | "createdAt" | "updatedAt">;

class PartModel
    extends Model<PartAttributes, PartCreationAttributes>
    implements PartAttributes
{
    public id!: number;
    public name!: string;
    public description!: string;
    public reference!: string;
    public stockQuantity!: number;
    public minStockLevel!: number;
    public price!: number;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date | null;

    static associate(models: any) {
        PartModel.belongsToMany(models.MaintenanceService, {
            through: "maintenanceserviceparts",
            foreignKey: "partId",
            otherKey: "maintenanceServiceId",
        });
        PartModel.belongsToMany(models.Bike, {
            through: "bikeparts",
            foreignKey: "partId",
            otherKey: "bikeId",
        });
    }
}

PartModel.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        stockQuantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        minStockLevel: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0,
        },
        reference: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
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
        tableName: "parts",
        modelName: "Part",
        timestamps: true,
    }
);

export default PartModel;
