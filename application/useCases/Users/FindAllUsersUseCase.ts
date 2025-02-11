import { UsersRepository } from '@domain/repositories/UsersRepository';
import { User } from '@domain/entities/Users';

export default class FindAllUserUserCase {
    public constructor(
        private readonly userRepository: UsersRepository,
    ) {}

    public async execute(): Promise<User[]> {
        return this.userRepository.findAll();
    }
}