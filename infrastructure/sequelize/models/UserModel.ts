import { DataTypes, Model } from 'sequelize';
import sequelize from '../sequelize';

class UserModel extends Model {
    public id!: string;
    public name!: string;
    public email!: string;
    public password!: string;
    public roles!: string;
    public isActive!: boolean;
    public isEmailVerified!: boolean;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date | null;
}

UserModel.init(
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
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        roles: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
        isEmailVerified: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
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
        modelName: 'User',
        tableName: 'users',
        timestamps: true,
    },
);

export default UserModel;