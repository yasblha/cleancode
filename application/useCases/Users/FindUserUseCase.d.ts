import { UsersRepository } from '@domain/repositories/UsersRepository';
import { Users } from '@domain/entities/Users';
export default class FindOneUserUseCase {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    execute(id: string): Promise<Users | null>;
}
