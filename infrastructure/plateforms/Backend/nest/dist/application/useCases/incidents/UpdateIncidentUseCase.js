"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IncidentNotFoundError_1 = require("../../../domain/errors/incidents/IncidentNotFoundError");
class UpdateIncidentUseCase {
    constructor(incidentRepository) {
        this.incidentRepository = incidentRepository;
    }
    async execute(identifier, incident) {
        const updatedIncident = await this.incidentRepository.update(identifier, incident);
        if (!updatedIncident) {
            throw new IncidentNotFoundError_1.default(`Incident with id ${identifier} not found`);
        }
        return updatedIncident;
    }
}
exports.default = UpdateIncidentUseCase;
//# sourceMappingURL=UpdateIncidentUseCase.js.map