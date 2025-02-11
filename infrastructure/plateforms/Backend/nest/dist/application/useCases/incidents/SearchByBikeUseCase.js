"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SearchByBikeUseCase {
    constructor(incidentRepository) {
        this.incidentRepository = incidentRepository;
    }
    async execute(vin) {
        return this.incidentRepository.searchByBikeVin(vin);
    }
}
exports.default = SearchByBikeUseCase;
//# sourceMappingURL=SearchByBikeUseCase.js.map