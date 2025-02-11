import { BikesRepository } from "@domain/repositories/BikesRepository";
import { Bikes } from "@domain/entities/Bikes";
export default class FindAllBikeUseCase {
    private readonly bikeRepository;
    constructor(bikeRepository: BikesRepository);
    execute(): Promise<Bikes[]>;
}
