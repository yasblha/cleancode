import { BikesRepository } from '../../../domain/repositories/BikesRepository';
import { Bikes } from '../../../domain/entities/Bikes';

export default class SearchByVinUseCase {
    constructor(private readonly bikeRepository: BikesRepository) {}

    async execute(vin: string): Promise<Bikes | null> {
        // Implémenter la logique de recherche par VIN

        const allBikes = await this.bikeRepository.findAll();
        return allBikes.find((bike) => bike.registrationNumber === vin) || null;
    }
}