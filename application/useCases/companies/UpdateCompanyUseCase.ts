import CompanyNotFoundError from "@domain/errors/companies/CompanyNotFoundError";
import Company from "@domain/entities/Company";
import MongooseCompanyRepository from "@infrastructure/mongo/repositories/Company";

export default class UpdateCompanyUseCase {
  public constructor(
    private readonly companyRepository: MongooseCompanyRepository,
  ) {}

  public async execute(
    identifier: string,
    company: Partial<Company>,
  ): Promise<Company> {
    const updatedCompany = await this.companyRepository.update(
      identifier,
      company,
    );

    if (updatedCompany instanceof CompanyNotFoundError) {
      throw new CompanyNotFoundError();
    }

    return updatedCompany;
  }
}
