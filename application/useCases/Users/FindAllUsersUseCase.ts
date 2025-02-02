import { UsersRepository } from '@domain/repositories/UsersRepository';
import { Users } from '@domain/entities/Users';

export default class FindAllUsersUseCase {
    constructor(private readonly usersRepository: UsersRepository) {}

    async execute(): Promise<Users[]> {
        return this.usersRepository.findAll();
    }
}