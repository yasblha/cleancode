import Alert from "@domain/entities/alert";
import AlertRepository from "@domain/repositories/AlertRepository";
import AlertNotFoundError from "@domain/errors/alerts/AlertNotFoundError";
export default class MongooseAlertRepository implements AlertRepository {
    create(alert: Alert): Promise<Alert>;
    update(identifier: string, alert: Partial<Alert>): Promise<Alert | AlertNotFoundError>;
    findOne(identifier: string): Promise<Alert | AlertNotFoundError>;
    findAll(): Promise<Alert[]>;
    searchByPart(partId: string): Promise<Alert[]>;
}
