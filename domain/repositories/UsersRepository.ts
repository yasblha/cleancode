import { Users } from '../entities/Users';

export interface UsersRepository {
    create(user: Users): Promise<Users>;
    findAll(): Promise<Users[]>;
    findOne(id: string): Promise<Users | null>;
    update(id: string, user: Partial<Users>): Promise<Users | null>;
    remove(id: string): Promise<boolean>;
    findByEmail(email: string): Promise<Users | null>;
}