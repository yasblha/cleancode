import { PartsRepository } from '@domain/repositories/PartsRepository';
import { Parts } from '@domain/entities/Parts';
export default class FindOnePartUseCase {
    private readonly partsRepository;
    constructor(partsRepository: PartsRepository);
    execute(id: string): Promise<Parts | null>;
}
