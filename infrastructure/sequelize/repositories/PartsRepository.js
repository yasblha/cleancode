"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequelizePartsRepository = void 0;
const PartModel_1 = __importDefault(require("../models/PartModel"));
const sequelize_1 = require("sequelize");
const sequelizedb_1 = __importDefault(require("@sequelize/sequelizedb"));
class SequelizePartsRepository {
    create(part) {
        return __awaiter(this, void 0, void 0, function* () {
            // @ts-ignore
            const newPart = yield PartModel_1.default.create(part);
            return newPart.toJSON();
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const parts = yield PartModel_1.default.findAll();
            return parts.map(part => part.toJSON());
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const part = yield PartModel_1.default.findByPk(id);
            return part ? part.toJSON() : null;
        });
    }
    update(id, part) {
        return __awaiter(this, void 0, void 0, function* () {
            const [affectedCount] = yield PartModel_1.default.update(part, { where: { id } });
            if (affectedCount > 0) {
                const updatedPart = yield PartModel_1.default.findByPk(id);
                return updatedPart ? updatedPart.toJSON() : null;
            }
            return null;
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const affectedCount = yield PartModel_1.default.destroy({ where: { id } });
            return affectedCount > 0;
        });
    }
    findLowStockParts() {
        return __awaiter(this, void 0, void 0, function* () {
            const parts = yield PartModel_1.default.findAll({
                where: { stockQuantity: { [sequelize_1.Op.lt]: sequelizedb_1.default.col('minStockLevel'), }, },
            });
            return parts.map(part => part.toJSON());
        });
    }
}
exports.SequelizePartsRepository = SequelizePartsRepository;
//# sourceMappingURL=PartsRepository.js.map