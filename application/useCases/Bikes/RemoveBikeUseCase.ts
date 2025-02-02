import { BikesRepository } from '@domain/repositories/BikesRepository';

export default class RemoveBikeUseCase {
    constructor(private readonly bikeRepository: BikesRepository) {}

    async execute(id: string): Promise<boolean> {
        return this.bikeRepository.remove(id);
    }
}