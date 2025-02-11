"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CompanyNotFoundError_1 = require("../../../domain/errors/companies/CompanyNotFoundError");
class UpdateCompanyUseCase {
    constructor(companyRepository) {
        this.companyRepository = companyRepository;
    }
    async execute(identifier, company) {
        const updatedCompany = await this.companyRepository.update(identifier, company);
        if (updatedCompany instanceof CompanyNotFoundError_1.default) {
            throw new CompanyNotFoundError_1.default();
        }
        return updatedCompany;
    }
}
exports.default = UpdateCompanyUseCase;
//# sourceMappingURL=UpdateCompanyUseCase.js.map