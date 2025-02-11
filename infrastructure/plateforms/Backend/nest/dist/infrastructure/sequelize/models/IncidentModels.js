"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelizedb_1 = require("../sequelizedb");
class IncidentModel extends sequelize_1.Model {
    static associate(models) {
        IncidentModel.belongsTo(models.Bike, {
            foreignKey: "bikeId",
            targetKey: "id",
        });
    }
}
IncidentModel.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    bikeId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
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
    isResolved: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
}, {
    sequelize: sequelizedb_1.default,
    tableName: "incidents",
    modelName: "Incident",
    timestamps: false,
});
exports.default = IncidentModel;
//# sourceMappingURL=IncidentModels.js.map