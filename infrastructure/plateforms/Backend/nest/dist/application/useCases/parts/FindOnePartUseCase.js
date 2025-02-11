"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PartNotFoundError_1 = require("../../../domain/errors/parts/PartNotFoundError");
class FindOnePartUseCase {
    constructor(partRepository) {
        this.partRepository = partRepository;
    }
    async execute(identifier) {
        const part = await this.partRepository.findOne(identifier);
        if (!part) {
            throw new PartNotFoundError_1.default(`Part not found for identifier ${identifier}`);
        }
        return part;
    }
}
exports.default = FindOnePartUseCase;
//# sourceMappingURL=FindOnePartUseCase.js.map