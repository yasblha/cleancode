import { UsersRepository } from '@domain/repositories/UsersRepository';
import { User } from '@domain/entities/Users';
export default class FindAllUserUserCase {
    private readonly userRepository;
    constructor(userRepository: UsersRepository);
    execute(): Promise<User[]>;
}
