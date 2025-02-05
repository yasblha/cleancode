import { IncidentsRepository } from '@domain/repositories/IncidentsRepository';
import { Incidents } from '@domain/entities/Incidents';
export default class FindIncidentsByBikeIdUseCase {
    private readonly incidentsRepository;
    constructor(incidentsRepository: IncidentsRepository);
    execute(bikeId: string): Promise<Incidents[]>;
}
