import { UsersRepository } from '@domain/repositories/UsersRepository';
import { Users } from '@domain/entities/Users';

export default class FindOneUserUseCase {
    constructor(private readonly usersRepository: UsersRepository) {}

    async execute(id: string): Promise<Users | null> {
        return this.usersRepository.findOne(id);
    }
}