import MongooseAlertRepository from "@infrastructure/mongo/repositories/Alert";
import Alert from "@domain/entities/alert";
export default class FindOneAlertUseCase {
    private readonly alertRepository;
    constructor(alertRepository: MongooseAlertRepository);
    execute(identifier: string): Promise<Alert>;
}
