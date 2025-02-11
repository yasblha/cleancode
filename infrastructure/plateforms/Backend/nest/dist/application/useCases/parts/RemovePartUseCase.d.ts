import { PartsRepository } from "@domain/repositories/PartsRepository";
export default class RemovePartUseCase {
    private readonly partRepository;
    constructor(partRepository: PartsRepository);
    execute(identifier: string): Promise<number>;
}
