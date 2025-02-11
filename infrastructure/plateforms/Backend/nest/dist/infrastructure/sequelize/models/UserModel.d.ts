import { Model, Optional } from "sequelize";
interface UserAttributes {
    id: string;
    name: string;
    email: string;
    password: string;
    roles: string;
    isActive: boolean;
    isEmailVerified: boolean;
    createdAt: Date;
    updatedAt: Date | null;
}
type UserCreationAttributes = Optional<UserAttributes, "id" | "createdAt" | "updatedAt">;
declare class UserModel extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    id: string;
    name: string;
    email: string;
    password: string;
    roles: string;
    isActive: boolean;
    isEmailVerified: boolean;
    readonly createdAt: Date;
    readonly updatedAt: Date | null;
    static associate(models: any): void;
}
export default UserModel;
