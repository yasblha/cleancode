import { UsersRepository } from '@domain/repositories/UsersRepository';
import { Users } from '@domain/entities/Users';

export default class FindUserByEmailUseCase {
    constructor(private readonly usersRepository: UsersRepository) {}

    async execute(email: string): Promise<Users | null> {
        return this.usersRepository.findByEmail(email);
    }
}