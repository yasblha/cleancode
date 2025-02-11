import { PartsRepository } from '@domain/repositories/PartsRepository';
import { Parts } from '@domain/entities/Parts';
export default class FindAllPartUseCase {
    private readonly partRepository;
    constructor(partRepository: PartsRepository);
    execute(): Promise<Parts[]>;
}
