"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// infrastructure/sequelize/models/BikeModel.ts
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../sequelize"));
class BikeModel extends sequelize_1.Model {
}
BikeModel.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
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
        type: sequelize_1.DataTypes.UUID, // Utilisez UUID pour l'ownerId
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
    sequelize: sequelize_2.default,
    modelName: 'Bike',
    tableName: 'bikes',
    timestamps: true,
});
exports.default = BikeModel;
//# sourceMappingURL=BikeModel.js.map