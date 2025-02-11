import MongooseAlertRepository from "@infrastructure/mongo/repositories/Alert";
import Alert from "@domain/entities/alert";
import AlertNotFoundError from "@domain/errors/alerts/AlertNotFoundError";

export default class SearchByPartUseCase {
  public constructor(
    private readonly alertRepository: MongooseAlertRepository,
  ) {}

  public async execute(part: string): Promise<Alert[]> {
    const alerts = await this.alertRepository.searchByPart(part);

    if (alerts.length === 0) {
      throw new AlertNotFoundError();
    }

    return alerts;
  }
}
