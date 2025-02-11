export class User {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public password: string,
        public roles: string,
        public isActive: boolean,
        public isEmailVerified: boolean,
        public createdAt: Date,
        public updatedAt: Date | null,
    ) {}
}