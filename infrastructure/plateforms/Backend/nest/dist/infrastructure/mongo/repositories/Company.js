"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Company_1 = require("../../../domain/entities/Company");
const Company_2 = require("../models/Company");
const CompanyNotFoundError_1 = require("../../../domain/errors/companies/CompanyNotFoundError");
class MongooseCompanyRepository {
    async create(company) {
        const newCompany = await Company_2.CompanyModel.create(company);
        return Company_1.default.fromMongoModel(newCompany);
    }
    async update(identifier, company) {
        const updatedCompany = await Company_2.CompanyModel.findOneAndUpdate({ identifier }, company, { new: true });
        if (!updatedCompany) {
            return new CompanyNotFoundError_1.default();
        }
        return Company_1.default.fromMongoModel(updatedCompany);
    }
    async remove(identifier) {
        const deletedCompany = await Company_2.CompanyModel.deleteOne({ identifier });
        if (!deletedCompany || deletedCompany.deletedCount === 0) {
            return new CompanyNotFoundError_1.default();
        }
        return deletedCompany.deletedCount;
    }
    async findOne(identifier) {
        const company = await Company_2.CompanyModel.findOne({ identifier });
        if (!company) {
            return new CompanyNotFoundError_1.default();
        }
        return Company_1.default.fromMongoModel(company);
    }
    async findAll() {
        return Company_2.CompanyModel.find();
    }
    async searchByName(name) {
        const companies = await Company_2.CompanyModel.find({
            name: { $regex: name, $options: "i" },
        });
        return companies.map((company) => Company_1.default.fromMongoModel(company));
    }
}
exports.default = MongooseCompanyRepository;
//# sourceMappingURL=Company.js.map