import { Op } from "sequelize";
import UserModel from "../models/UserModel";
import { User } from "@domain/entities/Users";
import { UsersRepository } from "@domain/repositories/UsersRepository";

export class SequelizeUsersRepository implements UsersRepository {

    async create(user: User): Promise<User> {
        const newUser = await UserModel.create(user);
        return newUser.toJSON() as User;
    }


    async findAll(): Promise<User[]> {
        const users = await UserModel.findAll();
        return users.map(user => user.toJSON() as User);
    }


    async findOne(id: string): Promise<User | null> {
        const user = await UserModel.findByPk(id);
        return user ? (user.toJSON() as User) : null;
    }


    async update(id: string, user: Partial<User>): Promise<User | null> {
        const [affectedCount] = await UserModel.update(user, { where: { id } });
        if (affectedCount > 0) {
            const updatedUser = await UserModel.findByPk(id);
            return updatedUser ? (updatedUser.toJSON() as User) : null;
        }
        return null;
    }


    async remove(id: string): Promise<boolean> {
        const affectedCount = await UserModel.destroy({ where: { id } });
        return affectedCount > 0;
    }


    async findByEmail(email: string): Promise<User | null> {
        const user = await UserModel.findOne({ where: { email } });
        return user ? (user.toJSON() as User) : null;
    }


    async searchByEmail(email: string): Promise<User[]> {
        const users = await UserModel.findAll({
            where: {
                email: {
                    [Op.like]: `%${email}%`,
                },
            },
        });
        return users.map(user => user.toJSON() as User);
    }
}
