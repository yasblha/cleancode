"use client";

import { useEffect, useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Étapes possibles pour le statut de l'entretien
const STATUS_OPTIONS = [
  "Créé",
  "En attente de validation client",
  "En attente de pièces",
  "Traitement en cours",
  "Traitée"
];

interface MaintenanceData {
  bikeId: number;
  date: string;
  description: string;
  type: string; // ✅ Statut de l'entretien
  price: number;
  partsUsed: number[];
  technicianId: number;
}

interface Bike {
  id: number;
  vin: { value: string };
  brand: string;
  model: string;
}

interface User {
  id: number;
  name: string;
  roles: string;
}

interface Part {
  id: number;
  name: string;
}

export default function NewMaintenancePage() {
  const router = useRouter();
  const [bikes, setBikes] = useState<Bike[]>([]);
  const [technicians, setTechnicians] = useState<User[]>([]);
  const [parts, setParts] = useState<Part[]>([]);
  const [bikeId, setBikeId] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [type, setType] = useState<string>("Créé"); // ✅ Statut par défaut
  const [price, setCost] = useState<number>(0);
  const [technicianId, setTechnicianId] = useState<string>("");
  const [selectedParts, setSelectedParts] = useState<number[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [bikesRes, usersRes, partsRes] = await Promise.all([
          fetch("http://localhost:3001/bikes"),
          fetch("http://localhost:3001/users"),
          fetch("http://localhost:3001/parts"),
        ]);

        if (!bikesRes.ok || !usersRes.ok || !partsRes.ok) {
          throw new Error("Erreur lors de la récupération des données.");
        }

        const bikesData: Bike[] = await bikesRes.json();
        const usersData: User[] = await usersRes.json();
        const partsData: Part[] = await partsRes.json();

        // Filtrer uniquement les utilisateurs ayant le rôle "technician"
        const filteredTechnicians = usersData.filter(user => user.roles === "technician");

        setBikes(bikesData);
        setTechnicians(filteredTechnicians);
        setParts(partsData);
      } catch (err) {
        console.error("Erreur :", err);
        setError(err instanceof Error ? err.message : "Erreur inattendue.");
      }
    }
    fetchData();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!bikeId || !technicianId) {
      setError("Veuillez sélectionner une moto et un technicien.");
      setLoading(false);
      return;
    }

    const newMaintenance: MaintenanceData = {
      bikeId: Number(bikeId),
      date,
      description,
      type, // ✅ Enregistrement du statut
      price,
      partsUsed: selectedParts,
      technicianId: Number(technicianId),
    };

    try {
      const res = await fetch("http://localhost:3001/maintenance/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newMaintenance),
      });

      if (!res.ok) {
        throw new Error("Erreur lors de la création de l'entretien.");
      }

      router.push("/maintenance");
    } catch (err) {
      console.error("Erreur lors du POST :", err);
      setError(err instanceof Error ? err.message : "Erreur inattendue.");
    } finally {
      setLoading(false);
    }
  };

  const handlePartSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(e.target.selectedOptions, option => Number(option.value));
    setSelectedParts(selectedOptions);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Ajouter un entretien</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="bikeId">Moto (VIN)</Label>
          <select
            id="bikeId"
            value={bikeId}
            onChange={(e) => setBikeId(e.target.value)}
            className="border rounded px-2 py-1 w-full"
            required
          >
            <option value="">Sélectionnez une moto</option>
            {bikes.map((bike) => (
              <option key={bike.id} value={bike.id}>
                {bike.brand} {bike.model} - {bike.vin.value}
              </option>
            ))}
          </select>
        </div>

        <div>
          <Label htmlFor="date">Date</Label>
          <Input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>

        <div>
          <Label htmlFor="description">Description</Label>
          <Input id="description" type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>

        {/* Sélection du statut */}
        <div>
          <Label htmlFor="type">Statut</Label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="border rounded px-2 py-1 w-full"
            required
          >
            {STATUS_OPTIONS.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>

        <div>
          <Label htmlFor="cost">Prix</Label>
          <Input id="cost" type="number" value={price} onChange={(e) => setCost(Number(e.target.value))} required />
        </div>

        <div>
          <Label htmlFor="technicianId">Technicien</Label>
          <select
            id="technicianId"
            value={technicianId}
            onChange={(e) => setTechnicianId(e.target.value)}
            className="border rounded px-2 py-1 w-full"
            required
          >
            <option value="">Sélectionnez un technicien</option>
            {technicians.map((tech) => (
              <option key={tech.id} value={tech.id}>
                {tech.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <Label htmlFor="parts">Pièces utilisées</Label>
          <select
            id="parts"
            multiple
            value={selectedParts.map(String)}
            onChange={handlePartSelection}
            className="border rounded px-2 py-1 w-full"
          >
            {parts.map((part) => (
              <option key={part.id} value={part.id}>
                {part.name}
              </option>
            ))}
          </select>
        </div>

        <Button type="submit" disabled={loading}>
          {loading ? "Création en cours..." : "Créer l'entretien"}
        </Button>
      </form>
    </div>
  );
}
