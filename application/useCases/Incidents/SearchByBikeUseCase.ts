import { Incidents } from "@domain/entities/Incidents";
import { SequelizeIncidentsRepository } from "@infrastructure/sequelize/repositories/IncidentsRepository";

export default class SearchByBikeUseCase {
  public constructor(
    private readonly incidentRepository: SequelizeIncidentsRepository,
  ) {}

  public async execute(vin: string): Promise<Incidents[]> {
    return this.incidentRepository.searchByBikeVin(vin);
  }
}
