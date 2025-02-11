"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequelizePartsRepository = void 0;
const PartModel_1 = require("../models/PartModel");
const sequelize_1 = require("sequelize");
const sequelize_2 = require("sequelize");
class SequelizePartsRepository {
    async create(part) {
        const newPart = await PartModel_1.default.create(part);
        return newPart.toJSON();
    }
    async findAll() {
        const parts = await PartModel_1.default.findAll();
        return parts.map(part => part.toJSON());
    }
    async findOne(id) {
        const part = await PartModel_1.default.findByPk(id);
        return part ? part.toJSON() : null;
    }
    async update(id, part) {
        const [affectedCount] = await PartModel_1.default.update(part, { where: { id } });
        if (affectedCount > 0) {
            const updatedPart = await PartModel_1.default.findByPk(id);
            return updatedPart ? updatedPart.toJSON() : null;
        }
        return null;
    }
    async remove(id) {
        const affectedCount = await PartModel_1.default.destroy({ where: { id } });
        return affectedCount > 0;
    }
    async findLowStockParts() {
        const parts = await PartModel_1.default.findAll({
            where: { stockQuantity: { [sequelize_1.Op.lt]: sequelize_2.default.col('minStockLevel'), }, },
        });
        return parts.map(part => part.toJSON());
    }
    async searchByReference(reference) {
        const parts = await PartModel_1.default.findAll({
            where: {
                reference: {
                    [sequelize_1.Op.like]: `%${reference}%`,
                },
            },
        });
        return parts.map(part => part.toJSON());
    }
}
exports.SequelizePartsRepository = SequelizePartsRepository;
//# sourceMappingURL=PartsRepository.js.map