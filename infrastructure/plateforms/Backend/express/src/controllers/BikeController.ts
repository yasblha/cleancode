import { Request, Response } from "express";
import { SequelizeBikesRepository } from "@infrastructure/sequelize/repositories/BikesRepository";
import FindAllBikeUseCase from "@application/useCases/Bikes/FindAllBikeUseCase";

export class BikeController {
    private findAllBikeUseCase: FindAllBikeUseCase;

    constructor() {
        const bikesRepository = new SequelizeBikesRepository();
        this.findAllBikeUseCase = new FindAllBikeUseCase(bikesRepository);
    }

    async getBikes(req: Request, res: Response): Promise<void> {
        try {
            const bikes = await this.findAllBikeUseCase.execute();
            res.json(bikes);
        } catch (error) {
            console.error("Erreur dans BikeController.getBikes :", error);
            res.status(500).json({ error: "Erreur interne" });
        }
    }
}