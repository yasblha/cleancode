import { UsersRepository } from '@domain/repositories/UsersRepository';
import { Users } from '@domain/entities/Users';
export default class CreateUserUseCase {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    execute(user: Users): Promise<Users>;
}
