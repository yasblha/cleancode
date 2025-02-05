"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RemoveBikeUseCase {
    constructor(bikeRepository) {
        this.bikeRepository = bikeRepository;
    }
    async execute(id) {
        return this.bikeRepository.remove(id);
    }
}
exports.default = RemoveBikeUseCase;
//# sourceMappingURL=RemoveBikeUseCase.js.map