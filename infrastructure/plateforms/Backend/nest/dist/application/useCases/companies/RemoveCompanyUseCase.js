"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CompanyNotFoundError_1 = require("../../../domain/errors/companies/CompanyNotFoundError");
class RemoveCompanyUseCase {
    constructor(companyRepository) {
        this.companyRepository = companyRepository;
    }
    async execute(identifier) {
        const deletedCompany = await this.companyRepository.remove(identifier);
        if (deletedCompany instanceof CompanyNotFoundError_1.default) {
            throw new CompanyNotFoundError_1.default();
        }
        return deletedCompany;
    }
}
exports.default = RemoveCompanyUseCase;
//# sourceMappingURL=RemoveCompanyUseCase.js.map