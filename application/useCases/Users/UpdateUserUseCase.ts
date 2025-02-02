import { UsersRepository } from '@domain/repositories/UsersRepository';
import { Users } from '@domain/entities/Users';

export default class UpdateUserUseCase {
    constructor(private readonly usersRepository: UsersRepository) {}

    async execute(id: string, user: Partial<Users>): Promise<Users | null> {
        return this.usersRepository.update(id, user);
    }
}