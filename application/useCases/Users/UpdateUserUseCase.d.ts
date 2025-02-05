import { UsersRepository } from '@domain/repositories/UsersRepository';
import { Users } from '@domain/entities/Users';
export default class UpdateUserUseCase {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    execute(id: string, user: Partial<Users>): Promise<Users | null>;
}
