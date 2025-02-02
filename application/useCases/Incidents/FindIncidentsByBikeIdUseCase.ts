import { IncidentsRepository } from '@domain/repositories/IncidentsRepository';
import { Incidents } from '@domain/entities/Incidents';

export default class FindIncidentsByBikeIdUseCase {
    constructor(private readonly incidentsRepository: IncidentsRepository) {}

    async execute(bikeId: string): Promise<Incidents[]> {
        return this.incidentsRepository.findByBikeId(bikeId);
    }
}