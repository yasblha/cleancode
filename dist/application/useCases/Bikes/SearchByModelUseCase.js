"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class SearchByModelUseCase {
    constructor(bikeRepository) {
        this.bikeRepository = bikeRepository;
    }
    execute(model) {
        return __awaiter(this, void 0, void 0, function* () {
            // Implémenter la logique de recherche par modèle
            const allBikes = yield this.bikeRepository.findAll();
            return allBikes.filter((bike) => bike.model.toLowerCase().includes(model.toLowerCase()));
        });
    }
}
exports.default = SearchByModelUseCase;
