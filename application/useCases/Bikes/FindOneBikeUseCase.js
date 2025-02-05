"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FindOneBikeUseCase {
    constructor(bikeRepository) {
        this.bikeRepository = bikeRepository;
    }
    async execute(id) {
        return this.bikeRepository.findOne(id);
    }
}
exports.default = FindOneBikeUseCase;
//# sourceMappingURL=FindOneBikeUseCase.js.map