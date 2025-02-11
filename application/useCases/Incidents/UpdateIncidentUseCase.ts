import { Incidents } from "@domain/entities/Incidents";
import { SequelizeIncidentsRepository } from "@infrastructure/sequelize/repositories/IncidentsRepository";
import IncidentNotFoundError from "@domain/errors/incidents/IncidentNotFoundError";

export default class UpdateIncidentUseCase {
  public constructor(
      private readonly incidentRepository: SequelizeIncidentsRepository,
  ) {}

  public async execute(
      identifier: string,
      incident: Partial<Incidents>,
  ): Promise<Incidents> {
    const updatedIncident = await this.incidentRepository.update(
        identifier,
        incident,
    );

    if (!updatedIncident) {
      throw new IncidentNotFoundError(`Incident with id ${identifier} not found`);
    }

    return updatedIncident;
  }
}
