"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UpdatePartUseCase {
    constructor(partsRepository) {
        this.partsRepository = partsRepository;
    }
    async execute(id, part) {
        return this.partsRepository.update(id, part);
    }
}
exports.default = UpdatePartUseCase;
//# sourceMappingURL=UpdatePartUseCase.js.map