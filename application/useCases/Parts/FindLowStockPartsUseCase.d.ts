import { PartsRepository } from '@domain/repositories/PartsRepository';
import { Parts } from '@domain/entities/Parts';
export default class FindLowStockPartsUseCase {
    private readonly partsRepository;
    constructor(partsRepository: PartsRepository);
    execute(): Promise<Parts[]>;
}
