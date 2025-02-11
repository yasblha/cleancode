import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../sequelizedb";

interface UserAttributes {
    id: string;
    name: string;
    email: string;
    password: string;
    roles: string;
    isActive: boolean;
    isEmailVerified: boolean;
    createdAt: Date;
    updatedAt: Date | null;
}

type UserCreationAttributes = Optional<UserAttributes, "id" | "createdAt" | "updatedAt">;

class UserModel
    extends Model<UserAttributes, UserCreationAttributes>
    implements UserAttributes
{
    public id!: string;
    public name!: string;
    public email!: string;
    public password!: string;
    public roles!: string;
    public isActive!: boolean;
    public isEmailVerified!: boolean;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date | null;

    static associate(models: any) {
        UserModel.hasMany(models.Bike, {
            foreignKey: "ownerId",
            sourceKey: "id",
        });
        UserModel.hasMany(models.MaintenanceService, {
            foreignKey: "technicianId",
            sourceKey: "id",
        });
    }
}

UserModel.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "",
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
            defaultValue: "user",
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
        tableName: "users",
        modelName: "User",
        timestamps: true,
    }
);

export default UserModel;
