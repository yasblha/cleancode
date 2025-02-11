"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CompanyNotFoundError_1 = require("../../../domain/errors/companies/CompanyNotFoundError");
class FindOneCompanyUseCase {
    constructor(companyRepository) {
        this.companyRepository = companyRepository;
    }
    async execute(identifier) {
        const company = await this.companyRepository.findOne(identifier);
        if (company instanceof CompanyNotFoundError_1.default) {
            throw new CompanyNotFoundError_1.default();
        }
        return company;
    }
}
exports.default = FindOneCompanyUseCase;
//# sourceMappingURL=FindOneCompanyUseCase.js.map