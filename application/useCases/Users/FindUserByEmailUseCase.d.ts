import { UsersRepository } from '@domain/repositories/UsersRepository';
import { Users } from '@domain/entities/Users';
export default class FindUserByEmailUseCase {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    execute(email: string): Promise<Users | null>;
}
