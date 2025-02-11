import { Incidents } from "@domain/entities/Incidents";
import { SequelizeIncidentsRepository } from "@infrastructure/sequelize/repositories/IncidentsRepository";
export default class SearchByBikeUseCase {
    private readonly incidentRepository;
    constructor(incidentRepository: SequelizeIncidentsRepository);
    execute(vin: string): Promise<Incidents[]>;
}
