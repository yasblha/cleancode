import CreateCompanyUseCase from "@application/useCases/companies/CreateCompanyUseCase";
import RemoveCompanyUseCase from "@application/useCases/companies/RemoveCompanyUseCase";
import UpdateCompanyUseCase from "@application/useCases/companies/UpdateCompanyUseCase";
import FindOneCompanyUseCase from "@application/useCases/companies/FindOneCompanyUseCase";
import FindAllCompanyUseCase from "@application/useCases/companies/FindAllCompanyUseCase";
import SearchByNameUseCase from "@application/useCases/companies/SearchByNameUseCase";
import MongooseCompanyRepository from "@infrastructure/mongo/repositories/Company";
export declare const CreateCompanyUseCaseProvider: {
    provide: typeof CreateCompanyUseCase;
    useFactory: (companyRepository: MongooseCompanyRepository) => CreateCompanyUseCase;
    inject: (typeof MongooseCompanyRepository)[];
};
export declare const RemoveCompanyUseCaseProvider: {
    provide: typeof RemoveCompanyUseCase;
    useFactory: (companyRepository: MongooseCompanyRepository) => RemoveCompanyUseCase;
    inject: (typeof MongooseCompanyRepository)[];
};
export declare const UpdateCompanyUseCaseProvider: {
    provide: typeof UpdateCompanyUseCase;
    useFactory: (companyRepository: MongooseCompanyRepository) => UpdateCompanyUseCase;
    inject: (typeof MongooseCompanyRepository)[];
};
export declare const FindOneCompanyUseCaseProvider: {
    provide: typeof FindOneCompanyUseCase;
    useFactory: (companyRepository: MongooseCompanyRepository) => FindOneCompanyUseCase;
    inject: (typeof MongooseCompanyRepository)[];
};
export declare const FindAllCompanyUseCaseProvider: {
    provide: typeof FindAllCompanyUseCase;
    useFactory: (companyRepository: MongooseCompanyRepository) => FindAllCompanyUseCase;
    inject: (typeof MongooseCompanyRepository)[];
};
export declare const SearchByNameUseCaseProvider: {
    provide: typeof SearchByNameUseCase;
    useFactory: (companyRepository: MongooseCompanyRepository) => SearchByNameUseCase;
    inject: (typeof MongooseCompanyRepository)[];
};
declare const _default: ({
    provide: typeof CreateCompanyUseCase;
    useFactory: (companyRepository: MongooseCompanyRepository) => CreateCompanyUseCase;
    inject: (typeof MongooseCompanyRepository)[];
} | {
    provide: typeof RemoveCompanyUseCase;
    useFactory: (companyRepository: MongooseCompanyRepository) => RemoveCompanyUseCase;
    inject: (typeof MongooseCompanyRepository)[];
} | {
    provide: typeof UpdateCompanyUseCase;
    useFactory: (companyRepository: MongooseCompanyRepository) => UpdateCompanyUseCase;
    inject: (typeof MongooseCompanyRepository)[];
} | {
    provide: typeof FindOneCompanyUseCase;
    useFactory: (companyRepository: MongooseCompanyRepository) => FindOneCompanyUseCase;
    inject: (typeof MongooseCompanyRepository)[];
} | {
    provide: typeof FindAllCompanyUseCase;
    useFactory: (companyRepository: MongooseCompanyRepository) => FindAllCompanyUseCase;
    inject: (typeof MongooseCompanyRepository)[];
} | {
    provide: typeof SearchByNameUseCase;
    useFactory: (companyRepository: MongooseCompanyRepository) => SearchByNameUseCase;
    inject: (typeof MongooseCompanyRepository)[];
})[];
export default _default;
