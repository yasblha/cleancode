"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../sequelize"));
class MaintenanceServiceModel extends sequelize_1.Model {
}
MaintenanceServiceModel.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    bikeId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
    date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    isResolved: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    cost: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    partsUsed: {
        type: sequelize_1.DataTypes.JSONB,
        allowNull: false,
    },
    technicianId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
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
    modelName: 'MaintenanceService',
    tableName: 'maintenance_services',
    timestamps: true,
});
exports.default = MaintenanceServiceModel;
//# sourceMappingURL=MaintenanceServiceModel.js.map