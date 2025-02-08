"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Bike } from "@/types";

interface BikeCardProps {
    bike: Bike;
}

export default function BikeCard({ bike }: BikeCardProps) {
    return (
        <Card className="shadow hover:shadow-lg transition-shadow">
            <CardHeader>
                <CardTitle className="text-xl font-semibold">
                    {bike.brand} {bike.model}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm"><strong>VIN:</strong> {bike.vin}</p>
                <p className="text-sm"><strong>Kilométrage:</strong> {bike.mileage} km</p>
                <p className="text-sm"><strong>Immatriculation:</strong> {bike.registrationNumber}</p>
                <p className="text-sm">
                    <strong>Date d&apos;achat:</strong> {new Date(bike.purchaseDate).toLocaleDateString()}
                </p>
            </CardContent>
        </Card>
    );
}