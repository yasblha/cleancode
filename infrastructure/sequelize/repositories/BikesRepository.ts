import BikeModel from '@infrastructure/sequelize/models/BikeModel';
import { Bikes } from '@domain/entities/Bikes';
import { BikesRepository } from '@domain/repositories/BikesRepository';
import VinIdentifier from '@domain/value-objects/Vinidentifier';

export class SequelizeBikesRepository implements BikesRepository {
    async create(bike: Bikes): Promise<Bikes> {
        const newBike = await BikeModel.create({
            vin: bike.vin.toString(),
            brand: bike.brand,
            model: bike.model,
            mileage: bike.mileage,
            registrationNumber: bike.registrationNumber,
            purchaseDate: bike.purchaseDate,
            warrantyExpirationDate: bike.warrantyExpirationDate,
            ownerId: bike.ownerId,
            isActive: bike.isActive,
            isInMaintenance: bike.isInMaintenance,
            isDecommissioned: bike.isDecommissioned,
            nextMaintenanceMileage: bike.nextMaintenanceMileage,
            nextMaintenanceDate: bike.nextMaintenanceDate,
        });
        const rawData = newBike.toJSON() as Bikes & { vin: string };
        const result: Bikes = {
            ...rawData,
            vin: new VinIdentifier(rawData.vin),
        };
        return result;
    }

    async findAll(): Promise<Bikes[]> {
        const bikeRecords = await BikeModel.findAll();
        return bikeRecords.map((b) => {
            const rawData = b.toJSON() as Bikes & { vin: string };
            const result: Bikes = {
                ...rawData,
                vin: new VinIdentifier(rawData.vin),
            };
            return result;
        });
    }

    async findOne(vin: VinIdentifier): Promise<Bikes | null> {
        if (!(vin instanceof VinIdentifier) || typeof vin.value !== "string") {
            console.error("❌ Erreur : VIN invalide.");
            return null;
        }

        const bike = await BikeModel.findOne({
            where: { vin: vin.value },
        });

        if (!bike) {
            console.log(`❌ Aucun vélo trouvé avec le VIN ${vin.value}`);
            return null;
        }

        const rawData = bike.toJSON() as Omit<Bikes, "vin"> & { vin: string };

        return {
            ...rawData,
            vin: new VinIdentifier(rawData.vin),
        };
    }

    async update(vin: VinIdentifier, partialBike: Partial<Bikes>): Promise<Bikes | null> {
        const updateData: any = { ...partialBike };
        if (updateData.vin instanceof VinIdentifier) {
            updateData.vin = updateData.vin.toString();
        }
        const [affectedCount] = await BikeModel.update(updateData, {
            where: { vin: vin.toString() },
        });
        if (affectedCount > 0) {
            return this.findOne(vin);
        }
        return null;
    }

    async remove(vin: VinIdentifier): Promise<boolean> {
        const affectedCount = await BikeModel.destroy({
            where: { vin: vin.toString() },
        });
        return affectedCount > 0;
    }
}
