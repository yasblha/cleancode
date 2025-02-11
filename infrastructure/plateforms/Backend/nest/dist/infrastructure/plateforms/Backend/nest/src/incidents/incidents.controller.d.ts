import { Response } from "express";
import CreateIncidentUseCase from "@application/useCases/incidents/CreateIncidentUseCase";
import RemoveIncidentUseCase from "@application/useCases/incidents/RemoveIncidentUseCase";
import UpdateIncidentUseCase from "@application/useCases/incidents/UpdateIncidentUseCase";
import FindOneIncidentUseCase from "@application/useCases/incidents/FindOneIncidentUseCase";
import FindAllIncidentUseCase from "@application/useCases/incidents/FindAllIncidentUseCase";
import SearchByBikeUseCase from "@application/useCases/incidents/SearchByBikeUseCase";
import { IncidentDto, UpdateIncidentDto } from "./IncidentDto";
import { Incidents } from "@domain/entities/Incidents";
export declare class IncidentsController {
    private readonly CreateIncidentUseCase;
    private readonly RemoveIncidentUseCase;
    private readonly UpdateIncidentUseCase;
    private readonly FindOneIncidentUseCase;
    private readonly FindAllIncidentUseCase;
    private readonly SearchByBikeUseCase;
    constructor(CreateIncidentUseCase: CreateIncidentUseCase, RemoveIncidentUseCase: RemoveIncidentUseCase, UpdateIncidentUseCase: UpdateIncidentUseCase, FindOneIncidentUseCase: FindOneIncidentUseCase, FindAllIncidentUseCase: FindAllIncidentUseCase, SearchByBikeUseCase: SearchByBikeUseCase);
    create(incident: IncidentDto, response: Response): Promise<any>;
    update(identifier: string, incident: UpdateIncidentDto): Promise<Incidents>;
    remove(identifier: string, response: Response): Promise<any>;
    findOne(identifier: string, response: Response): Promise<Incidents>;
    findAll(): Promise<Incidents[]>;
    searchByBike(vin: string): Promise<Incidents[]>;
}
