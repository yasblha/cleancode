import { Router } from "express";
import { BikeController } from "../controllers/BikeController";

const router = Router();
const bikeController = new BikeController();

// Récupérer la liste de toutes les motos
router.get("/", async (req, res) => {
    await bikeController.getBikes(req, res);
    console.log("GET /bikes");
});

// Récupérer une moto par son VIN (passé dans l'URL)
router.get("/:vin", async (req, res) => {
    await bikeController.getBike(req, res);
    console.log(`GET /bikes/${req.params.vin}`);
});

// Créer une nouvelle moto
router.post("/", async (req, res) => {
    await bikeController.createBike(req, res);
    console.log("POST /bikes");
});

// Mettre à jour une moto existante (identifiée par son VIN)
router.put("/:vin", async (req, res) => {
    await bikeController.updateBike(req, res);
    console.log(`PUT /bikes/${req.params.vin}`);
});

// Supprimer une moto (par VIN)
router.delete("/:vin", async (req, res) => {
    await bikeController.removeBike(req, res);
    console.log(`DELETE /bikes/${req.params.vin}`);
});



export default router;
