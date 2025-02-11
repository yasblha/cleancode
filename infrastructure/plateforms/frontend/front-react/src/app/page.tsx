"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Clock } from "lucide-react"; // Icônes pour les entretiens en cours

interface Maintenance {
  id: number;
  bikeId: number;
  description: string;
  isResolved: boolean;
  date: string;
}

export default function HomePage() {
  const [maintenances, setMaintenances] = useState<Maintenance[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchMaintenances() {
      try {
        const res = await fetch("http://localhost:3001/maintenance");
        if (!res.ok) throw new Error("Erreur lors de la récupération des entretiens.");
        const data: Maintenance[] = await res.json();
        setMaintenances(data.filter((m) => !m.isResolved));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchMaintenances();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Bienvenue sur la plateforme de gestion de flotte</h1>
      <p className="mb-6">Utilisez le menu pour accéder aux différentes fonctionnalités de gestion.</p>

      {/* Section entretiens en cours */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Wrench className="text-gray-700" /> Entretiens en cours
        </h2>

        {loading ? (
          <p className="text-gray-500 mt-4">Chargement des données...</p>
        ) : maintenances.length === 0 ? (
          <p className="text-gray-500 mt-4">Aucun entretien en cours.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {maintenances.map((maintenance) => (
              <Card key={maintenance.id} className="border border-gray-300 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Clock className="text-blue-600" /> Moto #{maintenance.bikeId}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{maintenance.description}</p>
                  <p className="text-xs text-gray-500 mt-2">
                    Prévu le: {new Date(maintenance.date).toLocaleDateString()}
                  </p>
                  <Button className="mt-3 w-full" variant="outline">
                    Voir détails
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Illustration SVG */}
      <div className="flex justify-center mt-8">
        <img
          src="../../public/mechanic-illustration.svg"
          alt="Illustration de maintenance"
          className="w-80 md:w-96"
        />
      </div>
    </div>
  );
}
