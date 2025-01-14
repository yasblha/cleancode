import {
    DataTypes,
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
  } from '@sequelize/core';
  import { Attribute, PrimaryKey, AutoIncrement, NotNull } from '@sequelize/core/decorators-legacy';

  
export class Bikes extends Model<InferAttributes<Bikes>, InferCreationAttributes<Bikes>> {
    @Attribute(DataTypes.INTEGER)
    @PrimaryKey
    @AutoIncrement
    declare id: CreationOptional<number>;

    @Attribute(DataTypes.STRING)
    @NotNull
    declare brand: string;

    @Attribute(DataTypes.STRING)
    @NotNull
    declare model: string;

    @Attribute(DataTypes.INTEGER)
    @NotNull
    declare mileage: number;

    @Attribute(DataTypes.STRING)
    @NotNull
    declare vin: string;

    @Attribute(DataTypes.DATE)
    @NotNull
    declare purchaseDate: Date;

    @Attribute(DataTypes.DATE)
    declare warrantyExpirationDate: Date | null;

    @Attribute(DataTypes.STRING)
    @NotNull
    declare ownerId: string;

    @Attribute(DataTypes.BOOLEAN)
    @NotNull
    declare isActive: boolean;

    @Attribute(DataTypes.BOOLEAN)
    @NotNull
    declare isInMaintenance: boolean;

    @Attribute(DataTypes.BOOLEAN)
    @NotNull
    declare isDecommissioned: boolean;

    @Attribute(DataTypes.INTEGER)
    declare nextMaintenanceMileage: number | null;

    @Attribute(DataTypes.DATE)
    declare nextMaintenanceDate: Date | null;

    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}