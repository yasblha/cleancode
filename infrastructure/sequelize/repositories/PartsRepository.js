"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequelizePartsRepository = void 0;
const PartModel_1 = require("../models/PartModel");
const sequelize_1 = require("sequelize");
const sequelizedb_1 = require("@sequelize/sequelizedb");
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
            where: { stockQuantity: { [sequelize_1.Op.lt]: sequelizedb_1.default.col('minStockLevel'), }, },
        });
        return parts.map(part => part.toJSON());
    }
}
exports.SequelizePartsRepository = SequelizePartsRepository;
//# sourceMappingURL=PartsRepository.js.map