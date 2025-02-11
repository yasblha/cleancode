import { Incidents } from "@domain/entities/Incidents";
import { SequelizeIncidentsRepository } from "@infrastructure/sequelize/repositories/IncidentsRepository";
export default class UpdateIncidentUseCase {
    private readonly incidentRepository;
    constructor(incidentRepository: SequelizeIncidentsRepository);
    execute(identifier: string, incident: Partial<Incidents>): Promise<Incidents>;
}
