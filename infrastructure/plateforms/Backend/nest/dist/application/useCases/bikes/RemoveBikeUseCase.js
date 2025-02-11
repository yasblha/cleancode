"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BikesErrors_1 = require("../../../domain/errors/BikesErrors");
class RemoveBikeUseCase {
    constructor(bikeRepository) {
        this.bikeRepository = bikeRepository;
    }
    async execute(vin, userId) {
        if (!vin.value || !vin.value.trim()) {
            throw new BikesErrors_1.InvalidVinError("(vide)");
        }
        const existingBike = await this.bikeRepository.findOne(vin);
        if (!existingBike) {
            throw new BikesErrors_1.BikeNotFoundError(vin.value);
        }
        if (existingBike.isInMaintenance) {
            throw new BikesErrors_1.MaintenanceInProgressError(vin.value);
        }
        return this.bikeRepository.remove(vin);
    }
}
exports.default = RemoveBikeUseCase;
//# sourceMappingURL=RemoveBikeUseCase.js.map