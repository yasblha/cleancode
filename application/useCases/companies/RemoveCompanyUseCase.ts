import CompanyNotFoundError from "@domain/errors/companies/CompanyNotFoundError";
//import Company from "@domain/entities/Company";
import MongooseCompanyRepository from "@infrastructure/mongo/repositories/Company";

export default class RemoveCompanyUseCase {
  public constructor(
    private readonly companyRepository: MongooseCompanyRepository,
  ) {}

  public async execute(identifier: string): Promise<number> {
    const deletedCompany = await this.companyRepository.remove(identifier);

    if (deletedCompany instanceof CompanyNotFoundError) {
      throw new CompanyNotFoundError();
    }

    return deletedCompany;
  }
}
