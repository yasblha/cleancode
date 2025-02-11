import { SequelizeUsersRepository } from "@infrastructure/sequelize/repositories/UsersRepository";
import { User } from "@domain/entities/Users";
export default class FindOneUserUseCase {
    private readonly userRepository;
    constructor(userRepository: SequelizeUsersRepository);
    execute(identifier: string): Promise<User>;
}
