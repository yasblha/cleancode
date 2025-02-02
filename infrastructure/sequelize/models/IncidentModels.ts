import { DataTypes, Model } from 'sequelize';
import sequelize from '../sequelize';

class IncidentModel extends Model {
    public id!: string;
    public bikeId!: string;
    public date!: Date;
    public description!: string;
    public isResolved!: boolean;
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
    },
);

export default IncidentModel;