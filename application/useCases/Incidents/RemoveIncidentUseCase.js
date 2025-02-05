"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RemoveIncidentUseCase {
    constructor(incidentsRepository) {
        this.incidentsRepository = incidentsRepository;
    }
    async execute(id) {
        return this.incidentsRepository.remove(id);
    }
}
exports.default = RemoveIncidentUseCase;
//# sourceMappingURL=RemoveIncidentUseCase.js.map