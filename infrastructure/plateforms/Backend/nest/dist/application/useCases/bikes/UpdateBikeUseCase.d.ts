import { BikesRepository } from '@domain/repositories/BikesRepository';
import { Bikes } from '@domain/entities/Bikes';
import VinIdentifier from "@domain/value-objects/Vinidentifier";
export default class UpdateBikeUseCase {
    private readonly bikeRepository;
    constructor(bikeRepository: BikesRepository);
    execute(vin: VinIdentifier, bike: Partial<Bikes>): Promise<Bikes | null>;
}
