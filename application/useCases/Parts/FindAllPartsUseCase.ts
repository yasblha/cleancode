import { PartsRepository } from '@domain/repositories/PartsRepository';
import { Parts } from '@domain/entities/Parts';

export default class FindAllPartsUseCase {
    constructor(private readonly partsRepository: PartsRepository) {}

    async execute(): Promise<Parts[]> {
        return this.partsRepository.findAll();
    }
}