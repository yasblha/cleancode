"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequelizeBikesRepository = void 0;
const BikeModel_1 = require("../models/BikeModel");
const Vinidentifier_1 = require("../../../domain/value-objects/Vinidentifier");
class SequelizeBikesRepository {
    async create(bike) {
        const newBike = await BikeModel_1.default.create({
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
        const result = {
            ...rawData,
            vin: new Vinidentifier_1.default(rawData.vin),
        };
        return result;
    }
    async findAll() {
        const bikeRecords = await BikeModel_1.default.findAll();
        return bikeRecords.map((b) => {
            const rawData = b.toJSON();
            const result = {
                ...rawData,
                vin: new Vinidentifier_1.default(rawData.vin),
            };
            return result;
        });
    }
    async findOne(vin) {
        if (!(vin instanceof Vinidentifier_1.default) || typeof vin.value !== "string") {
            console.error("❌ Erreur : VIN invalide.");
            return null;
        }
        const bike = await BikeModel_1.default.findOne({
            where: { vin: vin.value },
        });
        if (!bike) {
            console.log(`❌ Aucun vélo trouvé avec le VIN ${vin.value}`);
            return null;
        }
        const rawData = bike.toJSON();
        return {
            ...rawData,
            vin: new Vinidentifier_1.default(rawData.vin),
        };
    }
    async update(vin, partialBike) {
        const updateData = { ...partialBike };
        if (updateData.vin instanceof Vinidentifier_1.default) {
            updateData.vin = updateData.vin.toString();
        }
        const [affectedCount] = await BikeModel_1.default.update(updateData, {
            where: { vin: vin.toString() },
        });
        if (affectedCount > 0) {
            return this.findOne(vin);
        }
        return null;
    }
    async remove(vin) {
        const affectedCount = await BikeModel_1.default.destroy({
            where: { vin: vin.toString() },
        });
        return affectedCount > 0;
    }
}
exports.SequelizeBikesRepository = SequelizeBikesRepository;
//# sourceMappingURL=BikesRepository.js.map