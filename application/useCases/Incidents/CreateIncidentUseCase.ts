import { IncidentsRepository } from '@domain/repositories/IncidentsRepository';
import { Incidents } from '@domain/entities/Incidents';

export default class CreateIncidentUseCase {
    constructor(private readonly incidentsRepository: IncidentsRepository) {}

    async execute(incident: Incidents): Promise<Incidents> {
        return this.incidentsRepository.create(incident);
    }
}