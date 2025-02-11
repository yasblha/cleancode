import MongooseAlertRepository from "@infrastructure/mongo/repositories/Alert";
import Alert from "@domain/entities/alert";
export default class FindAllAlertUseCase {
    private readonly alertRepository;
    constructor(alertRepository: MongooseAlertRepository);
    execute(): Promise<Alert[]>;
}
