import { SequelizeIncidentsRepository } from "@infrastructure/sequelize/repositories/IncidentsRepository";
import { Incidents } from "@domain/entities/Incidents";
export default class FindAllIncidentUseCase {
    private readonly incidentRepository;
    constructor(incidentRepository: SequelizeIncidentsRepository);
    execute(): Promise<Incidents[]>;
}
