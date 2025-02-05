"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FindAllIncidentsUseCase {
    constructor(incidentsRepository) {
        this.incidentsRepository = incidentsRepository;
    }
    async execute() {
        return this.incidentsRepository.findAll();
    }
}
exports.default = FindAllIncidentsUseCase;
//# sourceMappingURL=FindAllIncidentsUseCase.js.map