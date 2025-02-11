"use client";

import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";

interface User {
  id: number;
  name: string;
  roles: string;
}

export interface BikeOwnerSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export default function BikeOwnerSelect({ value, onChange }: BikeOwnerSelectProps) {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch("http://localhost:3001/users");
        if (!res.ok) {
          throw new Error("Erreur lors de la récupération des utilisateurs.");
        }
        const data: User[] = await res.json();
        const filteredUsers = data.filter((user) => user.roles === "user");
        setUsers(filteredUsers);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erreur inattendue.");
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div>
      <Label htmlFor="ownerId">Propriétaire</Label>
      {loading ? (
        <p>Chargement des utilisateurs...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <select
          id="ownerId"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="border rounded px-2 py-1 w-full"
          required
        >
          <option value="">Sélectionnez un propriétaire</option>
          {users.map((user) => (
            <option key={user.id} value={user.id.toString()}>
              {user.name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
