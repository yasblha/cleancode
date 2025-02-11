import { Response } from "express";
import CreateCompanyUseCase from "@application/useCases/companies/CreateCompanyUseCase";
import RemoveCompanyUseCase from "@application/useCases/companies/RemoveCompanyUseCase";
import UpdateCompanyUseCase from "@application/useCases/companies/UpdateCompanyUseCase";
import FindOneCompanyUseCase from "@application/useCases/companies/FindOneCompanyUseCase";
import FindAllCompanyUseCase from "@application/useCases/companies/FindAllCompanyUseCase";
import SearchByNameUseCase from "@application/useCases/companies/SearchByNameUseCase";
import { CompanyDto, UpdateCompanyDto } from "./CompanyDto";
export declare class CompanyController {
    private readonly CreateCompanyUseCase;
    private readonly RemoveCompanyUseCase;
    private readonly UpdateCompanyUseCase;
    private readonly FindOneCompanyUseCase;
    private readonly FindAllCompanyUseCase;
    private readonly SearchByNameUseCase;
    constructor(CreateCompanyUseCase: CreateCompanyUseCase, RemoveCompanyUseCase: RemoveCompanyUseCase, UpdateCompanyUseCase: UpdateCompanyUseCase, FindOneCompanyUseCase: FindOneCompanyUseCase, FindAllCompanyUseCase: FindAllCompanyUseCase, SearchByNameUseCase: SearchByNameUseCase);
    create(company: CompanyDto, response: Response): Promise<any>;
    update(identifier: string, company: UpdateCompanyDto): Promise<import("@domain/entities/Company").default>;
    remove(identifier: string, response: Response): Promise<any>;
    findAll(): Promise<import("@domain/entities/Company").default[]>;
    findOne(identifier: string): Promise<import("@domain/entities/Company").default>;
    searchByName(name: string): Promise<import("@domain/entities/Company").default[]>;
}
