import {
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    Model,
    PrimaryKey,
    Table,
    Unique,
} from 'sequelize-typescript';
  
import BikeModel from './Bike';
import Maintenance from '../../../../domain/entities/Maintenance';
  
@Table({
    tableName: 'maintenances',
    modelName: 'Maintenance',
    timestamps: true,
    underscored: true,
})
export default class MaintenanceModel extends Model<Maintenance> {

    @PrimaryKey
    @Column(DataType.UUID)
    @Unique
    declare id: string;

    @Column(DataType.DATE)
    declare startDate: Date;   
    
    @Column(DataType.DATE)
    declare endDate: Date;

    @Column(DataType.STRING)
    declare description: string;

    @ForeignKey (() => BikeModel)
    @Column(DataType.STRING)
    declare bikeId: string;

    @BelongsTo(() => BikeModel)
    declare bike: BikeModel;

}