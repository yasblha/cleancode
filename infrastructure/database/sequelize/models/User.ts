import {
    Column,
    DataType,
    Model,
    PrimaryKey,
    Table,
    Unique,
} from 'sequelize-typescript';

import User from '../../../../domain/entities/User';
  
@Table({
    tableName: 'users',
    modelName: 'User',
    timestamps: true,
    underscored: true,
})
export default class UserModel extends Model<User> {

    @PrimaryKey
    @Column(DataType.UUID)
    @Unique
    declare id: string;

    @Column(DataType.STRING)
    @Unique
    declare email: string;

    @Column(DataType.STRING)
    declare firstName: string;

    @Column(DataType.STRING)
    declare lastName: string;

    @Column(DataType.STRING)
    declare password: string;

    @Column(DataType.ARRAY(DataType.STRING))
    declare roles: string[];

    @Column(DataType.BOOLEAN)
    declare isActive: boolean;

    @Column(DataType.BOOLEAN)
    declare isEmailVerified: boolean;
}