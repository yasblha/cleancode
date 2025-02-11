// src/infrastructure/sequelize/models/MaintenanceServiceModel.ts
import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../sequelizedb";

interface MaintenanceServiceAttributes {
  id: number;
  bikeId: number;
  date: Date;
  description: string;
  type: string;
  isResolved: boolean;
  price: number;
  partsUsed: Array<{ partId: number; quantity: number }>;
  technicianId: number;
  createdAt: Date;
  updatedAt: Date | null;
}

type MaintenanceServiceCreationAttributes = Optional<
  MaintenanceServiceAttributes,
  "id" | "createdAt" | "updatedAt"
>;

class MaintenanceServiceModel
  extends Model<MaintenanceServiceAttributes, MaintenanceServiceCreationAttributes>
  implements MaintenanceServiceAttributes
{
  public id!: number;
  public bikeId!: number;
  public date!: Date;
  public description!: string;
  public type!: string;
  public isResolved!: boolean;
  public price!: number;
  public partsUsed!: Array<{ partId: number; quantity: number }>; // Tableau JSON des pièces utilisées
  public technicianId!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date | null;
}

MaintenanceServiceModel.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    bikeId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isResolved: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
    partsUsed: {
      type: DataTypes.JSON, // Stockage des pièces utilisées en JSON
      allowNull: false,
      defaultValue: [],
    },
    technicianId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "maintenance",
    modelName: "MaintenanceService",
    timestamps: true,
  }
);

export default MaintenanceServiceModel;