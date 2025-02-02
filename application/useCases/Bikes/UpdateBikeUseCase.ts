// application/useCases/Bikes/UpdateBikeUseCase.ts
import { BikesRepository } from '@domain/repositories/BikesRepository';
import { Bikes } from '@domain/entities/Bikes';

export default class UpdateBikeUseCase {
    constructor(private readonly bikeRepository: BikesRepository) {}

    async execute(id: string, bike: Partial<Bikes>): Promise<Bikes | null> {
        return this.bikeRepository.update(id, bike);
    }
}