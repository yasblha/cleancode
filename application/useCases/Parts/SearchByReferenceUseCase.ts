import { SequelizePartsRepository } from '@infrastructure/sequelize/repositories/PartsRepository';
import { Parts } from '@domain/entities/Parts';

export default class SearchByReferenceUseCase {
  public constructor(
    private readonly partRepository: SequelizePartsRepository,
  ) {}

  public async execute(reference: string): Promise<Parts[]> {
    return this.partRepository.searchByReference(reference);
  }
}
