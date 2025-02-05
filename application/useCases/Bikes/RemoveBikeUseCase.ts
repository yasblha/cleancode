import { BikesRepository } from '@domain/repositories/BikesRepository';
import VinIdentifier from "@domain/value-objects/Vinidentifier";

export default class RemoveBikeUseCase {
    constructor(private readonly bikeRepository: BikesRepository) {}

    async execute(vin: VinIdentifier): Promise<boolean> {
        return this.bikeRepository.remove(vin);
    }
}