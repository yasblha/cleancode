import { IncidentsRepository } from '@domain/repositories/IncidentsRepository';
import { Incidents } from '@domain/entities/Incidents';

export default class FindAllIncidentsUseCase {
    constructor(private readonly incidentsRepository: IncidentsRepository) {}

    async execute(): Promise<Incidents[]> {
        return this.incidentsRepository.findAll();
    }
}