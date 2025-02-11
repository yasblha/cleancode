import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { Response } from "express";

import VinIdentifier from "@domain/value-objects/Vinidentifier";
import CreateBikeUseCase from "@application/useCases/bikes/CreateBikeUseCase";
import RemoveBikeUseCase from "@application/useCases/bikes/RemoveBikeUseCase";
import UpdateBikeUseCase from "@application/useCases/bikes/UpdateBikeUseCase";
import FindOneBikeUseCase from "@application/useCases/bikes/FindOneBikeUseCase";
import FindAllBikeUseCase from "@application/useCases/bikes/FindAllBikeUseCase";
import {
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiProperty,
  ApiResponse,
} from "@nestjs/swagger";
import { BikeDto, UpdateBikeDto } from "./BikeDto";

@Controller("bikes")
@ApiBearerAuth()
export class BikesController {
  constructor(
      private readonly CreateBikeUseCase: CreateBikeUseCase,
      private readonly RemoveBikeUseCase: RemoveBikeUseCase,
      private readonly UpdateBikeUseCase: UpdateBikeUseCase,
      private readonly FindOneBikeUseCase: FindOneBikeUseCase,
      private readonly FindAllBikeUseCase: FindAllBikeUseCase,
  ) {}

  @Post()
  @ApiProperty({ type: BikeDto })
  @ApiCreatedResponse({
    description: "The record has been successfully created.",
  })
  async create(@Body() bike: BikeDto, @Res() response: Response) {
    // Conversion minimale : on force le type du DTO pour satisfaire la signature attendue.
    const createdBike = await this.CreateBikeUseCase.execute(bike as unknown as any);
    return response.status(HttpStatus.CREATED).json(createdBike);
  }

  @Patch(":id")
  @ApiNotFoundResponse({ description: "Bike not found." })
  @ApiBody({ type: UpdateBikeDto })
  @ApiResponse({ type: BikeDto, status: HttpStatus.OK })
  async update(@Param("id") identifier: string, @Body() bike: UpdateBikeDto) {
    const vin = new VinIdentifier(identifier);
    return await this.UpdateBikeUseCase.execute(vin, bike);
  }

  @Delete(":id")
  @ApiNotFoundResponse({ description: "Bike not found." })
  @ApiResponse({ description: "Bike removed", status: HttpStatus.NO_CONTENT })
  async remove(@Param("id") identifier: string, @Res() response: Response) {
    const vin = new VinIdentifier(identifier);
    await this.RemoveBikeUseCase.execute(vin);
    return response.status(HttpStatus.NO_CONTENT).json();
  }

  @Get(":id")
  @ApiResponse({ type: BikeDto, status: HttpStatus.OK })
  @ApiNotFoundResponse({ description: "Bike not found." })
  async findOne(@Param("id") identifier: string) {
    const vin = new VinIdentifier(identifier);
    return await this.FindOneBikeUseCase.execute(vin);
  }

  @Get()
  @ApiResponse({ type: BikeDto, isArray: true, status: 200 })
  async findAll() {
    return this.FindAllBikeUseCase.execute();
  }
}
