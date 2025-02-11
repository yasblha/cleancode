import MongooseCompanyRepository from "@infrastructure/mongo/repositories/Company";
export default class RemoveCompanyUseCase {
    private readonly companyRepository;
    constructor(companyRepository: MongooseCompanyRepository);
    execute(identifier: string): Promise<number>;
}
