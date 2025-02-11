"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Bike } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BikesPage() {
    const router = useRouter();
    const [bikes, setBikes] = useState<Bike[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function fetchBikes() {
            try {
                const res = await fetch("http://localhost:3001/bikes");
                if (!res.ok) {
                    throw new Error("Erreur lors de la récupération des données");
                }
                const data = await res.json();
                localStorage.setItem("bikesList", JSON.stringify(data)); // Stocke la liste des bikes
                setBikes(data);
                console.log(data);
            } catch (error) {
                console.error("Erreur lors du chargement des motos :", error);
            } finally {
                setLoading(false);
            }
        }
        fetchBikes();
    }, []);

    // 🔹 Fonction pour stocker le VIN et rediriger vers la modification
    const handleEdit = (bike: Bike) => {
        const vinString = typeof bike.vin === "object" ? bike.vin.value : bike.vin;
        if (typeof window !== "undefined") {
            localStorage.setItem("bikeVIN", vinString);
        }
        router.push("/bikes/edit");
    };

    return (
      <div className="container mx-auto p-8">
          <h1 className="text-4xl font-bold mb-6">Liste des Motos</h1>
          {loading ? (
            <div className="flex justify-center items-center h-32">
                <Skeleton className="h-10 w-10" />
            </div>
          ) : bikes.length === 0 ? (
            <p className="text-lg">Aucune moto trouvée.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bikes.map((bike) => {
                    const vinString = typeof bike.vin === "object" ? bike.vin.value : bike.vin;
                    return (
                      <Card key={vinString} className="shadow-md hover:shadow-xl transition-shadow duration-300">
                          <CardHeader className="bg-gray-50 p-4">
                              <CardTitle className="text-2xl font-bold text-gray-800">
                                  {bike.brand} {bike.model}
                              </CardTitle>
                          </CardHeader>
                          <CardContent className="p-4 space-y-2">
                              <p className="text-sm text-gray-600">
                                  <strong>VIN:</strong> {vinString}
                              </p>
                              <p className="text-sm text-gray-600">
                                  <strong>Kilométrage:</strong> {bike.mileage} km
                              </p>
                              <p className="text-sm text-gray-600">
                                  <strong>Immatriculation:</strong> {bike.registrationNumber}
                              </p>
                              <p className="text-sm text-gray-600">
                                  <strong>Date d&apos;achat:</strong>{" "}
                                  {new Date(bike.purchaseDate).toLocaleDateString("fr-FR", {
                                      year: "numeric",
                                      month: "long",
                                      day: "numeric",
                                  })}
                              </p>
                              <Button className="mt-4" onClick={() => handleEdit(bike)}>
                                  Modifier
                              </Button>
                          </CardContent>
                      </Card>
                    );
                })}
            </div>
          )}
      </div>
    );
}
