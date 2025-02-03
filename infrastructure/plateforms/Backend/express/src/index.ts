import express, { Request, Response } from 'express';
//import { SequelizeBikesRepository } from '../../../../sequelize/repositories/BikesRepository';
//import FindAllBikeUseCase from '../../../../../application/useCases/Bikes/FindAllBikeUseCase';
// @ts-ignore
import sequelizedb from "../../../../sequelize/sequelizedb";

const app = express();

const port = 3001;
app.use(express.json());

async function start() {
    try {
        await sequelizedb.authenticate();
        console.log('Connexion à Postgres réussie.');
    } catch (error) {
        console.error('Erreur de connexion à la base de données :', error);
    }

    //const bikeRepo = new SequelizeBikesRepository();
    //const findAllBikeUseCase = new FindAllBikeUseCase(bikeRepo);

    app.get('/bikes', async (req, res) => {
      try {
            //const bikes = await findAllBikeUseCase.execute();
            //res.json(bikes);
          console.log('GET /bikes');
        } catch (error) {
            res.status(500).json({error: 'Erreur interne'});
        }
    });

    app.get('/', (req, res) => {
        res.send('Hello, TypeScript + Node.js + Express!');
    });

    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    })
}
start();
