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
exports.UpdateIncidentDto = exports.IncidentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const Vinidentifier_1 = require("../../../../../../domain/value-objects/Vinidentifier");
class IncidentDto {
}
exports.IncidentDto = IncidentDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "2021-01-01" }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], IncidentDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Front wheel puncture" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(3),
    __metadata("design:type", String)
], IncidentDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], IncidentDto.prototype, "isResolved", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "1HGCM82633A004352" }),
    (0, class_validator_1.Matches)(Vinidentifier_1.default.REGEX),
    __metadata("design:type", String)
], IncidentDto.prototype, "bikeVin", void 0);
class UpdateIncidentDto {
}
exports.UpdateIncidentDto = UpdateIncidentDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "2021-01-01" }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], UpdateIncidentDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Front wheel puncture" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(3),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateIncidentDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UpdateIncidentDto.prototype, "isResolved", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "1HGCM82633A004352" }),
    (0, class_validator_1.Matches)(Vinidentifier_1.default.REGEX),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateIncidentDto.prototype, "bikeVin", void 0);
//# sourceMappingURL=IncidentDto.js.map