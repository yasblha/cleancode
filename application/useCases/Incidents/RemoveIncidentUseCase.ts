import IncidentNotFoundError from "@domain/errors/incidents/IncidentNotFoundError";
import { SequelizeIncidentsRepository } from "@infrastructure/sequelize/repositories/IncidentsRepository";

export default class RemoveIncidentUseCase {
  public constructor(
      private readonly incidentRepository: SequelizeIncidentsRepository,
  ) {}

  public async execute(identifier: string): Promise<number> {
    const deletedResult = await this.incidentRepository.remove(identifier);

    if (!deletedResult) {
      throw new IncidentNotFoundError("Incident not found");
    }

    return 1;
  }
}
