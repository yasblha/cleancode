import CompanyNotFoundError from "@domain/errors/companies/CompanyNotFoundError";
import Company from "@domain/entities/Company";
import MongooseCompanyRepository from "@infrastructure/mongo/repositories/Company";

export default class FindOneCompanyUseCase {
  public constructor(
    private readonly companyRepository: MongooseCompanyRepository,
  ) {}

  public async execute(identifier: string): Promise<Company> {
    const company = await this.companyRepository.findOne(identifier);

    if (company instanceof CompanyNotFoundError) {
      throw new CompanyNotFoundError();
    }

    return company;
  }
}
