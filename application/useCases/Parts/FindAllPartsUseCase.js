"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FindAllPartsUseCase {
    constructor(partsRepository) {
        this.partsRepository = partsRepository;
    }
    async execute() {
        return this.partsRepository.findAll();
    }
}
exports.default = FindAllPartsUseCase;
//# sourceMappingURL=FindAllPartsUseCase.js.map