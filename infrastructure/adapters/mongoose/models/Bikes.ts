import { Schema, model } from 'mongoose';
import { Bikes } from '../../../../domain/entities/Bikes';

const bikeSchema = new Schema<Bikes>({
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

export const BikeModel = model<Bikes>('Bike', bikeSchema);