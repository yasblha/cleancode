"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UpdateIncidentUseCase {
    constructor(incidentsRepository) {
        this.incidentsRepository = incidentsRepository;
    }
    async execute(id, incident) {
        return this.incidentsRepository.update(id, incident);
    }
}
exports.default = UpdateIncidentUseCase;
//# sourceMappingURL=UpdateIncidentUseCase.js.map