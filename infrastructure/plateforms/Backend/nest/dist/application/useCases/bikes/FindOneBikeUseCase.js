"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Vinidentifier_1 = require("../../../domain/value-objects/Vinidentifier");
const BikesErrors_1 = require("../../../domain/errors/BikesErrors");
class FindOneBikeUseCase {
    constructor(bikeRepository) {
        this.bikeRepository = bikeRepository;
    }
    async execute(vinInput) {
        if (typeof vinInput !== "string") {
            throw new BikesErrors_1.InvalidVinError("Le VIN fourni n'est pas une chaîne de caractères.");
        }
        if (!vinInput) {
            throw new BikesErrors_1.InvalidVinError("Le VIN est manquant.");
        }
        const vin = new Vinidentifier_1.default(vinInput);
        const bike = await this.bikeRepository.findOne(vin);
        if (!bike) {
            throw new BikesErrors_1.BikeNotFoundError(vin.value);
        }
        return bike;
    }
}
exports.default = FindOneBikeUseCase;
//# sourceMappingURL=FindOneBikeUseCase.js.map