import Alert from "@domain/entities/alert";
import AlertRepository from "@domain/repositories/AlertRepository";
import { AlertModel } from "../models/Alert";
import AlertNotFoundError from "@domain/errors/alerts/AlertNotFoundError";
import {SequelizePartsRepository} from "@infrastructure/sequelize/repositories/PartsRepository";

export default class MongooseAlertRepository implements AlertRepository {
  public async create(alert: Alert): Promise<Alert> {
    const newAlert = await AlertModel.create(alert);

    return Alert.fromMongoModel(newAlert, new SequelizePartsRepository());
  }

  public async update(
    identifier: string,
    alert: Partial<Alert>,
  ): Promise<Alert | AlertNotFoundError> {
    const updatedAlert = await AlertModel.findByIdAndUpdate(identifier, alert, {
      new: true,
    }); // @TODO : check identifier

    if (!updatedAlert) {
      return new AlertNotFoundError();
    }

    return Alert.fromMongoModel(updatedAlert, new SequelizePartsRepository());
  }

  public async findOne(
    identifier: string,
  ): Promise<Alert | AlertNotFoundError> {
    const alert = await AlertModel.findOne({ identifier });

    if (!alert) {
      return new AlertNotFoundError();
    }

    return Alert.fromMongoModel(alert, new SequelizePartsRepository());
  }

  public async findAll(): Promise<Alert[]> {
    const alerts = await AlertModel.find();

    return await Promise.all(
      alerts.map(async (alert) =>
        Alert.fromMongoModel(alert, new SequelizePartsRepository()),
      ),
    );
  }

  public async searchByPart(partId: string): Promise<Alert[]> {
    const alerts = await AlertModel.find({ part: { $eq: partId } });
    return await Promise.all(
      alerts.map(async (alert) =>
        Alert.fromMongoModel(alert, new SequelizePartsRepository()),
      ),
    );
  }
}
