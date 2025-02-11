import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../sequelizedb";

interface IncidentAttributes {
    id: number;
    bikeId: number;
    date: Date;
    description: string;
    isResolved: boolean;
}

type IncidentCreationAttributes = Optional<IncidentAttributes, "id">;

class IncidentModel
    extends Model<IncidentAttributes, IncidentCreationAttributes>
    implements IncidentAttributes
{
    public id!: number;
    public bikeId!: number;
    public date!: Date;
    public description!: string;
    public isResolved!: boolean;

    static associate(models: any) {
        IncidentModel.belongsTo(models.Bike, {
            foreignKey: "bikeId",
            targetKey: "id",
        });
    }
}

IncidentModel.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        bikeId: {
            type: DataTypes.INTEGER.UNSIGNED,
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
        isResolved: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    },
    {
        sequelize,
        tableName: "incidents",
        modelName: "Incident",
        timestamps: false,
    }
);

export default IncidentModel;
