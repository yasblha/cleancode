import { SequelizeUsersRepository } from "@infrastructure/sequelize/repositories/UsersRepository";
import { User } from "@domain/entities/Users";
export default class FindByEmailUseCase {
    private readonly userRepository;
    constructor(userRepository: SequelizeUsersRepository);
    execute(email: string): Promise<User>;
}
