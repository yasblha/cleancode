import Company from "@domain/entities/Company";
import MongooseCompanyRepository from "@infrastructure/mongo/repositories/Company";
export default class FindOneCompanyUseCase {
    private readonly companyRepository;
    constructor(companyRepository: MongooseCompanyRepository);
    execute(identifier: string): Promise<Company>;
}
