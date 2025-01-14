import { Schema, model, connect } from 'mongoose';
import { BikeModel } from './models/Bikes';

run().catch(err => console.log(err));

async function run() {
  await connect('mongodb://root:password@localhost:27017/', { dbName: 'moto_management_test' });

  const bike = new BikeModel({
    brand: 'Honda',
    model: 'CBR 1000RR',
    mileage: 0,
    vin: 'JH2SC5902CK000001',
    purchaseDate: new Date(),
    warrantyExpirationDate: new Date(),
    ownerId: '1',
    isActive: true,
    isInMaintenance: false,
    isDecommissioned: false,
    nextMaintenanceMileage: 10000,
    nextMaintenanceDate: new Date()
    });

    await bike.save();

  console.log(bike);
}