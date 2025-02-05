import { PartsRepository } from '@domain/repositories/PartsRepository';
import { Parts } from '@domain/entities/Parts';
export default class FindAllPartsUseCase {
    private readonly partsRepository;
    constructor(partsRepository: PartsRepository);
    execute(): Promise<Parts[]>;
}
