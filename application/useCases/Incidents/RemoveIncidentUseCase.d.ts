import { IncidentsRepository } from '@domain/repositories/IncidentsRepository';
export default class RemoveIncidentUseCase {
    private readonly incidentsRepository;
    constructor(incidentsRepository: IncidentsRepository);
    execute(id: string): Promise<boolean>;
}
