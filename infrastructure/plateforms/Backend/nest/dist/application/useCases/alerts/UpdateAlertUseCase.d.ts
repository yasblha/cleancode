import MongooseAlertRepository from "@infrastructure/mongo/repositories/Alert";
import Alert from "@domain/entities/alert";
export default class UpdateAlertUseCase {
    private readonly alertRepository;
    constructor(alertRepository: MongooseAlertRepository);
    execute(identifier: string, alert: Partial<Alert>): Promise<Alert>;
}
