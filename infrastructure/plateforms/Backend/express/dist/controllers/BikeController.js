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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeController = void 0;
const BikesRepository_1 = require("@infrastructure/sequelize/repositories/BikesRepository");
const FindAllBikeUseCase_1 = __importDefault(require("@application/useCases/Bikes/FindAllBikeUseCase"));
class BikeController {
    constructor() {
        const bikesRepository = new BikesRepository_1.SequelizeBikesRepository();
        this.findAllBikeUseCase = new FindAllBikeUseCase_1.default(bikesRepository);
    }
    getBikes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const bikes = yield this.findAllBikeUseCase.execute();
                res.json(bikes);
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