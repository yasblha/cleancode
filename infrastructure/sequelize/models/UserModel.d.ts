import { Model } from 'sequelize';
declare class UserModel extends Model {
    id: string;
    name: string;
    email: string;
    password: string;
    roles: string;
    isActive: boolean;
    isEmailVerified: boolean;
    readonly createdAt: Date;
    readonly updatedAt: Date | null;
}
export default UserModel;
