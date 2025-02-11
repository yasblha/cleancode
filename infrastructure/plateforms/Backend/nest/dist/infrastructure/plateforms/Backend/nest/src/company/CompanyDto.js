"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCompanyDto = exports.CompanyDto = void 0;
const Vinidentifier_1 = require("../../../../../../domain/value-objects/Vinidentifier");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CompanyDto {
}
exports.CompanyDto = CompanyDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Motorbike Inc." }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(3),
    __metadata("design:type", String)
], CompanyDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "example@example.com" }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CompanyDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "123 rue du motard, 17000 La Rochelle" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CompanyDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "0123456789" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CompanyDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ["1HGCM82633A004352"] }),
    (0, class_validator_1.Matches)(Vinidentifier_1.default.REGEX, { each: true }),
    __metadata("design:type", Object)
], CompanyDto.prototype, "bikes", void 0);
class UpdateCompanyDto {
}
exports.UpdateCompanyDto = UpdateCompanyDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Motorbike Inc." }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(3),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateCompanyDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "example@example.com" }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateCompanyDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "123 rue du motard, 17000 La Rochelle" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateCompanyDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "0123456789" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateCompanyDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ["1HGCM82633A004352"] }),
    (0, class_validator_1.Matches)(Vinidentifier_1.default.REGEX, { each: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], UpdateCompanyDto.prototype, "bikesVin", void 0);
//# sourceMappingURL=CompanyDto.js.map