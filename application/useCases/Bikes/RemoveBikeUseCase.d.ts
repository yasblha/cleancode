import { BikesRepository } from '@domain/repositories/BikesRepository';
export default class RemoveBikeUseCase {
    private readonly bikeRepository;
    constructor(bikeRepository: BikesRepository);
    execute(id: string): Promise<boolean>;
}
