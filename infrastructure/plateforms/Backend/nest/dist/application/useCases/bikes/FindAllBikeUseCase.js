"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BikesErrors_1 = require("../../../domain/errors/BikesErrors");
class FindAllBikeUseCase {
    constructor(bikeRepository) {
        this.bikeRepository = bikeRepository;
    }
    async execute() {
        const bikes = await this.bikeRepository.findAll();
        if (!bikes || bikes.length === 0) {
            throw new BikesErrors_1.NoBikesFoundError();
        }
        return bikes;
    }
}
exports.default = FindAllBikeUseCase;
//# sourceMappingURL=FindAllBikeUseCase.js.map