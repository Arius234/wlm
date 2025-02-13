"use client";

import { useState, useCallback } from "react";
import SplashScreen from "@/components/SplashScreen";
import { Menu, X, Languages } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SignUpModal from "@/components/SignUpModal";
import LoginModal from "@/components/LoginModal";

export default function Home() {
  // États pour gérer l'affichage des modals et du menu mobile
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  // Utilisation de useCallback pour éviter la recréation des fonctions à chaque rendu
  const handleOpenSignUp = useCallback(() => setIsSignUpOpen(true), []);
  const handleOpenLogin = useCallback(() => setIsLoginOpen(true), []);
  const handleCloseSignUp = useCallback(() => setIsSignUpOpen(false), []);
  const handleCloseLogin = useCallback(() => setIsLoginOpen(false), []);

  return (
    <div>
      {/* Affichage du SplashScreen avant le chargement complet */}
      {!isLoaded && <SplashScreen onAnimationEnd={() => setIsLoaded(true)} />}

      {isLoaded && (
        <>
          {/* Première section avec fond d'écran */}
          <section className="relative w-full h-screen flex flex-col items-center justify-center bg-cover bg-center text-white text-center bg-[url('/back.webp')]">
            {/* Overlay noir pour améliorer la lisibilité du texte */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Header principal */}
            <header className="absolute top-0 left-0 w-full text-white px-6 py-4 flex justify-between items-center z-50">
              {/* Logo et Nom du site */}
              <div className="flex items-center gap-3 relative z-10">
                <Link href="/" aria-label="Retour à l'accueil">
                  <Image
                    src="/logo.png"
                    alt="WhoLikeMe Logo"
                    width={50}
                    height={50}
                    className="cursor-pointer"
                    priority
                  />
                </Link>
                <Link href="/" className="text-2xl md:text-4xl font-extrabold">
                  WhoLikeMe
                </Link>
              </div>

              {/* Navigation desktop */}
              <nav className="hidden lg:flex items-center space-x-6 text-lg font-semibold relative z-10">
                {["Produits", "En Savoir Plus", "Sécurité", "Assistance", "Télécharger"].map((item) => (
                  <Link key={item} href="#" className="hover:underline hover:text-[#f3336d] transition-colors">
                    {item}
                  </Link>
                ))}
              </nav>

              {/* Langue & Connexion */}
              <div className="hidden lg:flex items-center space-x-4 relative z-10">
                <button
                  aria-label="Changer la langue"
                  className="flex items-center gap-2 text-lg font-semibold hover:text-[#f3336d] transition-colors"
                >
                  <Languages size={24} /> Langue
                </button>
                <button
                  onClick={handleOpenLogin}
                  className="px-6 py-2 border border-white bg-white text-black font-semibold rounded-full hover:bg-gray-300 transition-colors"
                  aria-label="Se connecter"
                >
                  Connexion
                </button>
              </div>

              {/* Bouton du menu mobile */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden relative z-50"
                aria-label="Ouvrir le menu"
              >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </header>

            {/* Menu mobile */}
            {menuOpen && (
              <div className="fixed inset-0 bg-white text-black flex flex-col items-center justify-center text-lg font-semibold z-50 p-6 w-full h-full shadow-xl">
                {/* Bouton de fermeture du menu */}
                <button
                  onClick={() => setMenuOpen(false)}
                  className="absolute top-6 right-6"
                  aria-label="Fermer le menu"
                >
                  <X size={32} className="hover:text-[#f3336d] transition-colors" />
                </button>

                {/* Liens du menu */}
                <nav className="flex flex-col items-center space-y-6 mt-20 text-xl font-medium">
                  {["Produits", "En Savoir Plus", "Sécurité", "Assistance", "Télécharger"].map((item) => (
                    <Link key={item} href="#" className="hover:text-[#f3336d] hover:scale-105 transition-all">
                      {item}
                    </Link>
                  ))}
                </nav>

                {/* Boutons Langue, Connexion et Inscription */}
                <div className="flex flex-col items-center space-y-6 w-full mt-8">
                  <button className="flex items-center gap-2 text-xl font-semibold hover:text-[#f3336d] transition-all">
                    <Languages size={26} /> Langue
                  </button>
                  <button
                    onClick={handleOpenLogin}
                    className="w-full max-w-sm px-6 py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-all"
                  >
                    Connexion
                  </button>
                  <button
                    onClick={handleOpenSignUp}
                    className="w-full max-w-sm px-6 py-4 bg-gradient-to-r from-[#f3336d] to-[#ff574c] text-white font-semibold rounded-full hover:opacity-90 transition-all"
                  >
                    Créez un compte
                  </button>
                </div>
              </div>
            )}

            {/* Texte principal */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold relative z-10">Swipe Right</h1>

            {/* Boutons principaux */}
            <div className="absolute bottom-8 left-6 right-6 flex flex-col items-center space-y-4 pb-8 z-40 sm:flex lg:hidden">
              <button  onClick={handleOpenSignUp} className="bg-gradient-to-r from-[#f3336d] to-[#ff574c] text-white rounded-full py-3 px-8 w-full max-w-lg mx-auto hover:opacity-90 transition">
                Créez un compte
              </button>
              <button  onClick={handleOpenLogin} className="border border-white text-white rounded-full py-3 px-8 w-full max-w-lg mx-auto hover:bg-white hover:text-black transition">
                Connexion
              </button>
            </div>

            <div className="hidden lg:block space-x-8 px-4 pb-8 z-50 pt-8">
              <button  onClick={handleOpenSignUp} className="bg-gradient-to-r from-[#f3336d] to-[#ff574c] text-white rounded-full py-3 px-8 cursor-pointer">
                Créez un compte
              </button>
            </div>
          </section>
        </>
      )}

      {/* Modals */}
      <SignUpModal isOpen={isSignUpOpen} onClose={handleCloseSignUp} />
      <LoginModal isOpen={isLoginOpen} onClose={handleCloseLogin} type="login" />
    </div>
  );
}

