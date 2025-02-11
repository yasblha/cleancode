import { SequelizeIncidentsRepository } from "@infrastructure/sequelize/repositories/IncidentsRepository";
import { Incidents } from "@domain/entities/Incidents";
export default class FindOneIncidentUseCase {
    private readonly incidentRepository;
    constructor(incidentRepository: SequelizeIncidentsRepository);
    execute(identifier: string): Promise<Incidents>;
}
