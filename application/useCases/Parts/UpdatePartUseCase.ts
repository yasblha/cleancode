import { PartsRepository } from '@domain/repositories/PartsRepository';
import { Parts } from '@domain/entities/Parts';

export default class UpdatePartUseCase {
    constructor(private readonly partsRepository: PartsRepository) {}

    async execute(id: string, part: Partial<Parts>): Promise<Parts | null> {
        return this.partsRepository.update(id, part);
    }
}