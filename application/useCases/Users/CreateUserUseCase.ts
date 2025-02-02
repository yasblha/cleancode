import { UsersRepository } from '@domain/repositories/UsersRepository';
import { Users } from '@domain/entities/Users';

export default class CreateUserUseCase {
    constructor(private readonly usersRepository: UsersRepository) {}

    async execute(user: Users): Promise<Users> {
        return this.usersRepository.create(user);
    }
}