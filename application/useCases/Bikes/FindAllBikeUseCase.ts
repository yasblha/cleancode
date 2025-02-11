import { BikesRepository } from "@domain/repositories/BikesRepository";
import { Bikes } from "@domain/entities/Bikes";
import { NoBikesFoundError } from "@domain/errors/BikesErrors";

export default class FindAllBikeUseCase {
    constructor(private readonly bikeRepository: BikesRepository) {}

    async execute(): Promise<Bikes[]> {
        const bikes = await this.bikeRepository.findAll();

        // une liste vide maybe considered un "cas d'erreur" métier : not sure
        if (!bikes || bikes.length === 0) {
            throw new NoBikesFoundError();
        }

        return bikes;
    }
}
