"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const bikeFormSchema = z.object({
    vin: z.string().min(1, { message: "Le VIN est requis." }),
    brand: z.string().min(1, { message: "La marque est requise." }),
    model: z.string().min(1, { message: "Le modèle est requis." }),
    mileage: z.number().min(0, { message: "Le kilométrage doit être positif." }),
    registrationNumber: z.string().min(1, { message: "L&apos;immatriculation est requise." }),
    purchaseDate: z.string().min(1, { message: "La date d&apos;achat est requise." }),
    ownerId: z.string().min(1, { message: "L&apos;ID du propriétaire est requis." }),
});

export type BikeFormData = z.infer<typeof bikeFormSchema>;

export interface BikeFormProps {
    onSubmit: (data: BikeFormData) => void;
}

export default function BikeForm({ onSubmit }: BikeFormProps) {
    const form = useForm<BikeFormData>({
        resolver: zodResolver(bikeFormSchema),
        defaultValues: {
            vin: "",
            brand: "",
            model: "",
            mileage: 0,
            registrationNumber: "",
            purchaseDate: new Date().toISOString().split("T")[0],
            ownerId: "",
        },
    });

    function handleSubmit(values: BikeFormData) {
        onSubmit(values);
        form.reset();
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="vin"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>VIN</FormLabel>
                            <FormControl>
                                <Input placeholder="Entrez le VIN" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="brand"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Marque</FormLabel>
                            <FormControl>
                                <Input placeholder="Entrez la marque" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="model"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Modèle</FormLabel>
                            <FormControl>
                                <Input placeholder="Entrez le modèle" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="mileage"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Kilométrage</FormLabel>
                            <FormControl>
                                <Input type="number" placeholder="0" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="registrationNumber"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Immatriculation</FormLabel>
                            <FormControl>
                                <Input placeholder="Entrez l&apos;immatriculation" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="purchaseDate"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Date d&apos;achat</FormLabel>
                            <FormControl>
                                <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="ownerId"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>ID du Propriétaire</FormLabel>
                            <FormControl>
                                <Input placeholder="Entrez l&apos;ID du propriétaire" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Ajouter la moto</Button>
            </form>
        </Form>
    );
}
