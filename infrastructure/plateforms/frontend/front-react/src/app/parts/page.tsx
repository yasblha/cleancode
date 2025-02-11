"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface Part {
  id: number;
  name: string;
  reference: string;
  stockQuantity: number;
  minStockLevel: number;
}

export default function PartsPage() {
  const router = useRouter();
  const [parts, setParts] = useState<Part[]>([]);
  const [lowStockParts, setLowStockParts] = useState<Part[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchParts() {
      try {
        const res = await fetch("http://localhost:3001/parts");
        if (!res.ok) throw new Error("Erreur lors de la récupération des pièces.");
        const data: Part[] = await res.json();
        setParts(data);

        // Vérifier les stocks bas
        const lowStock = data.filter((part) => part.stockQuantity <= part.minStockLevel);
        setLowStockParts(lowStock);
      } catch (err) {
        console.error("Erreur :", err);
      } finally {
        setLoading(false);
      }
    }
    fetchParts();
  }, []);

  const handleEdit = (partId: number) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("partId", partId.toString());
    }
    router.push("/parts/edit");
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Gestion des pièces</h1>

      {/* 🔥 Alerte pour les stocks bas */}
      {lowStockParts.length > 0 && (
        <Alert variant="destructive" className="mb-4">
          <AlertTitle>⚠️ Alerte Stock Critique</AlertTitle>
          <AlertDescription>
            Certaines pièces ont atteint leur stock minimum :
            <ul className="list-disc list-inside mt-2">
              {lowStockParts.map((part) => (
                <li key={part.id}>{part.name} (Réf: {part.reference})</li>
              ))}
            </ul>
          </AlertDescription>
        </Alert>
      )}

      {/* Liste des pièces sous forme de cartes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading
          ? Array(6)
            .fill(null)
            .map((_, index) => <SkeletonCard key={index} />)
          : parts.map((part) => (
            <Card key={part.id} className={part.stockQuantity <= part.minStockLevel ? "border-red-500" : ""}>
              <CardHeader>
                <CardTitle>{part.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p><strong>Référence:</strong> {part.reference}</p>
                <p><strong>Stock:</strong> {part.stockQuantity}</p>
                <p><strong>Seuil Minimum:</strong> {part.minStockLevel}</p>
                <Button
                  className="mt-4"
                  onClick={() => handleEdit(part.id)}
                >
                  Modifier
                </Button>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  );
}

// Skeleton loader pour les cartes
function SkeletonCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Skeleton className="h-6 w-32" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Skeleton className="h-4 w-40 mb-2" />
        <Skeleton className="h-4 w-40 mb-2" />
        <Skeleton className="h-4 w-40 mb-2" />
        <Skeleton className="h-8 w-full mt-4" />
      </CardContent>
    </Card>
  );
}
