import {Parts} from "@domain/entities/Parts";

import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsDateString, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class PartDto implements Partial<Parts> {
  @ApiProperty({ example: "Front wheel" })
  @IsString()
  readonly name: string;

  @ApiProperty({ example: "Front wheel for a bike" })
  @IsString()
  readonly description: string;

  @ApiProperty({ example: 10 })
  @IsNumber()
  @Min(0)
  readonly stockQuantity: number;

  @ApiProperty({ example: 5 })
  @IsNumber()
  @Min(0)
  readonly minStockLevel: number;

  @ApiProperty({ example: 10.5 })
  @IsNumber()
  @Min(0)
  readonly price: number;

  @ApiProperty({ example: "145xba" })
  @IsString()
  readonly reference: string;

  @ApiProperty({ example: "2024-02-10T12:00:00.000Z" })
  @IsDate()
  readonly createdAt: Date;

  @ApiProperty({ example: "2024-02-11T12:00:00.000Z", nullable: true })
  @IsDate()
  @IsOptional()
  readonly updatedAt?: Date | null;
}

export class UpdatePartDto implements Partial<Parts> {
  @ApiProperty({ example: "Front wheel", required: false })
  @IsString()
  @IsOptional()
  readonly name?: string;

  @ApiProperty({ example: "Front wheel for a bike", required: false })
  @IsString()
  @IsOptional()
  readonly description?: string;

  @ApiProperty({ example: 10, required: false })
  @IsNumber()
  @Min(0)
  @IsOptional()
  readonly stockQuantity?: number;

  @ApiProperty({ example: 5, required: false })
  @IsNumber()
  @Min(0)
  @IsOptional()
  readonly minStockLevel?: number;

  @ApiProperty({ example: 10.5, required: false })
  @IsNumber()
  @Min(0)
  @IsOptional()
  readonly price?: number;

  @ApiProperty({ example: "145xba", required: false })
  @IsString()
  @IsOptional()
  readonly reference?: string;

  @ApiProperty({ example: "2024-02-10T12:00:00.000Z", required: false })
  @IsDate()
  @IsOptional()
  readonly createdAt?: Date;

  @ApiProperty({ example: "2024-02-11T12:00:00.000Z", nullable: true, required: false })
  @IsDate()
  @IsOptional()
  readonly updatedAt?: Date | null;
}
