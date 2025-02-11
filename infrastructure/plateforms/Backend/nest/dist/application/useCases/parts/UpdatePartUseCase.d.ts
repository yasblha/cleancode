import { PartsRepository } from '@domain/repositories/PartsRepository';
import { Parts } from '@domain/entities/Parts';
import CreateAlertUseCase from "../alerts/CreateAlertUseCase";
export default class UpdatePartUseCase {
    private readonly partRepository;
    private readonly createAlertUseCase;
    constructor(partRepository: PartsRepository, createAlertUseCase: CreateAlertUseCase);
    execute(identifier: string, part: Partial<Parts>): Promise<Parts>;
}
