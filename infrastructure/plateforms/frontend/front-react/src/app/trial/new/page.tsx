"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function NewTrialPage() {
  const router = useRouter();
  const [bikeId, setBikeId] = useState<string>("");
  const [driverId, setDriverId] = useState<string>("");
  const [trialDate, setTrialDate] = useState<string>("");
  const [duration, setDuration] = useState<number>(0);
  const [notes, setNotes] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const newTrial = {
      bikeId: Number(bikeId),
      driverId: Number(driverId),
      trialDate,
      duration,
      notes,
    };
    try {
      const res = await fetch("/trials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTrial),
      });
      if (!res.ok) {
        throw new Error("Erreur lors de la création de l'essai.");
      }
      router.push("/trials");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inattendue");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Ajouter un essai</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="bikeId">Bike ID</Label>
          <Input id="bikeId" type="number" value={bikeId} onChange={(e) => setBikeId(e.target.value)} required />
        </div>
        <div>
          <Label htmlFor="driverId">Driver ID</Label>
          <Input id="driverId" type="number" value={driverId} onChange={(e) => setDriverId(e.target.value)} required />
        </div>
        <div>
          <Label htmlFor="trialDate">Date de l&apos;essai</Label>
          <Input id="trialDate" type="date" value={trialDate} onChange={(e) => setTrialDate(e.target.value)} required />
        </div>
        <div>
          <Label htmlFor="duration">Durée (minutes)</Label>
          <Input id="duration" type="number" value={duration} onChange={(e) => setDuration(Number(e.target.value))} required />
        </div>
        <div>
          <Label htmlFor="notes">Notes</Label>
          <Input id="notes" type="text" value={notes} onChange={(e) => setNotes(e.target.value)} />
        </div>
        <Button type="submit" disabled={loading}>
          {loading ? "Enregistrement..." : "Ajouter"}
        </Button>
      </form>
    </div>
  );
}
