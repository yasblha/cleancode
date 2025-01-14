import { Schema, model } from 'mongoose';
import { Bike } from '../../../../domain/entities/Bike';

const bikeSchema = new Schema<Bike>({
    brand: String,
    model: String,
    mileage: Number,
    vin: String,
    purchaseDate: Date,
    warrantyExpirationDate: Date,
    ownerId: String,
    isActive: Boolean,
    isInMaintenance: Boolean,
    isDecommissioned: Boolean,
    nextMaintenanceMileage: Number,
    nextMaintenanceDate: Date
}, { timestamps: true });

export const BikeModel = model<Bike>('Bike', bikeSchema);