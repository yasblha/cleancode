import {SequelizeIncidentsRepository} from "@infrastructure/sequelize/repositories/IncidentsRepository";
import {Incidents} from "@domain/entities/Incidents";

export default class CreateIncidentUseCase {
  public constructor(
    private readonly incidentRepository: SequelizeIncidentsRepository,
  ) {}

  public async execute(incident: Incidents): Promise<Incidents> {
    return this.incidentRepository.create(incident);
  }
}
