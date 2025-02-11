import Company from "@domain/entities/Company";
import MongooseCompanyRepository from "@infrastructure/mongo/repositories/Company";
export default class SearchByNameUseCase {
    private readonly companyRepository;
    constructor(companyRepository: MongooseCompanyRepository);
    execute(name: string): Promise<Company[]>;
}
