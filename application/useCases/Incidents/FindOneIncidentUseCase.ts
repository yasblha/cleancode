import { IncidentsRepository } from '@domain/repositories/IncidentsRepository';
import { Incidents } from '@domain/entities/Incidents';

export default class FindOneIncidentUseCase {
    constructor(private readonly incidentsRepository: IncidentsRepository) {}

    async execute(id: string): Promise<Incidents | null> {
        return this.incidentsRepository.findOne(id);
    }
}