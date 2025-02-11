"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SearchByReferenceUseCase {
    constructor(partRepository) {
        this.partRepository = partRepository;
    }
    async execute(reference) {
        return this.partRepository.searchByReference(reference);
    }
}
exports.default = SearchByReferenceUseCase;
//# sourceMappingURL=SearchByReferenceUseCase.js.map