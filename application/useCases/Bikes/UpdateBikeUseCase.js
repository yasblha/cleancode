"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UpdateBikeUseCase {
    constructor(bikeRepository) {
        this.bikeRepository = bikeRepository;
    }
    async execute(id, bike) {
        return this.bikeRepository.update(id, bike);
    }
}
exports.default = UpdateBikeUseCase;
//# sourceMappingURL=UpdateBikeUseCase.js.map