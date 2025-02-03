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
exports.SequelizeBikesRepository = void 0;
// infrastructure/sequelize/repositories/BikesRepository.ts
const BikeModel_1 = __importDefault(require("../models/BikeModel"));
class SequelizeBikesRepository {
    create(bike) {
        return __awaiter(this, void 0, void 0, function* () {
            // @ts-ignore
            const newBike = yield BikeModel_1.default.create(bike);
            return newBike.toJSON();
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const bikes = yield BikeModel_1.default.findAll();
            return bikes.map(bike => bike.toJSON());
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const bike = yield BikeModel_1.default.findByPk(id);
            return bike ? bike.toJSON() : null;
        });
    }
    update(id, bike) {
        return __awaiter(this, void 0, void 0, function* () {
            const [affectedCount] = yield BikeModel_1.default.update(bike, { where: { id } });
            if (affectedCount > 0) {
                const updatedBike = yield BikeModel_1.default.findByPk(id);
                return updatedBike ? updatedBike.toJSON() : null;
            }
            return null;
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const affectedCount = yield BikeModel_1.default.destroy({ where: { id } });
            return affectedCount > 0;
        });
    }
}
exports.SequelizeBikesRepository = SequelizeBikesRepository;
//# sourceMappingURL=BikesRepository.js.map