import { PartsRepository } from '@domain/repositories/PartsRepository';
import { Parts } from '@domain/entities/Parts';

export default class FindLowStockPartsUseCase {
  public constructor(
    private readonly partRepository: PartsRepository,
  ) {}

  public async execute(): Promise<Parts[]> {
    return this.partRepository.findLowStockParts();
  }
}