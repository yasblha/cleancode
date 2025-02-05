import { PartsRepository } from '@domain/repositories/PartsRepository';
import { Parts } from '@domain/entities/Parts';
export default class CreatePartUseCase {
    private readonly partsRepository;
    constructor(partsRepository: PartsRepository);
    execute(part: Parts): Promise<Parts>;
}
