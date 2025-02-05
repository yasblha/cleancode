import { IncidentsRepository } from '@domain/repositories/IncidentsRepository';
import { Incidents } from '@domain/entities/Incidents';
export default class CreateIncidentUseCase {
    private readonly incidentsRepository;
    constructor(incidentsRepository: IncidentsRepository);
    execute(incident: Incidents): Promise<Incidents>;
}
