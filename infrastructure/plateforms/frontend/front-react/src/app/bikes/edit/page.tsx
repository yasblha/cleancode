"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import BikeForm, { BikeFormData } from "@/forms/BikeForm";

export default function EditBikePage() {
    const router = useRouter();
    const [vin, setVin] = useState<string | null>(null);
    const [defaultValues, setDefaultValues] = useState<BikeFormData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        try {
            // 🔹 Récupérer le VIN du localStorage
            const storedVIN = typeof window !== "undefined" ? localStorage.getItem("bikeVIN") : null;
            if (!storedVIN) {
                setError("Aucune moto sélectionnée.");
                setLoading(false);
                return;
            }

            setVin(storedVIN);

            // 🔹 Charger la moto depuis la liste stockée
            const bikesList = localStorage.getItem("bikesList");
            if (bikesList) {
                const bikes: BikeFormData[] = JSON.parse(bikesList);
                const foundBike = bikes.find((bike) => bike.vin === storedVIN);
                if (foundBike) {
                    setDefaultValues(foundBike);
                } else {
                    setError("Moto non trouvée.");
                }
            } else {
                setError("Impossible de charger les données.");
            }
        } catch (err) {
            console.error("Erreur lors du parsing des données :", err);
            setError("Erreur lors du chargement.");
        } finally {
            setLoading(false);
        }
    }, []);

    const handleSubmit = async (data: BikeFormData) => {
        setLoading(true);
        try {
            console.log("data.vin", data.vin);
            const response = await fetch(`http://localhost:3001/bikes/${encodeURIComponent(data.vin)}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error("Erreur lors de la mise à jour de la moto.");
            }
            // 🔹 Mettre à jour les données stockées
            localStorage.setItem("bikeData", JSON.stringify(data));
            router.push("/bikes");
        } catch (err) {
            console.error("Erreur lors du PUT :", err);
            setError(err instanceof Error ? err.message : "Erreur inattendue.");
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div>Chargement...</div>;
    }
    if (error) {
        return (
          <div className="container mx-auto p-8">
              <p className="text-red-500">{error}</p>
          </div>
        );
    }
    if (!defaultValues) {
        return <div>Aucune donnée disponible pour l&apos;édition.</div>;  {}
    }

    return (
      <div className="container mx-auto p-8">
          <h1 className="text-2xl font-bold mb-4">Modifier la moto (VIN: {vin})</h1>
          <BikeForm onSubmit={handleSubmit} defaultValues={defaultValues} />
      </div>
    );
}
