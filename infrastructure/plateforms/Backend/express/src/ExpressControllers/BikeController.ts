import { Request, Response } from "express";
import {CoreBikeController} from "@infrastructure/controllers/CoreBikeController";

export class BikeController {
    private coreController: CoreBikeController;

    constructor() {
        this.coreController = new CoreBikeController();
    }

    async handleGetBikes(req: Request, res: Response): Promise<void> {
        try {
            const bikes = await this.coreController.getBikes();
            res.json(bikes);
        } catch (error) {
            console.error("Erreur dans BikeController.handleGetBikes :", error);
            res.status(500).json({ error: "Erreur interne" });
        }
    }
}