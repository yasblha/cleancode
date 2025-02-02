import { UsersRepository } from '@domain/repositories/UsersRepository';

export default class RemoveUserUseCase {
    constructor(private readonly usersRepository: UsersRepository) {}

    async execute(id: string): Promise<boolean> {
        return this.usersRepository.remove(id);
    }
}