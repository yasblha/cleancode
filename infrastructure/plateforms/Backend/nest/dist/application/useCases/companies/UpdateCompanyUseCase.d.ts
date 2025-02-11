import Company from "@domain/entities/Company";
import MongooseCompanyRepository from "@infrastructure/mongo/repositories/Company";
export default class UpdateCompanyUseCase {
    private readonly companyRepository;
    constructor(companyRepository: MongooseCompanyRepository);
    execute(identifier: string, company: Partial<Company>): Promise<Company>;
}
