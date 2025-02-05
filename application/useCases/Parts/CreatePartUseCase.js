"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreatePartUseCase {
    constructor(partsRepository) {
        this.partsRepository = partsRepository;
    }
    async execute(part) {
        return this.partsRepository.create(part);
    }
}
exports.default = CreatePartUseCase;
//# sourceMappingURL=CreatePartUseCase.js.map