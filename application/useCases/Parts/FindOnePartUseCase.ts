import PartNotFoundError from "@domain/errors/parts/PartNotFoundError";
import { PartsRepository } from '@domain/repositories/PartsRepository';
import { Parts } from '@domain/entities/Parts';

export default class FindOnePartUseCase {
  public constructor(
      private readonly partRepository: PartsRepository,
  ) {}

  public async execute(identifier: string): Promise<Parts> {
    const part = await this.partRepository.findOne(identifier);

    if (!part) {
      throw new PartNotFoundError(`Part not found for identifier ${identifier}`);
    }

    return part;
  }
}
