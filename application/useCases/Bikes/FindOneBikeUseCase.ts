import { BikesRepository } from '@domain/repositories/BikesRepository';
import { Bikes } from '@domain/entities/Bikes';
import VinIdentifier from "@domain/value-objects/Vinidentifier";

export default class FindOneBikeUseCase {
    constructor(private readonly bikeRepository: BikesRepository) {}

    async execute(vin: VinIdentifier): Promise<Bikes | null> {
        return this.bikeRepository.findOne(vin);
    }
}