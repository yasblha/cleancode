"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FindAllIncidentUseCase {
    constructor(incidentRepository) {
        this.incidentRepository = incidentRepository;
    }
    async execute() {
        return this.incidentRepository.findAll();
    }
}
exports.default = FindAllIncidentUseCase;
//# sourceMappingURL=FindAllIncidentUseCase.js.map