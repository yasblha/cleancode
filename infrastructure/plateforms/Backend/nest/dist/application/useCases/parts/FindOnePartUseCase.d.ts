import { PartsRepository } from '@domain/repositories/PartsRepository';
import { Parts } from '@domain/entities/Parts';
export default class FindOnePartUseCase {
    private readonly partRepository;
    constructor(partRepository: PartsRepository);
    execute(identifier: string): Promise<Parts>;
}
