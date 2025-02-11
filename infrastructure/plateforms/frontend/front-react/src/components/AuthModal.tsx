"use client";

import { useState, FormEvent, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

// API Base URL
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001";

// Carte d'inscription
function SignUpCard() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`${API_BASE_URL}/users/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (!res.ok) {
        throw new Error("Erreur lors de l'inscription");
      }

      router.push("/dashboard"); // Redirection après succès
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inattendue");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Inscription</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSignUp}>
          <div>
            <label htmlFor="signup-name" className="block text-sm font-medium text-gray-700">
              Nom
            </label>
            <Input id="signup-name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <Input id="signup-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700">
              Mot de passe
            </label>
            <Input id="signup-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <Button type="submit" className="mt-2" disabled={loading}>
            {loading ? "Inscription..." : "S'inscrire"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

// Carte de connexion
function SignInCard() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleSignIn = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`${API_BASE_URL}/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        throw new Error("Email ou mot de passe incorrect");
      }

      const { token } = await res.json();
      localStorage.setItem("token", token);
      setToken(token);

      router.push("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inattendue");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Connexion</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {token ? (
          <div className="flex flex-col items-center">
            <p className="mb-4">Vous êtes déjà connecté.</p>
            <Button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white">
              Déconnexion
            </Button>
          </div>
        ) : (
          <>
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleSignIn}>
              <div>
                <label htmlFor="signin-email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input id="signin-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div>
                <label htmlFor="signin-password" className="block text-sm font-medium text-gray-700">
                  Mot de passe
                </label>
                <Input id="signin-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <Button type="submit" className="mt-2" disabled={loading}>
                {loading ? "Connexion..." : "Se connecter"}
              </Button>
            </form>
          </>
        )}
      </CardContent>
    </Card>
  );
}

export default function AuthModalContent() {
  return (
    <DialogContent className="max-w-4xl p-6">
      <DialogHeader>
        <DialogTitle>Authentification</DialogTitle>
        <DialogDescription>
          Inscrivez-vous ou connectez-vous
        </DialogDescription>
      </DialogHeader>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <SignUpCard />
        <SignInCard />
      </div>
      <DialogClose asChild>
        <Button variant="outline" className="mt-4">
          Fermer
        </Button>
      </DialogClose>
    </DialogContent>
  );
}
