import MongooseAlertRepository from "@infrastructure/mongo/repositories/Alert";
import Alert from "@domain/entities/alert";

export default class FindAllAlertUseCase {
  public constructor(
    private readonly alertRepository: MongooseAlertRepository,
  ) {}

  public async execute(): Promise<Alert[]> {
    return this.alertRepository.findAll();
  }
}
