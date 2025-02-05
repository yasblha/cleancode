"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SearchByModelUseCase {
    constructor(bikeRepository) {
        this.bikeRepository = bikeRepository;
    }
    async execute(model) {
        const allBikes = await this.bikeRepository.findAll();
        return allBikes.filter((bike) => bike.model.toLowerCase().includes(model.toLowerCase()));
    }
}
exports.default = SearchByModelUseCase;
//# sourceMappingURL=SearchByModelUseCase.js.map