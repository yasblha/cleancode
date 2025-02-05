"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FindLowStockPartsUseCase {
    constructor(partsRepository) {
        this.partsRepository = partsRepository;
    }
    async execute() {
        return this.partsRepository.findLowStockParts();
    }
}
exports.default = FindLowStockPartsUseCase;
//# sourceMappingURL=FindLowStockPartsUseCase.js.map