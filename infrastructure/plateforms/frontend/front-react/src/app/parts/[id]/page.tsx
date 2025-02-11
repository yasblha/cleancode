"use client";

import { useEffect, useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

interface Part {
  id: number;
  name: string;
  reference: string;
  stockQuantity: number;
  minStockLevel: number;
}

export default function EditPartPage() {
  const router = useRouter();
  const [part, setPart] = useState<Part | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState<boolean>(false);

  useEffect(() => {
    const storedPartId = typeof window !== "undefined" ? localStorage.getItem("partId") : null;

    if (!storedPartId) {
      setError("Aucune pièce sélectionnée.");
      setLoading(false);
      return;
    }

    async function fetchPart() {
      try {
        const res = await fetch(`http://localhost:3001/parts/${storedPartId}`);
        if (!res.ok) throw new Error("Erreur lors de la récupération de la pièce.");
        const data: Part = await res.json();
        setPart(data);
      } catch (err) {
        console.error("Erreur :", err);
        setError(err instanceof Error ? err.message : "Erreur inattendue.");
      } finally {
        setLoading(false);
      }
    }
    fetchPart();
  }, []);

  const handleUpdate = async (e: FormEvent) => {
    e.preventDefault();
    if (!part) return;
    setSaving(true);
    setError(null);

    try {
      const res = await fetch(`http://localhost:3001/parts/${part.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(part),
      });

      if (!res.ok) throw new Error("Erreur lors de la mise à jour.");
      router.push("/parts");
    } catch (err) {
      console.error("Erreur :", err);
      setError(err instanceof Error ? err.message : "Erreur inattendue.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Modifier la pièce</CardTitle>
        </CardHeader>
        <CardContent>
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertTitle>Erreur</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {loading ? (
            <p>Chargement...</p>
          ) : (
            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <Label htmlFor="name">Nom</Label>
                <Input
                  id="name"
                  type="text"
                  value={part?.name || ""}
                  onChange={(e) => setPart((prev) => prev && { ...prev, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="reference">Référence</Label>
                <Input id="reference" type="text" value={part?.reference || ""} readOnly />
              </div>

              <div>
                <Label htmlFor="stockQuantity">Stock</Label>
                <Input
                  id="stockQuantity"
                  type="number"
                  value={part?.stockQuantity || ""}
                  onChange={(e) => setPart((prev) => prev && { ...prev, stockQuantity: Number(e.target.value) })}
                  required
                />
              </div>

              <Button type="submit" disabled={saving}>
                {saving ? "Mise à jour en cours..." : "Enregistrer"}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
