"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IncidentNotFoundError_1 = require("../../../domain/errors/incidents/IncidentNotFoundError");
class FindOneIncidentUseCase {
    constructor(incidentRepository) {
        this.incidentRepository = incidentRepository;
    }
    async execute(identifier) {
        const incident = await this.incidentRepository.findOne(identifier);
        if (!incident) {
            throw new IncidentNotFoundError_1.default("Incident not found");
        }
        return incident;
    }
}
exports.default = FindOneIncidentUseCase;
//# sourceMappingURL=FindOneIncidentUseCase.js.map