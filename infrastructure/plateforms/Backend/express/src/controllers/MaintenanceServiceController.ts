import { Request, Response } from "express";
import { SequelizeMaintenanceServicesRepository } from "@infrastructure/sequelize/repositories/MaintenanceServicesRepository";
import CreateMaintenanceServiceUseCase from "@application/useCases/MaintenanceServices/CreateMaintenanceServiceUseCase";
import FindAllMaintenanceServicesUseCase from "@application/useCases/MaintenanceServices/FindAllMaintenanceServicesUseCase";
import FindOneMaintenanceServiceUseCase from "@application/useCases/MaintenanceServices/FindOneMaintenanceServiceUseCase";
import UpdateMaintenanceServiceUseCase from "@application/useCases/MaintenanceServices/UpdateMaintenanceServiceUseCase";
import RemoveMaintenanceServiceUseCase from "@application/useCases/MaintenanceServices/RemoveMaintenanceServiceUseCase";
import FindMaintenanceServicesByBikeIdUseCase from "@application/useCases/MaintenanceServices/FindMaintenanceServicesByBikeIdUseCase";
import FindMaintenanceServicesByTechnicianIdUseCase from "@application/useCases/MaintenanceServices/FindMaintenanceServicesByTechnicianIdUseCase";

export class MaintenanceServiceController {
    private createMaintenanceServiceUseCase: CreateMaintenanceServiceUseCase;
    private findAllMaintenanceServicesUseCase: FindAllMaintenanceServicesUseCase;
    private findOneMaintenanceServiceUseCase: FindOneMaintenanceServiceUseCase;
    private updateMaintenanceServiceUseCase: UpdateMaintenanceServiceUseCase;
    private removeMaintenanceServiceUseCase: RemoveMaintenanceServiceUseCase;
    private findByBikeIdUseCase: FindMaintenanceServicesByBikeIdUseCase;
    private findByTechnicianIdUseCase: FindMaintenanceServicesByTechnicianIdUseCase;

    constructor() {
        const repo = new SequelizeMaintenanceServicesRepository();
        this.createMaintenanceServiceUseCase = new CreateMaintenanceServiceUseCase(repo);
        this.findAllMaintenanceServicesUseCase = new FindAllMaintenanceServicesUseCase(repo);
        this.findOneMaintenanceServiceUseCase = new FindOneMaintenanceServiceUseCase(repo);
        this.updateMaintenanceServiceUseCase = new UpdateMaintenanceServiceUseCase(repo);
        this.removeMaintenanceServiceUseCase = new RemoveMaintenanceServiceUseCase(repo);
        this.findByBikeIdUseCase = new FindMaintenanceServicesByBikeIdUseCase(repo);
        this.findByTechnicianIdUseCase = new FindMaintenanceServicesByTechnicianIdUseCase(repo);
    }

    async createMaintenanceService(req: Request, res: Response): Promise<void> {
        try {
            const service = await this.createMaintenanceServiceUseCase.execute(req.body);
            res.status(201).json(service);
        } catch (error) {
            console.error("Erreur dans MaintenanceServiceController.createMaintenanceService:", error);
            res.status(500).json({ error: "Erreur interne" });
        }
    }

    async getAllMaintenanceServices(req: Request, res: Response): Promise<void> {
        try {
            const services = await this.findAllMaintenanceServicesUseCase.execute();
            res.json(services);
        } catch (error) {
            console.error("Erreur dans MaintenanceServiceController.getAllMaintenanceServices:", error);
            res.status(500).json({ error: "Erreur interne" });
        }
    }

    async getMaintenanceService(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const service = await this.findOneMaintenanceServiceUseCase.execute(id);
            if (!service) {
                res.status(404).json({ error: "Service de maintenance non trouvé" });
            } else {
                res.json(service);
            }
        } catch (error) {
            console.error("Erreur dans MaintenanceServiceController.getMaintenanceService:", error);
            res.status(500).json({ error: "Erreur interne" });
        }
    }

    async updateMaintenanceService(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const updated = await this.updateMaintenanceServiceUseCase.execute(id, req.body);
            if (!updated) {
                res.status(404).json({ error: "Service de maintenance non trouvé" });
            } else {
                res.json(updated);
            }
        } catch (error) {
            console.error("Erreur dans MaintenanceServiceController.updateMaintenanceService:", error);
            res.status(500).json({ error: "Erreur interne" });
        }
    }

    async removeMaintenanceService(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const removed = await this.removeMaintenanceServiceUseCase.execute(id);
            if (!removed) {
                res.status(404).json({ error: "Service de maintenance non trouvé" });
            } else {
                res.status(204).send();
            }
        } catch (error) {
            console.error("Erreur dans MaintenanceServiceController.removeMaintenanceService:", error);
            res.status(500).json({ error: "Erreur interne" });
        }
    }

    async getMaintenanceServicesByBike(req: Request, res: Response): Promise<void> {
        try {
            const { bikeId } = req.params;
            const services = await this.findByBikeIdUseCase.execute(bikeId);
            res.json(services);
        } catch (error) {
            console.error("Erreur dans MaintenanceServiceController.getMaintenanceServicesByBike:", error);
            res.status(500).json({ error: "Erreur interne" });
        }
    }

    async getMaintenanceServicesByTechnician(req: Request, res: Response): Promise<void> {
        try {
            const { technicianId } = req.params;
            const services = await this.findByTechnicianIdUseCase.execute(technicianId);
            res.json(services);
        } catch (error) {
            console.error("Erreur dans MaintenanceServiceController.getMaintenanceServicesByTechnician:", error);
            res.status(500).json({ error: "Erreur interne" });
        }
    }
}
