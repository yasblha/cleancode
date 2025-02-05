"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SearchByVinUseCase {
    constructor(bikeRepository) {
        this.bikeRepository = bikeRepository;
    }
    async execute(vin) {
        const allBikes = await this.bikeRepository.findAll();
        return allBikes.find((bike) => bike.registrationNumber === vin) || null;
    }
}
exports.default = SearchByVinUseCase;
//# sourceMappingURL=SearchByVinUseCase.js.map