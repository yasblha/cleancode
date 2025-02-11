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
exports.UpdateBikeDto = exports.BikeDto = void 0;
const Incidents_1 = require("../../../../../../domain/entities/Incidents");
const Maintenance_1 = require("../../../../../../domain/entities/Maintenance");
const Vinidentifier_1 = require("../../../../../../domain/value-objects/Vinidentifier");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class BikeDto {
}
exports.BikeDto = BikeDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: "1HGCM82633A004352" }),
    __metadata("design:type", Vinidentifier_1.default)
], BikeDto.prototype, "vin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Yamaha" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BikeDto.prototype, "brand", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "R1" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BikeDto.prototype, "model", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 10000 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], BikeDto.prototype, "mileage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "2021-01-01" }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], BikeDto.prototype, "purchaseDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "2023-01-01" }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], BikeDto.prototype, "warrantyExpirationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], BikeDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], BikeDto.prototype, "isDecommissioned", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Maintenance_1.Maintenance, isArray: true, example: [] }),
    __metadata("design:type", Array)
], BikeDto.prototype, "maintenances", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Incidents_1.Incidents, isArray: true, example: [] }),
    __metadata("design:type", Array)
], BikeDto.prototype, "incidents", void 0);
class UpdateBikeDto {
}
exports.UpdateBikeDto = UpdateBikeDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Yamaha" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateBikeDto.prototype, "brand", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "R1" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateBikeDto.prototype, "model", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 10000 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateBikeDto.prototype, "mileage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "2021-01-01" }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], UpdateBikeDto.prototype, "purchaseDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "2023-01-01" }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], UpdateBikeDto.prototype, "warrantyExpirationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UpdateBikeDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UpdateBikeDto.prototype, "isDecommissioned", void 0);
//# sourceMappingURL=BikeDto.js.map