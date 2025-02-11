import { SequelizeIncidentsRepository } from "@infrastructure/sequelize/repositories/IncidentsRepository";
import { Incidents } from "@domain/entities/Incidents";
import IncidentNotFoundError from "@domain/errors/incidents/IncidentNotFoundError";

export default class FindOneIncidentUseCase {
  public constructor(
      private readonly incidentRepository: SequelizeIncidentsRepository,
  ) {}

  public async execute(identifier: string): Promise<Incidents> {
    const incident = await this.incidentRepository.findOne(identifier);

    if (!incident) {
      throw new IncidentNotFoundError("Incident not found");
    }

    return incident;
  }
}
