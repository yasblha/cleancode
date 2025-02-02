import { PartsRepository } from '@domain/repositories/PartsRepository';

export default class RemovePartUseCase {
    constructor(private readonly partsRepository: PartsRepository) {}

    async execute(id: string): Promise<boolean> {
        return this.partsRepository.remove(id);
    }
}