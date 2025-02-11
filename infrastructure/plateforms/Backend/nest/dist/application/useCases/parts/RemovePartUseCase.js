"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PartNotFoundError_1 = require("../../../domain/errors/parts/PartNotFoundError");
class RemovePartUseCase {
    constructor(partRepository) {
        this.partRepository = partRepository;
    }
    async execute(identifier) {
        const deletedPart = await this.partRepository.remove(identifier);
        if (!deletedPart) {
            throw new PartNotFoundError_1.default("Part not found");
        }
        return 1;
    }
}
exports.default = RemovePartUseCase;
//# sourceMappingURL=RemovePartUseCase.js.map