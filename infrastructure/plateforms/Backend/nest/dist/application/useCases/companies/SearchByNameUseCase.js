"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SearchByNameUseCase {
    constructor(companyRepository) {
        this.companyRepository = companyRepository;
    }
    async execute(name) {
        return this.companyRepository.searchByName(name);
    }
}
exports.default = SearchByNameUseCase;
//# sourceMappingURL=SearchByNameUseCase.js.map