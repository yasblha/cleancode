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
const express_1 = __importDefault(require("express"));
//import { SequelizeBikesRepository } from '../../../../sequelize/repositories/BikesRepository';
//import FindAllBikeUseCase from '../../../../../application/useCases/Bikes/FindAllBikeUseCase';
//import sequelize from '../../../../sequelize/sequelize';
const sequelize_1 = __importDefault(require("../../../../sequelize/sequelize"));
const app = (0, express_1.default)();
const port = 3001;
app.use(express_1.default.json());
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield sequelize_1.default.authenticate();
            console.log('Connexion à Postgres réussie.');
        }
        catch (error) {
            console.error('Erreur de connexion à la base de données :', error);
        }
        //const bikeRepo = new SequelizeBikesRepository();
        //const findAllBikeUseCase = new FindAllBikeUseCase(bikeRepo);
        app.get('/bikes', (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                //const bikes = await findAllBikeUseCase.execute();
                //res.json(bikes);
                console.log('GET /bikes');
            }
            catch (error) {
                res.status(500).json({ error: 'Erreur interne' });
            }
        }));
        app.get('/', (req, res) => {
            res.send('Hello, TypeScript + Node.js + Express!');
        });
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    });
}
start();
//# sourceMappingURL=index.js.map