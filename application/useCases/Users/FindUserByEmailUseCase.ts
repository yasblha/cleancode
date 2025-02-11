import { SequelizeUsersRepository } from "@infrastructure/sequelize/repositories/UsersRepository";
import { User } from "@domain/entities/Users";
import UserNotFoundError from "@domain/errors/users/UserNotFoundError";

export default class FindByEmailUseCase {
    public constructor(
        private readonly userRepository: SequelizeUsersRepository,
    ) {}

    public async execute(email: string): Promise<User> {
        const user = await this.userRepository.findByEmail(email);

        if (!user) {
            throw new UserNotFoundError(`User with email ${email} not found`);
        }

        return user;
    }
}
