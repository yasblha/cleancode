import { BikesRepository } from "@domain/repositories/BikesRepository";
import { Bikes } from "@domain/entities/Bikes";
import VinIdentifier from "@domain/value-objects/Vinidentifier";
import { InvalidVinError, BikeNotFoundError } from "@domain/errors/BikesErrors";

export default class FindOneBikeUseCase {
    constructor(private readonly bikeRepository: BikesRepository) {}
    async execute(vinInput: unknown): Promise<Bikes> {
        if (typeof vinInput !== "string") {
            throw new InvalidVinError("Le VIN fourni n'est pas une chaîne de caractères.");
        }

        if (!vinInput) {
            throw new InvalidVinError("Le VIN est manquant.");
        }

        const vin = new VinIdentifier(vinInput);

        const bike = await this.bikeRepository.findOne(vin);
        if (!bike) {
            throw new BikeNotFoundError(vin.value);
        }

        return bike;
    }
}
