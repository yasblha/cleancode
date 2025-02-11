import { ApiProperty } from "@nestjs/swagger";
import {
  IsBoolean,
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from "class-validator";
import VinIdentifier from "@domain/value-objects/Vinidentifier";
import { Bikes } from "@domain/entities/Bikes";

export class BikeDto implements Partial<Bikes> {
  @ApiProperty({ type: String, example: "1HGCM82633A004352" })
  @IsString()
  readonly vin: VinIdentifier;

  @ApiProperty({ example: "Yamaha" })
  @IsString()
  readonly brand: string;

  @ApiProperty({ example: "R1" })
  @IsString()
  readonly model: string;

  @ApiProperty({ example: 10000 })
  @IsNumber()
  @Min(0)
  readonly mileage: number;

  @ApiProperty({ example: "AB-123-CD" })
  @IsString()
  readonly registrationNumber: string;

  @ApiProperty({ example: "2021-01-01" })
  @IsDateString()
  readonly purchaseDate: Date;

  @ApiProperty({ example: "2023-01-01", nullable: true })
  @IsDateString()
  @IsOptional()
  readonly warrantyExpirationDate?: Date | null;

  @ApiProperty({ example: 42 })
  @IsNumber()
  readonly ownerId: number;

  @ApiProperty({ example: true })
  @IsBoolean()
  readonly isActive: boolean;

  @ApiProperty({ example: false })
  @IsBoolean()
  readonly isInMaintenance: boolean;

  @ApiProperty({ example: false })
  @IsBoolean()
  readonly isDecommissioned: boolean;

  @ApiProperty({ example: 12000, nullable: true })
  @IsNumber()
  @Min(0)
  @IsOptional()
  readonly nextMaintenanceMileage?: number | null;

  @ApiProperty({ example: "2024-06-15", nullable: true })
  @IsDateString()
  @IsOptional()
  readonly nextMaintenanceDate?: Date | null;

  @ApiProperty({ example: "2024-02-10T12:00:00.000Z" })
  @IsDateString()
  readonly createdAt: Date;

  @ApiProperty({ example: "2024-02-11T12:00:00.000Z", nullable: true })
  @IsDateString()
  @IsOptional()
  readonly updatedAt?: Date | null;
}

export class UpdateBikeDto implements Partial<Bikes> {
  @ApiProperty({ example: "Yamaha", required: false })
  @IsString()
  @IsOptional()
  readonly brand?: string;

  @ApiProperty({ example: "R1", required: false })
  @IsString()
  @IsOptional()
  readonly model?: string;

  @ApiProperty({ example: 10000, required: false })
  @IsNumber()
  @Min(0)
  @IsOptional()
  readonly mileage?: number;

  @ApiProperty({ example: "AB-123-CD", required: false })
  @IsString()
  @IsOptional()
  readonly registrationNumber?: string;

  @ApiProperty({ example: "2021-01-01", required: false })
  @IsDateString()
  @IsOptional()
  readonly purchaseDate?: Date;

  @ApiProperty({ example: "2023-01-01", nullable: true, required: false })
  @IsDateString()
  @IsOptional()
  readonly warrantyExpirationDate?: Date | null;

  @ApiProperty({ example: 42, required: false })
  @IsNumber()
  @IsOptional()
  readonly ownerId?: number;

  @ApiProperty({ example: true, required: false })
  @IsBoolean()
  @IsOptional()
  readonly isActive?: boolean;

  @ApiProperty({ example: false, required: false })
  @IsBoolean()
  @IsOptional()
  readonly isInMaintenance?: boolean;

  @ApiProperty({ example: false, required: false })
  @IsBoolean()
  @IsOptional()
  readonly isDecommissioned?: boolean;

  @ApiProperty({ example: 12000, nullable: true, required: false })
  @IsNumber()
  @Min(0)
  @IsOptional()
  readonly nextMaintenanceMileage?: number | null;

  @ApiProperty({ example: "2024-06-15", nullable: true, required: false })
  @IsDateString()
  @IsOptional()
  readonly nextMaintenanceDate?: Date | null;

  @ApiProperty({ example: "2024-02-10T12:00:00.000Z", required: false })
  @IsDateString()
  @IsOptional()
  readonly createdAt?: Date;

  @ApiProperty({ example: "2024-02-11T12:00:00.000Z", nullable: true, required: false })
  @IsDateString()
  @IsOptional()
  readonly updatedAt?: Date | null;
}
