"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FindAllAlertUseCase {
    constructor(alertRepository) {
        this.alertRepository = alertRepository;
    }
    async execute() {
        return this.alertRepository.findAll();
    }
}
exports.default = FindAllAlertUseCase;
//# sourceMappingURL=FindAllAlertUseCase.js.map