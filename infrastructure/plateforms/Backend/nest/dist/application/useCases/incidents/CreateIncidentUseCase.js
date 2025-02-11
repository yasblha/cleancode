"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateIncidentUseCase {
    constructor(incidentRepository) {
        this.incidentRepository = incidentRepository;
    }
    async execute(incident) {
        return this.incidentRepository.create(incident);
    }
}
exports.default = CreateIncidentUseCase;
//# sourceMappingURL=CreateIncidentUseCase.js.map