"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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

// Interface pour un utilisateur
interface User {
  id: number;
  name: string;
  roles: string;
}

// Schéma de validation avec Zod
const bikeFormSchema = z.object({
  vin: z.string().min(1, { message: "Le VIN est requis." }),
  brand: z.string().min(1, { message: "La marque est requise." }),
  model: z.string().min(1, { message: "Le mod&egrave;le est requis." }),
  mileage: z
    .preprocess((val) => Number(val), z.number().min(0, { message: "Le kilom&eacute;trage doit &ecirc;tre un nombre positif." })),
  registrationNumber: z.string().min(1, { message: "L&apos;immatriculation est requise." }),
  purchaseDate: z.string().min(1, { message: "La date d&apos;achat est requise." }),
  ownerId: z.string().min(1, { message: "Le propri&eacute;taire est requis." }),
  isInMaintenance: z.boolean(),
  isDecommissioned: z.boolean(),
});

export type BikeFormData = z.infer<typeof bikeFormSchema>;

export interface BikeFormProps {
  onSubmit: (data: BikeFormData) => void;
  defaultValues?: BikeFormData;
}

export default function BikeForm({ onSubmit, defaultValues }: BikeFormProps) {
  const [users, setUsers] = useState<User[]>([]);
  const [usersLoading, setUsersLoading] = useState<boolean>(true);
  const [usersError, setUsersError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch("http://localhost:3001/users");
        if (!res.ok) {
          throw new Error("Erreur lors de la r&eacute;cup&eacute;ration des utilisateurs.");
        }
        const data: User[] = await res.json();
        // Filtrer uniquement les utilisateurs avec le r&ocirc;le "user"
        const filtered = data.filter((user) => user.roles === "user");
        setUsers(filtered);
      } catch (err) {
        setUsersError(err instanceof Error ? err.message : "Erreur inattendue.");
      } finally {
        setUsersLoading(false);
      }
    }
    fetchUsers();
  }, []);

  const form = useForm<BikeFormData>({
    resolver: zodResolver(bikeFormSchema),
    defaultValues: defaultValues || {
      vin: "",
      brand: "",
      model: "",
      mileage: 0,
      registrationNumber: "",
      purchaseDate: new Date().toISOString().split("T")[0],
      ownerId: "",
      isInMaintenance: false,
      isDecommissioned: false,
    },
  });

  const handleSubmit = (values: BikeFormData) => {
    onSubmit(values);
    form.reset();
  };

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
              <FormLabel>Mod&egrave;le</FormLabel>
              <FormControl>
                <Input placeholder="Entrez le mod&egrave;le" {...field} />
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
              <FormLabel>Kilom&eacute;trage</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="0"
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                />
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
              <FormLabel>Propri&eacute;taire</FormLabel>
              <FormControl>
                {usersLoading ? (
                  <p>Chargement des utilisateurs...</p>
                ) : usersError ? (
                  <p className="text-red-500">{usersError}</p>
                ) : (
                  <select
                    {...field}
                    className="border rounded px-2 py-1 w-full"
                    onChange={(e) => field.onChange(e.target.value)}
                  >
                    <option value="">S&eacute;lectionnez un utilisateur</option>
                    {users.map((user) => (
                      <option key={user.id} value={user.id.toString()}>
                        {user.name}
                      </option>
                    ))}
                  </select>
                )}
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="isInMaintenance"
          render={({ field }) => (
            <FormItem>
              <FormLabel>&Eacute;tat de maintenance</FormLabel>
              <FormControl>
                <select
                  {...field}
                  className="border rounded px-2 py-1 w-full"
                  value={field.value ? "true" : "false"}
                  onChange={(e) => field.onChange(e.target.value === "true")}
                >
                  <option value="false">Non</option>
                  <option value="true">Oui</option>
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="isDecommissioned"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Véhicule d&eacute;commissionn&eacute;</FormLabel>
              <FormControl>
                <select
                  {...field}
                  className="border rounded px-2 py-1 w-full"
                  value={field.value ? "true" : "false"}
                  onChange={(e) => field.onChange(e.target.value === "true")}
                >
                  <option value="false">Non</option>
                  <option value="true">Oui</option>
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Valider</Button>
      </form>
    </Form>
  );
}
