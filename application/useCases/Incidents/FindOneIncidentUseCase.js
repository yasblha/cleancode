"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FindOneIncidentUseCase {
    constructor(incidentsRepository) {
        this.incidentsRepository = incidentsRepository;
    }
    async execute(id) {
        return this.incidentsRepository.findOne(id);
    }
}
exports.default = FindOneIncidentUseCase;
//# sourceMappingURL=FindOneIncidentUseCase.js.map