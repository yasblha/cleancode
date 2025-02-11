import { BikesRepository } from "@domain/repositories/BikesRepository";
import VinIdentifier from "@domain/value-objects/Vinidentifier";
export default class RemoveBikeUseCase {
    private readonly bikeRepository;
    constructor(bikeRepository: BikesRepository);
    execute(vin: VinIdentifier, userId?: string): Promise<boolean>;
}
