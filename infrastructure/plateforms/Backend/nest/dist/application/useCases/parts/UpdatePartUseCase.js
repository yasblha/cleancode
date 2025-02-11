"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PartNotFoundError_1 = require("../../../domain/errors/parts/PartNotFoundError");
class UpdatePartUseCase {
    constructor(partRepository, createAlertUseCase) {
        this.partRepository = partRepository;
        this.createAlertUseCase = createAlertUseCase;
    }
    async execute(identifier, part) {
        const updatedPart = await this.partRepository.update(identifier, part);
        if (!updatedPart) {
            throw new PartNotFoundError_1.default("Part not found");
        }
        if (updatedPart.minStockLevel > updatedPart.stockQuantity) {
            const alert = {
                title: "Low stock",
                description: "The stock is low, please order more",
                part: identifier,
            };
            await this.createAlertUseCase.execute(alert);
        }
        return updatedPart;
    }
}
exports.default = UpdatePartUseCase;
//# sourceMappingURL=UpdatePartUseCase.js.map