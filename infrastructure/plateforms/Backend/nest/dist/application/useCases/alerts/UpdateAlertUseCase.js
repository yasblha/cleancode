"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AlertNotFoundError_1 = require("../../../domain/errors/alerts/AlertNotFoundError");
class UpdateAlertUseCase {
    constructor(alertRepository) {
        this.alertRepository = alertRepository;
    }
    async execute(identifier, alert) {
        const updatedAlert = await this.alertRepository.update(identifier, alert);
        if (updatedAlert instanceof AlertNotFoundError_1.default) {
            throw new AlertNotFoundError_1.default();
        }
        return updatedAlert;
    }
}
exports.default = UpdateAlertUseCase;
//# sourceMappingURL=UpdateAlertUseCase.js.map