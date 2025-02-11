import { Request, Response } from "express";
import { SequelizePartsRepository } from "@infrastructure/sequelize/repositories/PartsRepository";
import MongooseAlertRepository from "@infrastructure/mongo/repositories/Alert"
import CreatePartUseCase from "@application/useCases/Parts/CreatePartUseCase";
import FindAllPartsUseCase from "@application/useCases/Parts/FindAllPartsUseCase";
import FindOnePartUseCase from "@application/useCases/Parts/FindOnePartUseCase";
import UpdatePartUseCase from "@application/useCases/Parts/UpdatePartUseCase";
import RemovePartUseCase from "@application/useCases/Parts/RemovePartUseCase";
import FindLowStockPartsUseCase from "@application/useCases/Parts/FindLowStockPartsUseCase";
import CreateAlertUseCase from "@application/useCases/alerts/CreateAlertUseCase";
import PartNotFoundError from "@domain/errors/parts/PartNotFoundError";

export class PartsController {
    private createPartUseCase: CreatePartUseCase;
    private findAllPartsUseCase: FindAllPartsUseCase;
    private findOnePartUseCase: FindOnePartUseCase;
    private updatePartUseCase: UpdatePartUseCase;
    private removePartUseCase: RemovePartUseCase;
    private findLowStockPartsUseCase: FindLowStockPartsUseCase;

    constructor() {
        const partsRepository = new SequelizePartsRepository();

        const alertRepository = new MongooseAlertRepository();
        const createAlertUseCase = new CreateAlertUseCase(alertRepository);

        this.createPartUseCase = new CreatePartUseCase(partsRepository);
        this.findAllPartsUseCase = new FindAllPartsUseCase(partsRepository);
        this.findOnePartUseCase = new FindOnePartUseCase(partsRepository);
        this.updatePartUseCase = new UpdatePartUseCase(partsRepository, createAlertUseCase);
        this.removePartUseCase = new RemovePartUseCase(partsRepository);
        this.findLowStockPartsUseCase = new FindLowStockPartsUseCase(partsRepository);
    }

    /** ✅ Création d'une pièce */
    async createPart(req: Request, res: Response): Promise<void> {
        try {
            const part = await this.createPartUseCase.execute(req.body);
            res.status(201).json(part);
        } catch (error) {
            console.error("Erreur dans PartsController.createPart:", error);
            res.status(500).json({ error: "Erreur interne" });
        }
    }

    /** ✅ Récupérer toutes les pièces */
    async getParts(req: Request, res: Response): Promise<void> {
        try {
            const parts = await this.findAllPartsUseCase.execute();
            res.json(parts);
        } catch (error) {
            console.error("Erreur dans PartsController.getParts:", error);
            res.status(500).json({ error: "Erreur interne" });
        }
    }

    /** ✅ Récupérer une seule pièce */
    async getPart(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const part = await this.findOnePartUseCase.execute(id);
            if (!part) {
                res.status(404).json({ error: "Pièce non trouvée" });
            } else {
                res.json(part);
            }
        } catch (error) {
            console.error("Erreur dans PartsController.getPart:", error);
            res.status(500).json({ error: "Erreur interne" });
        }
    }

    /** ✅ Mettre à jour une pièce */
    async updatePart(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            if (!id) {
                res.status(400).json({ error: "ID de pièce manquant." });
                return;
            }
            if (!req.body || Object.keys(req.body).length === 0) {
                res.status(400).json({ error: "Données de mise à jour manquantes." });
                return;
            }

            const updatedPart = await this.updatePartUseCase.execute(id, req.body);
            res.status(200).json(updatedPart);
        } catch (error) {
            console.error("Erreur dans PartsController.updatePart:", error);

            if (error instanceof PartNotFoundError) {
                res.status(404).json({ error: "Pièce non trouvée." });
            } else {
                res.status(500).json({ error: "Erreur interne du serveur." });
            }
        }
    }

    /** ✅ Supprimer une pièce */
    async removePart(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const removed = await this.removePartUseCase.execute(id);
            if (!removed) {
                res.status(404).json({ error: "Pièce non trouvée" });
            } else {
                res.status(204).send();
            }
        } catch (error) {
            console.error("Erreur dans PartsController.removePart:", error);
            res.status(500).json({ error: "Erreur interne" });
        }
    }

    /** ✅ Récupérer les pièces avec stock bas */
    async getLowStockParts(req: Request, res: Response): Promise<void> {
        try {
            const parts = await this.findLowStockPartsUseCase.execute();
            res.json(parts);
        } catch (error) {
            console.error("Erreur dans PartsController.getLowStockParts:", error);
            res.status(500).json({ error: "Erreur interne" });
        }
    }
}
