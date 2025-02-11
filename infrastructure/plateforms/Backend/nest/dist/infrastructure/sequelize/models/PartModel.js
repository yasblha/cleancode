"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelizedb_1 = require("../sequelizedb");
class PartModel extends sequelize_1.Model {
    static associate(models) {
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
PartModel.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    stockQuantity: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    minStockLevel: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
    },
    price: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    reference: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
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
    tableName: "parts",
    modelName: "Part",
    timestamps: true,
});
exports.default = PartModel;
//# sourceMappingURL=PartModel.js.map