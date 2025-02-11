"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelizedb_1 = require("../sequelizedb");
class UserModel extends sequelize_1.Model {
    static associate(models) {
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
UserModel.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: "",
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    roles: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: "user",
    },
    isActive: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
    isEmailVerified: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
}, {
    sequelize: sequelizedb_1.default,
    tableName: "users",
    modelName: "User",
    timestamps: true,
});
exports.default = UserModel;
//# sourceMappingURL=UserModel.js.map