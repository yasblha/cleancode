'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('bikes', [
      {
        vin: 'ABC12345678901234',
        brand: 'Triumph',
        model: 'Street Triple',
        mileage: 12000,
        registrationNumber: 'XYZ987',
        purchaseDate: new Date('2022-01-01T00:00:00.000Z'),
        warrantyExpirationDate: new Date('2023-01-01T00:00:00.000Z'),
        ownerId: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
        isActive: true,
        isInMaintenance: false,
        isDecommissioned: false,
        nextMaintenanceMileage: 15000,
        nextMaintenanceDate: new Date('2023-06-01T00:00:00.000Z'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        vin: 'DEF98765432109876',
        brand: 'Honda',
        model: 'CBR600RR',
        mileage: 8000,
        registrationNumber: 'LMN654',
        purchaseDate: new Date('2021-06-15T00:00:00.000Z'),
        warrantyExpirationDate: null,
        ownerId: 'a12bc34d-56ef-78gh-90ij-klmnopqrstuv',
        isActive: true,
        isInMaintenance: false,
        isDecommissioned: false,
        nextMaintenanceMileage: 12000,
        nextMaintenanceDate: new Date('2023-04-01T00:00:00.000Z'),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('bikes', null, {});
  }
};
