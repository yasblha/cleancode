"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Bike } from "@/types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

export default function BikeDetailPage() {
    const params = useParams();
    const vin = params?.vin as string;

    const [bike, setBike] = useState<Bike | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchBike() {
            /*if (!vin) {
                setError("VIN de la moto non fourni.");
                setLoading(false);
                return;
            }*/

            const url = new URL(window.location.href);
            console.log("URL:", url.pathname);

            try {
                const apiUrl = `http://localhost:3001${url.pathname}`;
                console.log("📡 Requête API :", apiUrl);
                const res = await fetch(apiUrl);

                if (!res.ok) {
                    throw new Error(`Impossible de récupérer la moto avec le VIN ${vin}.`);
                }

                const data = await res.json();
                setBike(data);
            } catch (err) {
                setError((err as Error).message || "Erreur inattendue.");
            } finally {
                setLoading(false);
            }
        }

        fetchBike();
    }, [vin]);

    if (loading) {
        return (
            <div className="container mx-auto p-8">
                <Skeleton className="h-10 w-1/3 mb-6" />
                <Skeleton className="h-6 w-full mb-4" />
                <Skeleton className="h-6 w-5/6 mb-4" />
                <Skeleton className="h-6 w-4/6 mb-4" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mx-auto p-8">
                <h1 className="text-2xl font-bold mb-4 text-red-500">Erreur</h1>
                <p>{error}</p>
            </div>
        );
    }

    if (!bike) {
        return (
            <div className="container mx-auto p-8">
                <h1 className="text-2xl font-bold mb-4">Moto introuvable</h1>
                <p>Aucune donnée disponible.</p>
            </div>
        );
    }

    const vinDisplay = typeof bike.vin === "object" && bike.vin !== null ? bike.vin.value : bike.vin;
    const purchaseDate = new Date(bike.purchaseDate).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const bikeUrl = `/bikes/${encodeURIComponent(vinDisplay)}`;
    console.log("🔗 Génération du lien :", bikeUrl);

    return (
        <div className="container mx-auto p-8">
            <Card className="shadow-md">
                <CardHeader>
                    <CardTitle className="text-xl">Détails de la moto (VIN: {vinDisplay})</CardTitle>
                </CardHeader>
                <Separator />
                <CardContent className="space-y-2 pt-4">
                    <p><strong>Marque&nbsp;:</strong> {bike.brand}</p>
                    <p><strong>Modèle&nbsp;:</strong> {bike.model}</p>
                    <p><strong>VIN&nbsp;:</strong> {vinDisplay}</p>
                    <p><strong>Kilométrage&nbsp;:</strong> {bike.mileage} km</p>
                    <p><strong>Immatriculation&nbsp;:</strong> {bike.registrationNumber}</p>
                    <p><strong>Date d&apos;achat&nbsp;:</strong> {purchaseDate}</p>
                    <p><strong>Propriétaire&nbsp;:</strong> {bike.ownerId}</p>
                    <p><strong>Active&nbsp;:</strong> {bike.isActive ? "Oui" : "Non"}</p>
                    <p><strong>En maintenance&nbsp;:</strong> {bike.isInMaintenance ? "Oui" : "Non"}</p>
                    <p><strong>Décommissionnée&nbsp;:</strong> {bike.isDecommissioned ? "Oui" : "Non"}</p>
                    {bike.nextMaintenanceMileage && (
                        <p><strong>Kilométrage de prochaine maintenance&nbsp;:</strong> {bike.nextMaintenanceMileage}</p>
                    )}
                    {bike.nextMaintenanceDate && (
                        <p><strong>Date de prochaine maintenance&nbsp;:</strong> {new Date(bike.nextMaintenanceDate).toLocaleDateString("fr-FR")}</p>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
