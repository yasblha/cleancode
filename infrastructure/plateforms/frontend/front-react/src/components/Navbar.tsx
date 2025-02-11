"use client";

import { useState } from "react";
import Link from "next/link";
import AuthModalContent from "@/components/AuthModal"; // Import de la modale
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Dialog } from "@/components/ui/dialog";

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    // Fonction pour basculer l'ouverture des sous-menus
    const toggleMenu = (menuName: string) => {
        setOpenMenu((prev) => (prev === menuName ? null : menuName));
    };

    return (
      <>
          <header className="sticky top-0 z-50 bg-background shadow">
              <nav className="flex items-center justify-between p-4">
                  <NavigationMenu>
                      <NavigationMenuList className="flex space-x-4">
                          {/* Accueil */}
                          <NavigationMenuItem>
                              <Link href="/" legacyBehavior passHref>
                                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                      Accueil
                                  </NavigationMenuLink>
                              </Link>
                          </NavigationMenuItem>

                          {/* Motos */}
                          <NavigationMenuItem>
                              <NavigationMenuTrigger
                                className={navigationMenuTriggerStyle()}
                                onClick={() => toggleMenu("motos")}
                              >
                                  Motos
                              </NavigationMenuTrigger>
                              {openMenu === "motos" && (
                                <div className="absolute bg-white shadow-md rounded-md mt-2 p-4">
                                    <ul className="space-y-2">
                                        <li>
                                            <Link href="/bikes">
                          <span className="cursor-pointer block px-4 py-2 hover:bg-gray-100 rounded-md">
                            Liste des motos
                          </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/bikes/new">
                          <span className="cursor-pointer block px-4 py-2 hover:bg-gray-100 rounded-md">
                            Ajouter une moto
                          </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                              )}
                          </NavigationMenuItem>

                          {/* Entretiens */}
                          <NavigationMenuItem>
                              <NavigationMenuTrigger
                                className={navigationMenuTriggerStyle()}
                                onClick={() => toggleMenu("entretiens")}
                              >
                                  Entretiens
                              </NavigationMenuTrigger>
                              {openMenu === "entretiens" && (
                                <div className="absolute bg-white shadow-md rounded-md mt-2 p-4">
                                    <ul className="space-y-2">
                                        <li>
                                            <Link href="/maintenance">
                          <span className="cursor-pointer block px-4 py-2 hover:bg-gray-100 rounded-md">
                            Liste des entretiens
                          </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/maintenance/new">
                          <span className="cursor-pointer block px-4 py-2 hover:bg-gray-100 rounded-md">
                            Ajouter un entretien
                          </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                              )}
                          </NavigationMenuItem>

                          {/* Pièces détachées */}
                          <NavigationMenuItem>
                              <NavigationMenuTrigger
                                className={navigationMenuTriggerStyle()}
                                onClick={() => toggleMenu("pieces")}
                              >
                                  Pièces détachées
                              </NavigationMenuTrigger>
                              {openMenu === "pieces" && (
                                <div className="absolute bg-white shadow-md rounded-md mt-2 p-4">
                                    <ul className="space-y-2">
                                        <li>
                                            <Link href="/parts">
                          <span className="cursor-pointer block px-4 py-2 hover:bg-gray-100 rounded-md">
                            Liste des pièces
                          </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/parts/new">
                          <span className="cursor-pointer block px-4 py-2 hover:bg-gray-100 rounded-md">
                            Ajouter une pièce
                          </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                              )}
                          </NavigationMenuItem>

                          {/* Essais */}
                          <NavigationMenuItem>
                              <NavigationMenuTrigger
                                className={navigationMenuTriggerStyle()}
                                onClick={() => toggleMenu("essais")}
                              >
                                  Essais
                              </NavigationMenuTrigger>
                              {openMenu === "essais" && (
                                <div className="absolute bg-white shadow-md rounded-md mt-2 p-4">
                                    <ul className="space-y-2">
                                        <li>
                                            <Link href="/trials">
                          <span className="cursor-pointer block px-4 py-2 hover:bg-gray-100 rounded-md">
                            Liste des essais
                          </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/trials/new">
                          <span className="cursor-pointer block px-4 py-2 hover:bg-gray-100 rounded-md">
                            Ajouter un essai
                          </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                              )}
                          </NavigationMenuItem>

                          {/* Conducteurs */}
                          <NavigationMenuItem>
                              <Link href="/users" legacyBehavior passHref>
                                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                      Conducteurs
                                  </NavigationMenuLink>
                              </Link>
                          </NavigationMenuItem>

                          {/* Compte */}
                          <NavigationMenuItem>
                              <NavigationMenuTrigger
                                className={navigationMenuTriggerStyle()}
                                onClick={() => toggleMenu("compte")}
                              >
                                  <span role="img" aria-label="compte">👤</span> Compte
                              </NavigationMenuTrigger>
                              {openMenu === "compte" && (
                                <div className="absolute bg-white shadow-md rounded-md mt-2 p-4">
                                    <ul className="space-y-2">
                                        <li>
                                            <button
                                              onClick={() => {
                                                  setIsAuthModalOpen(true);
                                                  setOpenMenu(null); // Ferme le menu après ouverture de la modale
                                              }}
                                              className="text-left w-full px-4 py-2 hover:bg-gray-100 rounded-md"
                                            >
                                                Inscription
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                              onClick={() => {
                                                  setIsAuthModalOpen(true);
                                                  setOpenMenu(null); // Ferme le menu après ouverture de la modale
                                              }}
                                              className="text-left w-full px-4 py-2 hover:bg-gray-100 rounded-md"
                                            >
                                                Connexion
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                              )}
                          </NavigationMenuItem>
                      </NavigationMenuList>
                  </NavigationMenu>
              </nav>
          </header>

          {/* Modale d'authentification */}
          <Dialog open={isAuthModalOpen} onOpenChange={setIsAuthModalOpen}>
              <AuthModalContent />
          </Dialog>
      </>
    );
}
