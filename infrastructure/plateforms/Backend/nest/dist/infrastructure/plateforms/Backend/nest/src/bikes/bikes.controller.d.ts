import { Response } from "express";
import CreateBikeUseCase from "@application/useCases/bikes/CreateBikeUseCase";
import RemoveBikeUseCase from "@application/useCases/bikes/RemoveBikeUseCase";
import UpdateBikeUseCase from "@application/useCases/bikes/UpdateBikeUseCase";
import FindOneBikeUseCase from "@application/useCases/bikes/FindOneBikeUseCase";
import FindAllBikeUseCase from "@application/useCases/bikes/FindAllBikeUseCase";
import { BikeDto, UpdateBikeDto } from "./BikeDto";
export declare class BikesController {
    private readonly CreateBikeUseCase;
    private readonly RemoveBikeUseCase;
    private readonly UpdateBikeUseCase;
    private readonly FindOneBikeUseCase;
    private readonly FindAllBikeUseCase;
    constructor(CreateBikeUseCase: CreateBikeUseCase, RemoveBikeUseCase: RemoveBikeUseCase, UpdateBikeUseCase: UpdateBikeUseCase, FindOneBikeUseCase: FindOneBikeUseCase, FindAllBikeUseCase: FindAllBikeUseCase);
    create(bike: BikeDto, response: Response): Promise<any>;
    update(identifier: string, bike: UpdateBikeDto): Promise<import("@domain/entities/Bikes").Bikes | null>;
    remove(identifier: string, response: Response): Promise<any>;
    findOne(identifier: string): Promise<import("@domain/entities/Bikes").Bikes>;
    findAll(): Promise<import("@domain/entities/Bikes").Bikes[]>;
}
