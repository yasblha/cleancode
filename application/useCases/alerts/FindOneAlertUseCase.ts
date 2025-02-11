import MongooseAlertRepository from "@infrastructure/mongo/repositories/Alert";
import Alert from "@domain/entities/alert";
import AlertNotFoundError from "@domain/errors/alerts/AlertNotFoundError";

export default class FindOneAlertUseCase {
  public constructor(
    private readonly alertRepository: MongooseAlertRepository,
  ) {}

  public async execute(identifier: string): Promise<Alert> {
    const alert = await this.alertRepository.findOne(identifier);

    if (alert instanceof AlertNotFoundError) {
      throw new AlertNotFoundError();
    }

    return alert;
  }
}
