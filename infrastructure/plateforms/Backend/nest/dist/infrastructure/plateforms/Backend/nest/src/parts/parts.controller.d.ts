import { Response } from "express";
import CreatePartUseCase from "@application/useCases/parts/CreatePartUseCase";
import RemovePartUseCase from "@application/useCases/parts/RemovePartUseCase";
import UpdatePartUseCase from "@application/useCases/parts/UpdatePartUseCase";
import FindOnePartUseCase from "@application/useCases/parts/FindOnePartUseCase";
import FindAllPartUseCase from "@application/useCases/parts/FindAllPartUseCase";
import SearchByReferenceUseCase from "@application/useCases/Parts/SearchByReferenceUseCase";
import { PartDto, UpdatePartDto } from "./PartDto";
import { Parts } from "@domain/entities/Parts";
export declare class PartsController {
    private readonly CreatePartUseCase;
    private readonly RemovePartUseCase;
    private readonly UpdatePartUseCase;
    private readonly FindOnePartUseCase;
    private readonly FindAllPartUseCase;
    private readonly SearchByReferenceUseCase;
    constructor(CreatePartUseCase: CreatePartUseCase, RemovePartUseCase: RemovePartUseCase, UpdatePartUseCase: UpdatePartUseCase, FindOnePartUseCase: FindOnePartUseCase, FindAllPartUseCase: FindAllPartUseCase, SearchByReferenceUseCase: SearchByReferenceUseCase);
    create(part: PartDto, response: Response): Promise<any>;
    update(identifier: string, part: UpdatePartDto): Promise<Parts>;
    remove(identifier: string, response: Response): Promise<any>;
    findOne(identifier: string): Promise<Parts>;
    findAll(): Promise<Parts[]>;
    searchByReference(reference: string): Promise<Parts[]>;
}
