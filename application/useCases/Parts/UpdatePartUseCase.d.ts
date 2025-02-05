import { PartsRepository } from '@domain/repositories/PartsRepository';
import { Parts } from '@domain/entities/Parts';
export default class UpdatePartUseCase {
    private readonly partsRepository;
    constructor(partsRepository: PartsRepository);
    execute(id: string, part: Partial<Parts>): Promise<Parts | null>;
}
