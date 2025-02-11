import { BikesRepository } from "@domain/repositories/BikesRepository";
import VinIdentifier from "@domain/value-objects/Vinidentifier";
import {InvalidVinError, BikeNotFoundError, MaintenanceInProgressError, UnauthorizedBikeAccessError} from "@domain/errors/BikesErrors";

export default class RemoveBikeUseCase {
    constructor(private readonly bikeRepository: BikesRepository) {}

    async execute(vin: VinIdentifier, userId?: string): Promise<boolean> {
        if (!vin.value || !vin.value.trim()) {
            throw new InvalidVinError("(vide)");
        }

        const existingBike = await this.bikeRepository.findOne(vin);
        if (!existingBike) {
            throw new BikeNotFoundError(vin.value);
        }

        // Vérifier autorisation if user admin
        //if (!isAdmin && userId && existingBike.ownerId !== userId) {
        //    throw new UnauthorizedBikeAccessError(userId, existingBike.ownerId);
        //}

        if (existingBike.isInMaintenance) {
            throw new MaintenanceInProgressError(vin.value);
        }

        return this.bikeRepository.remove(vin);
    }
}
