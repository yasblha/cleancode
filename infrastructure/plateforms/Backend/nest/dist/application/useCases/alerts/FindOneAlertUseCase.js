"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AlertNotFoundError_1 = require("../../../domain/errors/alerts/AlertNotFoundError");
class FindOneAlertUseCase {
    constructor(alertRepository) {
        this.alertRepository = alertRepository;
    }
    async execute(identifier) {
        const alert = await this.alertRepository.findOne(identifier);
        if (alert instanceof AlertNotFoundError_1.default) {
            throw new AlertNotFoundError_1.default();
        }
        return alert;
    }
}
exports.default = FindOneAlertUseCase;
//# sourceMappingURL=FindOneAlertUseCase.js.map