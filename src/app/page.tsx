"use client";

import { useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import { Menu, X, Languages } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {!isLoaded && <SplashScreen onAnimationEnd={() => setIsLoaded(true)} />}
      {isLoaded && (
        <>
          {/* First Screen with Background Image */}
          <section
            className="relative w-full h-screen flex flex-col items-center justify-center bg-cover bg-center text-white text-center"
            style={{ backgroundImage: "url('/back.webp')" }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Header */}
            <header className="absolute top-0 left-0 w-full text-white px-6 py-4 flex justify-between items-center z-50">
              <div className="flex items-center gap-3 relative z-10">
                <Link href="/">
                  <Image
                    src="/logo.png"
                    alt="WhoLikeMe Logo"
                    width={40}
                    height={40}
                    className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] cursor-pointer"
                  />
                </Link>
                <Link href="/" className="text-2xl md:text-4xl font-extrabold cursor-pointer">
                  WhoLikeMe
                </Link>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-6 text-lg font-semibold relative z-10">
                <a href="#" className="hover:underline hover:text-[#f3336d] transition-colors">Produits</a>
                <a href="#" className="hover:underline hover:text-[#f3336d] transition-colors">En Savoir Plus</a>
                <a href="#" className="hover:underline hover:text-[#f3336d] transition-colors">Sécurité</a>
                <a href="#" className="hover:underline hover:text-[#f3336d] transition-colors">Assistance</a>
                <a href="#" className="hover:underline hover:text-[#f3336d] transition-colors">Télécharger</a>
              </nav>

              {/* Langue & Connexion */}
              <div className="hidden lg:flex items-center space-x-4 relative z-10">
                <button className="flex items-center gap-2 text-lg font-semibold hover:text-[#f3336d] transition-colors">
                  <Languages size={24} /> Langue
                </button>
                <button className="px-6 py-2 border border-white bg-white text-black font-semibold rounded-full hover:bg-gray-300 transition-colors">
                  Connexion
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button className="lg:hidden relative z-50" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </header>

            {/* Mobile Menu Overlay */}
            {menuOpen && (
  <div className="fixed inset-0 bg-white text-black flex flex-col items-center justify-center text-lg font-semibold lg:hidden z-[100] p-6 font-geist shadow-xl w-full h-full">
    
    {/* Header du menu mobile */}
    <div className="absolute top-6 left-6 flex items-center gap-3">
      <Image src="/logo.png" alt="WhoLikeMe Logo" width={40} height={40} />
      <span className="text-2xl font-extrabold text-black tracking-wide">WhoLikeMe</span>
    </div>

    {/* Bouton Fermer */}
    <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6">
      <X size={32} className="hover:text-[#f3336d] transition-colors duration-200" />
    </button>

    {/* Liens du menu */}
    <nav className="flex flex-col items-center space-y-6 mt-20 text-xl font-medium">
      <a href="#" className="hover:text-[#f3336d] hover:scale-105 transition-all duration-200">Produits</a>
      <a href="#" className="hover:text-[#f3336d] hover:scale-105 transition-all duration-200">En Savoir Plus</a>
      <a href="#" className="hover:text-[#f3336d] hover:scale-105 transition-all duration-200">Sécurité</a>
      <a href="#" className="hover:text-[#f3336d] hover:scale-105 transition-all duration-200">Assistance</a>
      <a href="#" className="hover:text-[#f3336d] hover:scale-105 transition-all duration-200">Télécharger</a>
    </nav>

    {/* Langue & Boutons */}
    <div className="flex flex-col items-center space-y-6 w-full mt-8">
      <button className="flex items-center gap-2 text-xl font-semibold hover:text-[#f3336d] hover:scale-105 transition-all duration-200">
        <Languages size={26} /> Langue
      </button>
      <button className="w-full max-w-sm px-6 py-4 bg-black text-white font-semibold rounded-full text-xl hover:bg-gray-800 transition-all duration-200">
        Connexion
      </button>
      <button className="w-full max-w-sm px-6 py-4 bg-gradient-to-r from-[#f3336d] to-[#ff574c] text-white font-semibold rounded-full text-xl hover:opacity-90 transition-all duration-200">
        Créez un compte
      </button>
    </div>
  </div>
)}

            {/* Swipe Right Text */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold relative z-10">Swipe Right</h1>

            {/* Bottom Buttons */}
            <div className="absolute bottom-8 left-6 right-6 flex flex-col items-center space-y-4 pb-8 z-50 sm:flex lg:hidden">
              <button className="bg-gradient-to-r from-[#f3336d] to-[#ff574c] text-white rounded-full py-3 px-8 w-full max-w-lg mx-auto hover:opacity-90 transition">
                Créez un compte
              </button>
              <button className="border border-white text-white rounded-full py-3 px-8 w-full max-w-lg mx-auto hover:bg-white hover:text-black transition">
                Connexion
              </button>
            </div>

            <div className="hidden lg:block space-x-8 px-4 pb-8 z-50 pt-8">
              <button className="bg-gradient-to-r from-[#f3336d] to-[#ff574c] text-white rounded-full py-3 px-8">
                Créez un compte
              </button>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
