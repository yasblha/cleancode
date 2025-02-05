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
exports.BikeController = void 0;
//import { SequelizeBikesRepository } from "@infrastructure/sequelize/repositories/BikesRepository";
//import FindAllBikeUseCase from "@application/useCases/Bikes/FindAllBikeUseCase";
class BikeController {
    //    private findAllBikeUseCase: FindAllBikeUseCase;
    constructor() {
        //        const bikesRepository = new SequelizeBikesRepository();
        //        this.findAllBikeUseCase = new FindAllBikeUseCase(bikesRepository);
    }
    getBikes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //            const bikes = await this.findAllBikeUseCase.execute();
                //            res.json(bikes);
            }
            catch (error) {
                console.error("Erreur dans BikeController.getBikes :", error);
                res.status(500).json({ error: "Erreur interne" });
            }
        });
    }
}
exports.BikeController = BikeController;
//# sourceMappingURL=BikeController.js.map