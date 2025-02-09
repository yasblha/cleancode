import { DataTypes, Model } from 'sequelize';
import sequelize from '../sequelizedb';

interface IncidentAttributes {
    id: string;
    bikeId: string;
    date: Date;
    description: string;
    isResolved: boolean;
}

class IncidentModel extends Model<IncidentAttributes> implements IncidentAttributes {
    public id!: string;
    public bikeId!: string;
    public date!: Date;
    public description!: string;
    public isResolved!: boolean;


    public static associate(models: any) {
        IncidentModel.belongsTo(models.Bike, { foreignKey: 'bikeId', targetKey: 'vin' });
    }
}

IncidentModel.init(
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
        isResolved: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    },
    {
        sequelize,
        modelName: 'Incident',
        tableName: 'incidents',
        timestamps: false,
    }
);

export default IncidentModel;
