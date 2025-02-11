"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const alert_1 = require("../../../domain/entities/alert");
const Alert_1 = require("../models/Alert");
const AlertNotFoundError_1 = require("../../../domain/errors/alerts/AlertNotFoundError");
const PartsRepository_1 = require("../../sequelize/repositories/PartsRepository");
class MongooseAlertRepository {
    async create(alert) {
        const newAlert = await Alert_1.AlertModel.create(alert);
        return alert_1.default.fromMongoModel(newAlert, new PartsRepository_1.SequelizePartsRepository());
    }
    async update(identifier, alert) {
        const updatedAlert = await Alert_1.AlertModel.findByIdAndUpdate(identifier, alert, {
            new: true,
        });
        if (!updatedAlert) {
            return new AlertNotFoundError_1.default();
        }
        return alert_1.default.fromMongoModel(updatedAlert, new PartsRepository_1.SequelizePartsRepository());
    }
    async findOne(identifier) {
        const alert = await Alert_1.AlertModel.findOne({ identifier });
        if (!alert) {
            return new AlertNotFoundError_1.default();
        }
        return alert_1.default.fromMongoModel(alert, new PartsRepository_1.SequelizePartsRepository());
    }
    async findAll() {
        const alerts = await Alert_1.AlertModel.find();
        return await Promise.all(alerts.map(async (alert) => alert_1.default.fromMongoModel(alert, new PartsRepository_1.SequelizePartsRepository())));
    }
    async searchByPart(partId) {
        const alerts = await Alert_1.AlertModel.find({ part: { $eq: partId } });
        return await Promise.all(alerts.map(async (alert) => alert_1.default.fromMongoModel(alert, new PartsRepository_1.SequelizePartsRepository())));
    }
}
exports.default = MongooseAlertRepository;
//# sourceMappingURL=Alert.js.map