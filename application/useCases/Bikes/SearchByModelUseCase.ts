// application/useCases/Bikes/SearchByModelUseCase.ts
import { BikesRepository } from '@domain/repositories/BikesRepository';
import { Bikes } from '@domain/entities/Bikes';

export default class SearchByModelUseCase {
    constructor(private readonly bikeRepository: BikesRepository) {}

    async execute(model: string): Promise<Bikes[]> {
        // Implémenter la logique de recherche par modèle

        const allBikes = await this.bikeRepository.findAll();
        return allBikes.filter((bike) => bike.model.toLowerCase().includes(model.toLowerCase()));
    }
}