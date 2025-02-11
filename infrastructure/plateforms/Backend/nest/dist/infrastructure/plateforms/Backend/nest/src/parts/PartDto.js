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
exports.UpdatePartDto = exports.PartDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class PartDto {
}
exports.PartDto = PartDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "2021-01-01" }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], PartDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Front wheel" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PartDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "145xba" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PartDto.prototype, "reference", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Front wheel for a bike" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PartDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 10 }),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], PartDto.prototype, "stockQuantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 5 }),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], PartDto.prototype, "minStockLevel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 10.5 }),
    __metadata("design:type", Number)
], PartDto.prototype, "price", void 0);
class UpdatePartDto {
}
exports.UpdatePartDto = UpdatePartDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "2021-01-01" }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], UpdatePartDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Front wheel" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdatePartDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "145xba" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdatePartDto.prototype, "reference", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Front wheel for a bike" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdatePartDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 10 }),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdatePartDto.prototype, "stockQuantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 5 }),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdatePartDto.prototype, "minStockLevel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 10.5 }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdatePartDto.prototype, "price", void 0);
//# sourceMappingURL=PartDto.js.map