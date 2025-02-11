"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

interface Trial {
  id: number;
  bikeId: number;
  driverId: number;
  trialDate: string; // ISO string
  duration: number; // Durée en minutes
  notes?: string;
}

export default function TrialsListPage() {
  const router = useRouter();
  const [trials, setTrials] = useState<Trial[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTrials() {
      try {
        const res = await fetch("/trials");
        if (!res.ok) {
          throw new Error("Erreur lors de la récupération des essais.");
        }
        const data: Trial[] = await res.json();
        setTrials(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erreur inattendue.");
      } finally {
        setLoading(false);
      }
    }
    fetchTrials();
  }, []);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Liste des essais</h1>
      <Button onClick={() => router.push("/trials/new")}>Ajouter un essai</Button>
      <ul className="mt-4 space-y-4">
        {trials.map((trial) => (
          <li key={trial.id} className="border p-4 rounded">
            <p>
              <strong>Bike ID:</strong> {trial.bikeId}
            </p>
            <p>
              <strong>Driver ID:</strong> {trial.driverId}
            </p>
            <p>
              <strong>Date:</strong> {new Date(trial.trialDate).toLocaleDateString("fr-FR")}
            </p>
            <p>
              <strong>Durée:</strong> {trial.duration} minutes
            </p>
            {trial.notes && (
              <p>
                <strong>Notes:</strong> {trial.notes}
              </p>
            )}
          </li>
        ))}
        {trials.length === 0 && <p>Aucun essai disponible.</p>}
      </ul>
    </div>
  );
}
