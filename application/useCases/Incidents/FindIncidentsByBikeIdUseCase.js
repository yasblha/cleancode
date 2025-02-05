"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FindIncidentsByBikeIdUseCase {
    constructor(incidentsRepository) {
        this.incidentsRepository = incidentsRepository;
    }
    async execute(bikeId) {
        return this.incidentsRepository.findByBikeId(bikeId);
    }
}
exports.default = FindIncidentsByBikeIdUseCase;
//# sourceMappingURL=FindIncidentsByBikeIdUseCase.js.map