"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UpdateBikeUseCase {
    constructor(bikeRepository) {
        this.bikeRepository = bikeRepository;
    }
    async execute(vin, bike) {
        return this.bikeRepository.update(vin, bike);
    }
}
exports.default = UpdateBikeUseCase;
//# sourceMappingURL=UpdateBikeUseCase.js.map