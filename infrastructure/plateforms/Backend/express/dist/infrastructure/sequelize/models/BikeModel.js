"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelizedb_1 = __importDefault(require("../sequelizedb"));
class BikeModel extends sequelize_1.Model {
}
BikeModel.init({
    vin: {
        type: sequelize_1.DataTypes.STRING(17),
        primaryKey: true,
        allowNull: false,
        unique: true,
    },
    brand: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    model: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    mileage: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    registrationNumber: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    purchaseDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    warrantyExpirationDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    ownerId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
    isActive: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
    isInMaintenance: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    isDecommissioned: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    nextMaintenanceMileage: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    nextMaintenanceDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
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
    modelName: 'Bike',
    tableName: 'bikes',
    timestamps: true,
});
exports.default = BikeModel;
//# sourceMappingURL=BikeModel.js.map