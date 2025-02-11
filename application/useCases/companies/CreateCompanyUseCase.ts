import Company from "@domain/entities/Company";
import MongooseCompanyRepository from "@infrastructure/mongo/repositories/Company";

export default class CreateCompanyUseCase {
  public constructor(
    private readonly companyRepository: MongooseCompanyRepository,
  ) {}

  public async execute(company: Company): Promise<Company> {
    return this.companyRepository.create(company);
  }
}
