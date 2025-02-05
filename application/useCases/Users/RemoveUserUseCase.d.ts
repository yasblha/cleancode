import { UsersRepository } from '@domain/repositories/UsersRepository';
export default class RemoveUserUseCase {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    execute(id: string): Promise<boolean>;
}
