import { PartsRepository } from '@domain/repositories/PartsRepository';
import { Parts } from '@domain/entities/Parts';
export default class CreatePartUseCase {
    private readonly partRepository;
    constructor(partRepository: PartsRepository);
    execute(part: Parts): Promise<Parts>;
}
