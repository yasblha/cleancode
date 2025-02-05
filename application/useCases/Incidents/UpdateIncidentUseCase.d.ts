import { IncidentsRepository } from '@domain/repositories/IncidentsRepository';
import { Incidents } from '@domain/entities/Incidents';
export default class UpdateIncidentUseCase {
    private readonly incidentsRepository;
    constructor(incidentsRepository: IncidentsRepository);
    execute(id: string, incident: Partial<Incidents>): Promise<Incidents | null>;
}
