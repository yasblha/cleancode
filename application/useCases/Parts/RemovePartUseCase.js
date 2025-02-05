"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RemovePartUseCase {
    constructor(partsRepository) {
        this.partsRepository = partsRepository;
    }
    async execute(id) {
        return this.partsRepository.remove(id);
    }
}
exports.default = RemovePartUseCase;
//# sourceMappingURL=RemovePartUseCase.js.map