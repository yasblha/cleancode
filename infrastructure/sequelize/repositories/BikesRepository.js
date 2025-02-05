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
const BikeModel_1 = __importDefault(require("../models/BikeModel"));
class SequelizeBikesRepository {
    create(bike) {
        return __awaiter(this, void 0, void 0, function* () {
            const newBike = yield BikeModel_1.default.create({ Bikes: bike, vin: bike.vin.toString() });
            return newBike.toJSON();
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const bikes = yield BikeModel_1.default.findAll();
            return bikes.map(bike => bike.toJSON());
        });
    }
    findOne(vin) {
        return __awaiter(this, void 0, void 0, function* () {
            const bike = yield BikeModel_1.default.findOne({ where: { vin } });
            return bike ? bike.toJSON() : null;
        });
    }
    update(vin, bike) {
        return __awaiter(this, void 0, void 0, function* () {
            const [affectedCount] = yield BikeModel_1.default.update(bike, { where: { vin } });
            if (affectedCount > 0) {
                return this.findOne(vin);
            }
            return null;
        });
    }
    remove(vin) {
        return __awaiter(this, void 0, void 0, function* () {
            const affectedCount = yield BikeModel_1.default.destroy({ where: { vin } });
            return affectedCount > 0;
        });
    }
}
exports.SequelizeBikesRepository = SequelizeBikesRepository;
//# sourceMappingURL=BikesRepository.js.map