import MongooseAlertRepository from "@infrastructure/mongo/repositories/Alert";
import Alert from "@domain/entities/alert";
import AlertNotFoundError from "@domain/errors/alerts/AlertNotFoundError";

export default class UpdateAlertUseCase {
  public constructor(
    private readonly alertRepository: MongooseAlertRepository,
  ) {}

  public async execute(
    identifier: string,
    alert: Partial<Alert>,
  ): Promise<Alert> {
    const updatedAlert = await this.alertRepository.update(identifier, alert);

    if (updatedAlert instanceof AlertNotFoundError) {
      throw new AlertNotFoundError();
    }

    return updatedAlert;
  }
}
