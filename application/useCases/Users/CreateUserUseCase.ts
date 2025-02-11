import { SequelizeUsersRepository } from "@infrastructure/sequelize/repositories/UsersRepository";
import {PasswordService} from "@application/services/PasswordService";
import { User } from "@domain/entities/Users";
import { UserDto } from "@infrastructure/plateforms/Backend/nest/src/users/UserDto";

export default class CreateUserUseCase {
    public constructor(
        private readonly userRepository: SequelizeUsersRepository,
        private readonly passwordService: PasswordService,
    ) {}

    public async execute(user: UserDto): Promise<User> {
        const hashedPassword = await this.passwordService.hashPassword(user.password);
        const userToCreate = { ...user, password: hashedPassword };

        return this.userRepository.create(userToCreate as unknown as User);
    }
}
