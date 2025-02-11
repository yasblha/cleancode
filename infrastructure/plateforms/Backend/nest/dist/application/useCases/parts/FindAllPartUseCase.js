"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FindAllPartUseCase {
    constructor(partRepository) {
        this.partRepository = partRepository;
    }
    async execute() {
        return this.partRepository.findAll();
    }
}
exports.default = FindAllPartUseCase;
//# sourceMappingURL=FindAllPartUseCase.js.map