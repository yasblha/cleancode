import FindOneAlertUseCase from "@application/useCases/alerts/FindOneAlertUseCase";
import FindAllAlertUseCase from "@application/useCases/alerts/FindAllAlertUseCase";
export declare class AlertsController {
    private readonly FindOneAlertUseCase;
    private readonly FindAllAlertUseCase;
    constructor(FindOneAlertUseCase: FindOneAlertUseCase, FindAllAlertUseCase: FindAllAlertUseCase);
    findAll(): Promise<import("@domain/entities/alert").default[]>;
    findOne(identifier: string): Promise<import("@domain/entities/alert").default>;
}
