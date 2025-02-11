import { SequelizePartsRepository } from "@infrastructure/sequelize/repositories/PartsRepository";
import { Parts } from "./Parts";
export default class Alert {
    readonly title: string;
    readonly description: string;
    part?: (string | Parts) | undefined;
    readonly identifier?: string | undefined;
    constructor(title: string, description: string, part?: (string | Parts) | undefined, identifier?: string | undefined);
    static fromMongoModel(mongoAlert: any, partRepository: SequelizePartsRepository, _includeRelations?: boolean): Promise<Alert>;
    static findPart(partIdentifier: string, partRepository: SequelizePartsRepository): Promise<Parts>;
}
