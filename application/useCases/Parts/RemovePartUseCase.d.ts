import { PartsRepository } from '@domain/repositories/PartsRepository';
export default class RemovePartUseCase {
    private readonly partsRepository;
    constructor(partsRepository: PartsRepository);
    execute(id: string): Promise<boolean>;
}
