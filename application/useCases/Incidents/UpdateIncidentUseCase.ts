import { IncidentsRepository } from '@domain/repositories/IncidentsRepository';
import { Incidents } from '@domain/entities/Incidents';

export default class UpdateIncidentUseCase {
    constructor(private readonly incidentsRepository: IncidentsRepository) {}

    async execute(id: string, incident: Partial<Incidents>): Promise<Incidents | null> {
        return this.incidentsRepository.update(id, incident);
    }
}