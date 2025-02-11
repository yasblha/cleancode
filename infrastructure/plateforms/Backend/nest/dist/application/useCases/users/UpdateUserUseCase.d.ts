import { SequelizeUsersRepository } from "@infrastructure/sequelize/repositories/UsersRepository";
import { User } from "@domain/entities/Users";
import { PasswordService } from "../../services/PasswordService";
export default class UpdateUserUseCase {
    private readonly userRepository;
    private readonly passwordService;
    constructor(userRepository: SequelizeUsersRepository, passwordService: PasswordService);
    execute(identifier: string, user: Partial<User>): Promise<User>;
}
