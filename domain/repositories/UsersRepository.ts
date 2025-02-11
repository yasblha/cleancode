import { User } from '../entities/Users';

export interface UsersRepository {
    create(data: Omit<User, "id">): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User | null>;
    update(id: string, user: Partial<User>): Promise<User | null>;
    remove(id: string): Promise<boolean>;
    findByEmail(email: string): Promise<User | null>;
}