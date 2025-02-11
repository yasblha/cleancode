import MongooseAlertRepository from "@infrastructure/mongo/repositories/Alert";
import Alert from "@domain/entities/alert";

export default class CreateAlertUseCase {
  public constructor(
    private readonly alertRepository: MongooseAlertRepository,
  ) {}

  public async execute(alert: Alert): Promise<Alert> {
    return this.alertRepository.create(alert);
  }
}
