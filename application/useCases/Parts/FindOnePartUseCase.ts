import { PartsRepository } from '@domain/repositories/PartsRepository';
import { Parts } from '@domain/entities/Parts';

export default class FindOnePartUseCase {
    constructor(private readonly partsRepository: PartsRepository) {}

    async execute(id: string): Promise<Parts | null> {
        return this.partsRepository.findOne(id);
    }
}