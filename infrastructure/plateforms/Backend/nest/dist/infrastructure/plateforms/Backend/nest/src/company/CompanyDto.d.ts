import Company from "@domain/entities/Company";
export declare class CompanyDto implements Partial<Company> {
    readonly identifier: string;
    readonly name: string;
    readonly email: string;
    readonly address: string;
    readonly phone: string;
    readonly bikes: any;
}
export declare class UpdateCompanyDto implements Partial<Company> {
    readonly name?: string;
    readonly email?: string;
    readonly address?: string;
    readonly phone?: string;
    readonly bikesVin?: string[];
}
