import { IncidentsRepository } from '@domain/repositories/IncidentsRepository';

export default class RemoveIncidentUseCase {
    constructor(private readonly incidentsRepository: IncidentsRepository) {}

    async execute(id: string): Promise<boolean> {
        return this.incidentsRepository.remove(id);
    }
}