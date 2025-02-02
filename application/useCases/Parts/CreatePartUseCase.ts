import { PartsRepository } from '@domain/repositories/PartsRepository';
import { Parts } from '@domain/entities/Parts';

export default class CreatePartUseCase {
    constructor(private readonly partsRepository: PartsRepository) {}

    async execute(part: Parts): Promise<Parts> {
        return this.partsRepository.create(part);
    }
}