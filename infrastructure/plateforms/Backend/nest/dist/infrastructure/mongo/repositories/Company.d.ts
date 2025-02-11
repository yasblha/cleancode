import Company from "@domain/entities/Company";
import CompanyRepository from "@domain/repositories/CompanyRepository";
import CompanyNotFoundError from "@domain/errors/companies/CompanyNotFoundError";
export default class MongooseCompanyRepository implements CompanyRepository {
    create(company: Company): Promise<Company>;
    update(identifier: string, company: Partial<Company>): Promise<Company | CompanyNotFoundError>;
    remove(identifier: string): Promise<number | CompanyNotFoundError>;
    findOne(identifier: string): Promise<Company | CompanyNotFoundError>;
    findAll(): Promise<Company[]>;
    searchByName(name: string): Promise<Company[]>;
}
