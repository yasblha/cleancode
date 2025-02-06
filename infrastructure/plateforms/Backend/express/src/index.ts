import express, { Request, Response } from 'express';
import './database/mongo.connection';
import initializeDatabase from '@infrastructure/sequelize/init';
import bikeRoutes from './routes/bike.routes';
import userRoutes from './routes/user.routes';

const app = express();
const port = 3001;

app.use(express.json());

app.use('/bikes', bikeRoutes);
app.use('/users', userRoutes);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript + Node.js + Express!');
});

async function start(): Promise<void> {
    try {
        await initializeDatabase();
    } catch (error) {
        console.error('Error while initializing database:', error);
    }
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}

start();
