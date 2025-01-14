export class Users {
    id;
    name;
    email;
    password;
    roles;
    isActive;
    isEmailVerified;
    createdAt;
    updatedAt;
    constructor(id, name, email, password, roles, isActive, isEmailVerified, createdAt, updatedAt) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.roles = roles;
        this.isActive = isActive;
        this.isEmailVerified = isEmailVerified;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
