"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateBikeUseCase {
    constructor(bikeRepository) {
        this.bikeRepository = bikeRepository;
    }
    async execute(bike) {
        return this.bikeRepository.create(bike);
    }
}
exports.default = CreateBikeUseCase;
//# sourceMappingURL=CreateBikeUseCase.js.map