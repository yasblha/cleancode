import { PartsRepository } from '@domain/repositories/PartsRepository';
import { Parts } from '@domain/entities/Parts';
import PartNotFoundError from "@domain/errors/parts/PartNotFoundError";

import CreateAlertUseCase from "../alerts/CreateAlertUseCase";
import Alert from "@domain/entities/alert";

export default class UpdatePartUseCase {
  public constructor(
      private readonly partRepository: PartsRepository,
      private readonly createAlertUseCase: CreateAlertUseCase,
  ) {}

  public async execute(identifier: string, part: Partial<Parts>): Promise<Parts> {
    const updatedPart = await this.partRepository.update(identifier, part);

    if (!updatedPart) {
      throw new PartNotFoundError("Part not found");
    }

    if (updatedPart.minStockLevel > updatedPart.stockQuantity) {
      const alert: Alert = {
        title: "Low stock",
        description: "The stock is low, please order more",
        part: identifier,
      };
      await this.createAlertUseCase.execute(alert);
    }

    return updatedPart;
  }
}
