"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IncidentNotFoundError_1 = require("../../../domain/errors/incidents/IncidentNotFoundError");
class RemoveIncidentUseCase {
    constructor(incidentRepository) {
        this.incidentRepository = incidentRepository;
    }
    async execute(identifier) {
        const deletedResult = await this.incidentRepository.remove(identifier);
        if (!deletedResult) {
            throw new IncidentNotFoundError_1.default("Incident not found");
        }
        return 1;
    }
}
exports.default = RemoveIncidentUseCase;
//# sourceMappingURL=RemoveIncidentUseCase.js.map