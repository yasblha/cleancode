import { Bikes } from "./Bikes";
export default class Company {
    readonly identifier: string;
    readonly name: string;
    readonly email: string;
    readonly address: string;
    readonly phone: string;
    readonly bikes?: Partial<Bikes>[] | undefined;
    readonly createdAt?: Date | undefined;
    readonly updatedAt?: Date | undefined;
    constructor(identifier: string, name: string, email: string, address: string, phone: string, bikes?: Partial<Bikes>[] | undefined, createdAt?: Date | undefined, updatedAt?: Date | undefined);
    static fromMongoModel(mongoCompany: any, _includeRelations?: boolean): Company;
}
