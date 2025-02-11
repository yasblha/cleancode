"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateAlertUseCase {
    constructor(alertRepository) {
        this.alertRepository = alertRepository;
    }
    async execute(alert) {
        return this.alertRepository.create(alert);
    }
}
exports.default = CreateAlertUseCase;
//# sourceMappingURL=CreateAlertUseCase.js.map