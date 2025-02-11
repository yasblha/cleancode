import { SequelizeIncidentsRepository } from "@infrastructure/sequelize/repositories/IncidentsRepository";
import { Incidents } from "@domain/entities/Incidents";
export default class CreateIncidentUseCase {
    private readonly incidentRepository;
    constructor(incidentRepository: SequelizeIncidentsRepository);
    execute(incident: Incidents): Promise<Incidents>;
}
