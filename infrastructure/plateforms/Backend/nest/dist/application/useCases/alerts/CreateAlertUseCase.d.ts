import MongooseAlertRepository from "@infrastructure/mongo/repositories/Alert";
import Alert from "@domain/entities/alert";
export default class CreateAlertUseCase {
    private readonly alertRepository;
    constructor(alertRepository: MongooseAlertRepository);
    execute(alert: Alert): Promise<Alert>;
}
