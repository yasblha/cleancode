import { SequelizePartsRepository } from '@infrastructure/sequelize/repositories/PartsRepository';
import { Parts } from '@domain/entities/Parts';
export default class SearchByReferenceUseCase {
    private readonly partRepository;
    constructor(partRepository: SequelizePartsRepository);
    execute(reference: string): Promise<Parts[]>;
}
