"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

// Étapes de suivi de l'entretien basées sur `type`
const STATUS_STEPS: Record<string, string> = {
  "Créé": "bg-gray-400",
  "En attente de validation client": "bg-yellow-400",
  "En attente de pièces": "bg-orange-400",
  "Traitement en cours": "bg-blue-400",
  "Traitée": "bg-green-500",
};

interface MaintenanceData {
  id: number;
  bikeId: number;
  date: string;
  description: string;
  type: string;
  price: number;
  partsUsed: number[];
  technicianId: number;
  createdAt: string;
  updatedAt: string | null;
}

export default function MaintenancesPage() {
  const router = useRouter();
  const [maintenances, setMaintenances] = useState<MaintenanceData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchMaintenances() {
      try {
        const res = await fetch("http://localhost:3001/maintenance");
        if (!res.ok) {
          throw new Error("Erreur lors de la récupération des maintenances.");
        }
        const data: MaintenanceData[] = await res.json();
        setMaintenances(data);
      } catch (err) {
        console.error("Erreur :", err);
        setError(err instanceof Error ? err.message : "Erreur inattendue.");
      } finally {
        setLoading(false);
      }
    }

    fetchMaintenances();
  }, []);

  const handleViewDetails = (maintenanceId: number) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("maintenanceId", maintenanceId.toString());
    }
    router.push(`/maintenance/${maintenanceId}`);
  };

  return (
    <div className="container mx-auto p-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Liste des maintenances</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={() => router.push("/maintenance/new")} className="mb-4">
            Ajouter une maintenance
          </Button>

          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertTitle>Erreur</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="overflow-auto">
            {loading ? (
              <SkeletonTable />
            ) : maintenances.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Moto</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead>Prix</TableHead>
                    <TableHead>Technicien</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {maintenances.map((maintenance) => (
                    <TableRow key={maintenance.id}>
                      <TableCell>{maintenance.id}</TableCell>
                      <TableCell>{maintenance.bikeId}</TableCell>
                      <TableCell>{new Date(maintenance.date).toLocaleDateString()}</TableCell>
                      <TableCell>{maintenance.description}</TableCell>
                      <TableCell>
                        <span className={`px-3 py-1 rounded-md text-white ${STATUS_STEPS[maintenance.type] || "bg-gray-300"}`}>
                          {maintenance.type}
                        </span>
                      </TableCell>
                      <TableCell>{maintenance.price} €</TableCell>
                      <TableCell>{maintenance.technicianId}</TableCell>
                      <TableCell>
                        <Button onClick={() => handleViewDetails(maintenance.id)} size="sm" variant="outline">
                          Voir
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <p className="text-center text-gray-500">Aucune maintenance enregistrée.</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// 🔹 Composant pour afficher un Skeleton Loader en cas de chargement
function SkeletonTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {Array(8).fill(null).map((_, index) => (
            <TableHead key={index}>
              <Skeleton className="h-4 w-full" />
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array(5).fill(null).map((_, rowIndex) => (
          <TableRow key={rowIndex}>
            {Array(8).fill(null).map((_, colIndex) => (
              <TableCell key={colIndex}>
                <Skeleton className="h-4 w-full" />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
