import { UsersRepository } from '@domain/repositories/UsersRepository';
import { Users } from '@domain/entities/Users';
export default class FindAllUsersUseCase {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    execute(): Promise<Users[]>;
}
