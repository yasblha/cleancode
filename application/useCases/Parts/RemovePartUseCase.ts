import PartNotFoundError from "@domain/errors/parts/PartNotFoundError";
import { PartsRepository } from "@domain/repositories/PartsRepository";

export default class RemovePartUseCase {
  public constructor(
      private readonly partRepository: PartsRepository,
  ) {}

  public async execute(identifier: string): Promise<number> {
    const deletedPart = await this.partRepository.remove(identifier);

    if (!deletedPart) {
      throw new PartNotFoundError("Part not found");
    }

    return 1;
  }
}
