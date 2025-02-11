"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function NewPartPage() {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [reference, setReference] = useState<string>("");
  const [stockQuantity, setStockQuantity] = useState<number>(0);
  const [minStockLevel, setMinStockLevel] = useState<number>(5); // Valeur par défaut
  const [price, setPrice] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Vérification des valeurs numériques
    const parsedStockQuantity = Number(stockQuantity);
    const parsedMinStockLevel = Number(minStockLevel);
    const parsedPrice = Number(price);

    if (isNaN(parsedStockQuantity) || isNaN(parsedMinStockLevel) || isNaN(parsedPrice)) {
      setError("Les valeurs numériques doivent être valides.");
      setLoading(false);
      return;
    }

    const newPart = {
      name,
      description,
      reference,
      stockQuantity: parsedStockQuantity,
      minStockLevel: parsedMinStockLevel,
      price: parsedPrice
    };

    try {
      const res = await fetch("http://localhost:3001/parts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPart),
      });

      if (!res.ok) {
        throw new Error("Erreur lors de la création de la pièce");
      }

      router.push("/parts");
    } catch (err) {
      console.error("Erreur lors du POST :", err);
      setError(err instanceof Error ? err.message : "Erreur inattendue");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Ajouter une pièce détachée</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Nom</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <Input
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="reference">Référence</Label>
          <Input
            id="reference"
            value={reference}
            onChange={(e) => setReference(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="stockQuantity">Quantité en stock</Label>
          <Input
            id="stockQuantity"
            type="number"
            value={stockQuantity}
            onChange={(e) => setStockQuantity(Number(e.target.value))}
            required
            min="0"
          />
        </div>
        <div>
          <Label htmlFor="minStockLevel">Seuil de stock minimum</Label>
          <Input
            id="minStockLevel"
            type="number"
            value={minStockLevel}
            onChange={(e) => setMinStockLevel(Number(e.target.value))}
            required
            min="0"
          />
        </div>
        <div>
          <Label htmlFor="price">Prix</Label>
          <Input
            id="price"
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            required
            min="0"
            step="0.01"
          />
        </div>
        <Button type="submit" disabled={loading}>
          {loading ? "Enregistrement..." : "Ajouter"}
        </Button>
      </form>
    </div>
  );
}
