"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCompanyUseCase {
    constructor(companyRepository) {
        this.companyRepository = companyRepository;
    }
    async execute(company) {
        return this.companyRepository.create(company);
    }
}
exports.default = CreateCompanyUseCase;
//# sourceMappingURL=CreateCompanyUseCase.js.map