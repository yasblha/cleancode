import { User } from "@domain/entities/Users";
import { UsersRepository } from "@domain/repositories/UsersRepository";
export declare class SequelizeUsersRepository implements UsersRepository {
    create(user: User): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User | null>;
    update(id: string, user: Partial<User>): Promise<User | null>;
    remove(id: string): Promise<boolean>;
    findByEmail(email: string): Promise<User | null>;
    searchByEmail(email: string): Promise<User[]>;
}
