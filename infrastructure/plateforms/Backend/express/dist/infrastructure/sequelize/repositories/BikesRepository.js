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
const BikeModel_1 = __importDefault(require("@infrastructure/sequelize/models/BikeModel"));
const Vinidentifier_1 = __importDefault(require("@domain/value-objects/Vinidentifier"));
class SequelizeBikesRepository {
    create(bike) {
        return __awaiter(this, void 0, void 0, function* () {
            const newBike = yield BikeModel_1.default.create({
                vin: bike.vin.toString(),
                brand: bike.brand,
                model: bike.model,
                mileage: bike.mileage,
                registrationNumber: bike.registrationNumber,
                purchaseDate: bike.purchaseDate,
                warrantyExpirationDate: bike.warrantyExpirationDate,
                ownerId: bike.ownerId,
                isActive: bike.isActive,
                isInMaintenance: bike.isInMaintenance,
                isDecommissioned: bike.isDecommissioned,
                nextMaintenanceMileage: bike.nextMaintenanceMileage,
                nextMaintenanceDate: bike.nextMaintenanceDate,
            });
            const rawData = newBike.toJSON();
            const result = Object.assign(Object.assign({}, rawData), { vin: new Vinidentifier_1.default(rawData.vin) });
            return result;
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const bikeRecords = yield BikeModel_1.default.findAll();
            return bikeRecords.map((b) => {
                const rawData = b.toJSON();
                const result = Object.assign(Object.assign({}, rawData), { vin: new Vinidentifier_1.default(rawData.vin) });
                return result;
            });
        });
    }
    findOne(vin) {
        return __awaiter(this, void 0, void 0, function* () {
            const bike = yield BikeModel_1.default.findOne({
                where: { vin: vin.toString() },
            });
            if (!bike) {
                return null;
            }
            const rawData = bike.toJSON();
            const result = Object.assign(Object.assign({}, rawData), { vin: new Vinidentifier_1.default(rawData.vin) });
            return result;
        });
    }
    update(vin, partialBike) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateData = Object.assign({}, partialBike);
            if (updateData.vin instanceof Vinidentifier_1.default) {
                updateData.vin = updateData.vin.toString();
            }
            const [affectedCount] = yield BikeModel_1.default.update(updateData, {
                where: { vin: vin.toString() },
            });
            if (affectedCount > 0) {
                return this.findOne(vin);
            }
            return null;
        });
    }
    remove(vin) {
        return __awaiter(this, void 0, void 0, function* () {
            const affectedCount = yield BikeModel_1.default.destroy({
                where: { vin: vin.toString() },
            });
            return affectedCount > 0;
        });
    }
}
exports.SequelizeBikesRepository = SequelizeBikesRepository;
//# sourceMappingURL=BikesRepository.js.map