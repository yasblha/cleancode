import {SequelizeIncidentsRepository} from "@infrastructure/sequelize/repositories/IncidentsRepository";
import {Incidents} from "@domain/entities/Incidents";

export default class FindAllIncidentUseCase {
  public constructor(
    private readonly incidentRepository: SequelizeIncidentsRepository,
  ) {}

  public async execute(): Promise<Incidents[]> {
    return this.incidentRepository.findAll();
  }
}
