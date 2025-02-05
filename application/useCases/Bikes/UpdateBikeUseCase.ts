import { BikesRepository } from '@domain/repositories/BikesRepository';
import { Bikes } from '@domain/entities/Bikes';
import VinIdentifier from "@domain/value-objects/Vinidentifier";

export default class UpdateBikeUseCase {
    constructor(private readonly bikeRepository: BikesRepository) {}

    async execute(vin: VinIdentifier, bike: Partial<Bikes>): Promise<Bikes | null> {
        return this.bikeRepository.update(vin, bike);
    }
}