import { SequelizeIncidentsRepository } from "@infrastructure/sequelize/repositories/IncidentsRepository";
export default class RemoveIncidentUseCase {
    private readonly incidentRepository;
    constructor(incidentRepository: SequelizeIncidentsRepository);
    execute(identifier: string): Promise<number>;
}
