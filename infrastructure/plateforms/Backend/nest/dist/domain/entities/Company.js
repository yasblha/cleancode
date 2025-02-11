"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Company {
    constructor(identifier, name, email, address, phone, bikes, createdAt, updatedAt) {
        this.identifier = identifier;
        this.name = name;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.bikes = bikes;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    static fromMongoModel(mongoCompany, _includeRelations = true) {
        return new Company(mongoCompany.identifier, mongoCompany.name, mongoCompany.email, mongoCompany.address, mongoCompany.phone, [], mongoCompany.createdAt, mongoCompany.updatedAt);
    }
}
exports.default = Company;
//# sourceMappingURL=Company.js.map