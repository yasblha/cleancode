import { DataTypes, Model } from 'sequelize';
import sequelize from '../sequelizedb';

class PartModel extends Model {
    public id!: string;
    public name!: string;
    public description!: string;
    public stockQuantity!: number;
    public minStockLevel!: number;
    public price!: number;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date | null;
}

PartModel.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
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
        },
        minStockLevel: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
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
        modelName: 'Part',
        tableName: 'parts',
        timestamps: true,
    },
);

export default PartModel;