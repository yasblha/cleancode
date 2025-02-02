import { BikesRepository } from '@domain/repositories/BikesRepository';
import { Bikes } from '@domain/entities/Bikes';

export default class FindAllBikeUseCase {
    constructor(private readonly bikeRepository: BikesRepository) {}

    async execute(): Promise<Bikes[]> {
        return this.bikeRepository.findAll();
    }
}