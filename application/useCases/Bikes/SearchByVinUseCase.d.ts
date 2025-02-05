import { BikesRepository } from '../../../domain/repositories/BikesRepository';
import { Bikes } from '../../../domain/entities/Bikes';
export default class SearchByVinUseCase {
    private readonly bikeRepository;
    constructor(bikeRepository: BikesRepository);
    execute(vin: string): Promise<Bikes | null>;
}
