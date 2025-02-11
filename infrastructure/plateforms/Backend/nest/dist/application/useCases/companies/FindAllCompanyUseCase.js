"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FindAllCompanyUseCase {
    constructor(companyRepository) {
        this.companyRepository = companyRepository;
    }
    async execute() {
        return this.companyRepository.findAll();
    }
}
exports.default = FindAllCompanyUseCase;
//# sourceMappingURL=FindAllCompanyUseCase.js.map