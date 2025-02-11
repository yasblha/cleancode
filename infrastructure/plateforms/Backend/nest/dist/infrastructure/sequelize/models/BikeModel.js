"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelizedb_1 = require("../sequelizedb");
class BikeModel extends sequelize_1.Model {
    static associate(models) {
        BikeModel.belongsTo(models.User, { foreignKey: "ownerId", targetKey: "id" });
        BikeModel.hasMany(models.Incident, { foreignKey: "bikeId", sourceKey: "id" });
        BikeModel.hasMany(models.MaintenanceService, { foreignKey: "bikeId", sourceKey: "id" });
        BikeModel.belongsToMany(models.Part, {
            through: "bikeparts",
            foreignKey: "bikeId",
            otherKey: "partId",
        });
    }
}
BikeModel.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    vin: {
        type: sequelize_1.DataTypes.STRING(17),
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
        defaultValue: 0,
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
        type: sequelize_1.DataTypes.INTEGER,
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
}, {
    sequelize: sequelizedb_1.default,
    tableName: "bikes",
    modelName: "Bike",
    timestamps: true,
});
exports.default = BikeModel;
//# sourceMappingURL=BikeModel.js.map