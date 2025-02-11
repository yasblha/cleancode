import Company from "@domain/entities/Company";
import MongooseCompanyRepository from "@infrastructure/mongo/repositories/Company";
export default class CreateCompanyUseCase {
    private readonly companyRepository;
    constructor(companyRepository: MongooseCompanyRepository);
    execute(company: Company): Promise<Company>;
}
