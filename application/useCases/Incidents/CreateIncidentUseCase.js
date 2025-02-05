"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateIncidentUseCase {
    constructor(incidentsRepository) {
        this.incidentsRepository = incidentsRepository;
    }
    async execute(incident) {
        return this.incidentsRepository.create(incident);
    }
}
exports.default = CreateIncidentUseCase;
//# sourceMappingURL=CreateIncidentUseCase.js.map