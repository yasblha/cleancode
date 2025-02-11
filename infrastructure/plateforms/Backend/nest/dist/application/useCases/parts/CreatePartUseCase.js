"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreatePartUseCase {
    constructor(partRepository) {
        this.partRepository = partRepository;
    }
    async execute(part) {
        return this.partRepository.create(part);
    }
}
exports.default = CreatePartUseCase;
//# sourceMappingURL=CreatePartUseCase.js.map