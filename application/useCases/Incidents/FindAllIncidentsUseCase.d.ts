import { IncidentsRepository } from '@domain/repositories/IncidentsRepository';
import { Incidents } from '@domain/entities/Incidents';
export default class FindAllIncidentsUseCase {
    private readonly incidentsRepository;
    constructor(incidentsRepository: IncidentsRepository);
    execute(): Promise<Incidents[]>;
}
