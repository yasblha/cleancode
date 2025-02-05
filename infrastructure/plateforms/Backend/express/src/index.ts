import express, { Request, Response } from 'express';
import './database/mongo.connection';
import sequelizedb from './database/sequelizedb';
import bikeRoutes from './routes/bike.routes';

const app = express();
const port = 3001;

app.use(express.json());

app.use('/bikes', bikeRoutes);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript + Node.js + Express!');
});

async function start(): Promise<void> {
    try {
        await sequelizedb.authenticate();
        console.log('Connexion à Postgres réussie.');
    } catch (error) {
        console.error('Erreur de connexion à la base de données :', error);
    }

    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}

start();
