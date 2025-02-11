import { SequelizePartsRepository } from "@infrastructure/sequelize/repositories/PartsRepository";
import { Parts } from "./Parts";
import PartNotFoundError from "../errors/parts/PartNotFoundError";

export default class Alert {
  constructor(
      public readonly title: string,
      public readonly description: string,
      public part?: string | Parts,
      public readonly identifier?: string,
  ) {}

  static async fromMongoModel(
      mongoAlert: any,
      partRepository: SequelizePartsRepository,
      _includeRelations: boolean = true,
  ): Promise<Alert> {
    return new Alert(
        mongoAlert.title,
        mongoAlert.description,
        mongoAlert.part
            ? await this.findPart(mongoAlert.part, partRepository)
            : mongoAlert.part,
        mongoAlert.identifier,
    );
  }

  static async findPart(
      partIdentifier: string,
      partRepository: SequelizePartsRepository,
  ): Promise<Parts> {
    const part = await partRepository.findOne(partIdentifier);
    if (!part) {
      throw new PartNotFoundError(`Part with identifier ${partIdentifier} not found`);
    }
    return part;
  }
}
