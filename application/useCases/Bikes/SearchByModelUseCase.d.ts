import { BikesRepository } from '@domain/repositories/BikesRepository';
import { Bikes } from '@domain/entities/Bikes';
export default class SearchByModelUseCase {
    private readonly bikeRepository;
    constructor(bikeRepository: BikesRepository);
    execute(model: string): Promise<Bikes[]>;
}
