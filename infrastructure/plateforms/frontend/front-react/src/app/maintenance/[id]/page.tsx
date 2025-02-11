"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { CheckCircle } from "lucide-react";

// Étapes de suivi de l'entretien
const STATUS_STEPS = [
  "Créé",
  "En attente de validation client",
  "En attente de pièces",
  "Traitement en cours",
  "Traitée"
];

interface MaintenanceData {
  id: number;
  bikeId: number;
  date: string;
  description: string;
  type: string; // Utilisé pour stocker le statut
  price: number;
  partsUsed: number[];
  technicianId: number;
}

export default function MaintenanceDetailPage() {
  const router = useRouter();
  const [maintenanceId, setMaintenanceId] = useState<string | null>(null);
  const [maintenance, setMaintenance] = useState<MaintenanceData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState<boolean>(false);

  // Récupération de l'ID de maintenance depuis localStorage
  useEffect(() => {
    const storedId = typeof window !== "undefined" ? localStorage.getItem("maintenanceId") : null;
    if (storedId) {
      setMaintenanceId(storedId);
    }
  }, []);

  useEffect(() => {
    if (!maintenanceId) return;

    async function fetchMaintenance() {
      try {
        const res = await fetch(`http://localhost:3001/maintenance/${maintenanceId}`);
        if (!res.ok) throw new Error("Erreur lors de la récupération de l'entretien.");
        const data: MaintenanceData = await res.json();
        setMaintenance(data);
      } catch (err) {
        console.error(err);
        setError(err instanceof Error ? err.message : "Erreur inattendue.");
      } finally {
        setLoading(false);
      }
    }

    fetchMaintenance();
  }, [maintenanceId]);

  const handleUpdate = async () => {
    if (!maintenance || !maintenanceId) return;
    setSaving(true);
    try {
      const res = await fetch(`http://localhost:3001/maintenance/${maintenanceId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(maintenance)
      });
      if (!res.ok) throw new Error("Erreur lors de la mise à jour.");
      router.push("/maintenance"); // Redirection après succès
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : "Erreur inattendue.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <SkeletonDetail />;
  if (error) return <AlertError message={error} />;

  // Trouver l'index du type actuel dans le tableau des étapes
  const currentStatusIndex = STATUS_STEPS.indexOf(maintenance?.type || "Créé");

  return (
    <div className="container mx-auto p-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Détails de la maintenance</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Suivi des étapes */}
          <div className="flex justify-between items-center mb-6">
            {STATUS_STEPS.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full text-white font-bold ${
                    currentStatusIndex >= index ? "bg-green-500" : "bg-gray-300"
                  }`}
                >
                  {currentStatusIndex > index ? <CheckCircle size={16} /> : index + 1}
                </div>
                <p className="text-xs mt-2 text-center">{step}</p>
              </div>
            ))}
          </div>

          {/* Formulaire de modification */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Moto ID</label>
              <Input type="text" value={maintenance?.bikeId || ""} readOnly />
            </div>
            <div>
              <label className="block text-sm font-medium">Date</label>
              <Input
                type="date"
                value={maintenance?.date ? new Date(maintenance.date).toISOString().split("T")[0] : ""}
                onChange={(e) => setMaintenance((prev) => prev && { ...prev, date: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Description</label>
              <Input
                type="text"
                value={maintenance?.description || ""}
                onChange={(e) => setMaintenance((prev) => prev && { ...prev, description: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Statut</label>
              <select
                className="border p-2 rounded-md w-full"
                value={maintenance?.type || "Créé"}
                onChange={(e) => setMaintenance((prev) => prev && { ...prev, type: e.target.value })}
              >
                {STATUS_STEPS.map((step) => (
                  <option key={step} value={step}>
                    {step}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Prix</label>
              <Input
                type="number"
                value={maintenance?.price || ""}
                onChange={(e) => setMaintenance((prev) => prev && { ...prev, price: Number(e.target.value) })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Technicien ID</label>
              <Input type="text" value={maintenance?.technicianId || ""} readOnly />
            </div>
          </form>

          {/* Bouton de mise à jour */}
          <div className="mt-6 flex justify-end">
            <Button onClick={handleUpdate} disabled={saving}>
              {saving ? "Mise à jour..." : "Enregistrer les modifications"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// 🔹 Composant pour afficher un Skeleton Loader en cas de chargement
function SkeletonDetail() {
  return (
    <div className="container mx-auto p-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            <Skeleton className="h-6 w-48" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Skeleton className="h-4 w-full mb-4" />
          <Skeleton className="h-4 w-full mb-4" />
          <Skeleton className="h-4 w-full mb-4" />
        </CardContent>
      </Card>
    </div>
  );
}

// 🔹 Composant pour afficher une erreur
function AlertError({ message }: { message: string }) {
  return (
    <div className="container mx-auto p-8">
      <Alert variant="destructive">
        <AlertTitle>Erreur</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
      </Alert>
    </div>
  );
}
