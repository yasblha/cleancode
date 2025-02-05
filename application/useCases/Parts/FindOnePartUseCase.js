"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FindOnePartUseCase {
    constructor(partsRepository) {
        this.partsRepository = partsRepository;
    }
    async execute(id) {
        return this.partsRepository.findOne(id);
    }
}
exports.default = FindOnePartUseCase;
//# sourceMappingURL=FindOnePartUseCase.js.map