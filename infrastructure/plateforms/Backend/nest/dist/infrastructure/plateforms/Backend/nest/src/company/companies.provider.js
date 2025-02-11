"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchByNameUseCaseProvider = exports.FindAllCompanyUseCaseProvider = exports.FindOneCompanyUseCaseProvider = exports.UpdateCompanyUseCaseProvider = exports.RemoveCompanyUseCaseProvider = exports.CreateCompanyUseCaseProvider = void 0;
const CreateCompanyUseCase_1 = require("../../../../../../application/useCases/companies/CreateCompanyUseCase");
const RemoveCompanyUseCase_1 = require("../../../../../../application/useCases/companies/RemoveCompanyUseCase");
const UpdateCompanyUseCase_1 = require("../../../../../../application/useCases/companies/UpdateCompanyUseCase");
const FindOneCompanyUseCase_1 = require("../../../../../../application/useCases/companies/FindOneCompanyUseCase");
const FindAllCompanyUseCase_1 = require("../../../../../../application/useCases/companies/FindAllCompanyUseCase");
const SearchByNameUseCase_1 = require("../../../../../../application/useCases/companies/SearchByNameUseCase");
const Company_1 = require("../../../../../mongo/repositories/Company");
exports.CreateCompanyUseCaseProvider = {
    provide: CreateCompanyUseCase_1.default,
    useFactory: (companyRepository) => new CreateCompanyUseCase_1.default(companyRepository),
    inject: [Company_1.default],
};
exports.RemoveCompanyUseCaseProvider = {
    provide: RemoveCompanyUseCase_1.default,
    useFactory: (companyRepository) => new RemoveCompanyUseCase_1.default(companyRepository),
    inject: [Company_1.default],
};
exports.UpdateCompanyUseCaseProvider = {
    provide: UpdateCompanyUseCase_1.default,
    useFactory: (companyRepository) => new UpdateCompanyUseCase_1.default(companyRepository),
    inject: [Company_1.default],
};
exports.FindOneCompanyUseCaseProvider = {
    provide: FindOneCompanyUseCase_1.default,
    useFactory: (companyRepository) => new FindOneCompanyUseCase_1.default(companyRepository),
    inject: [Company_1.default],
};
exports.FindAllCompanyUseCaseProvider = {
    provide: FindAllCompanyUseCase_1.default,
    useFactory: (companyRepository) => new FindAllCompanyUseCase_1.default(companyRepository),
    inject: [Company_1.default],
};
exports.SearchByNameUseCaseProvider = {
    provide: SearchByNameUseCase_1.default,
    useFactory: (companyRepository) => new SearchByNameUseCase_1.default(companyRepository),
    inject: [Company_1.default],
};
exports.default = [
    exports.CreateCompanyUseCaseProvider,
    exports.RemoveCompanyUseCaseProvider,
    exports.UpdateCompanyUseCaseProvider,
    exports.FindOneCompanyUseCaseProvider,
    exports.FindAllCompanyUseCaseProvider,
    exports.SearchByNameUseCaseProvider,
];
//# sourceMappingURL=companies.provider.js.map