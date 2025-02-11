import { PartsRepository } from '@domain/repositories/PartsRepository';
import { Parts } from '@domain/entities/Parts';

export default class CreatePartUseCase {
  public constructor(
    private readonly partRepository: PartsRepository,
  ) {}

  public async execute(part: Parts): Promise<Parts> {
    return this.partRepository.create(part);
  }
}
