import express, { Request, Response } from 'express';
import '@infrastructure/mongo/mongo.connection';
import cors from 'cors';
import { initializeDatabase } from '@infrastructure/sequelize/init';
import bikeRoutes from '@app/routes/bike.routes';
import userRoutes from '@app/routes/user.routes';
import incidentRoutes from "@app/routes/incident.routes";
import maintenanceRoutes from '@app/routes/maintenance.routes';
import partsRoutes from '@app/routes/parts.routes';

const app = express();
const port = 3001;

app.use(cors());

app.use(express.json());

app.use('/bikes', bikeRoutes);
app.use('/users', userRoutes);
app.use('/incidents', incidentRoutes);
app.use('/maintenance', maintenanceRoutes);
app.use('/parts', partsRoutes);

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
