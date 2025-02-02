import { BikesRepository } from '@domain/repositories/BikesRepository';
import { Bikes } from '@domain/entities/Bikes';

export default class FindOneBikeUseCase {
    constructor(private readonly bikeRepository: BikesRepository) {}

    async execute(id: string): Promise<Bikes | null> {
        return this.bikeRepository.findOne(id);
    }
}