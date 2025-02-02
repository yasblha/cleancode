import UserModel from '../models/UserModel';
import { Users } from '@domain/entities/Users';
import { UsersRepository } from '@domain/repositories/UsersRepository';

export class SequelizeUsersRepository implements UsersRepository {
    async create(user: Users): Promise<Users> {
        // @ts-ignore
        const newUser = await UserModel.create(user);
        return newUser.toJSON() as Users;
    }

    async findAll(): Promise<Users[]> {
        const users = await UserModel.findAll();
        return users.map(user => user.toJSON() as Users);
    }

    async findOne(id: string): Promise<Users | null> {
        const user = await UserModel.findByPk(id);
        return user ? user.toJSON() as Users : null;
    }

    async update(id: string, user: Partial<Users>): Promise<Users | null> {
        const [affectedCount] = await UserModel.update(user, { where: { id } });
        if (affectedCount > 0) {
            const updatedUser = await UserModel.findByPk(id);
            return updatedUser ? updatedUser.toJSON() as Users : null;
        }
        return null;
    }

    async remove(id: string): Promise<boolean> {
        const affectedCount = await UserModel.destroy({ where: { id } });
        return affectedCount > 0;
    }

    async findByEmail(email: string): Promise<Users | null> {
        const user = await UserModel.findOne({ where: { email } });
        return user ? user.toJSON() as Users : null;
    }
}