import { useEffect } from "react";
import Image from "next/image";
import { FaFacebook, FaGoogle, FaPhone, FaTimes } from "react-icons/fa";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // Assure de restaurer le scroll après fermeture
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-black text-white p-6 rounded-2xl shadow-lg w-full max-w-md text-center relative">
        
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Image src="/logo.png" alt="WhoLikeMe Logo" width={60} height={60} />
        </div>

        {/* Titre */}
        <h2 className="text-2xl font-bold mb-2">Connectez-vous</h2>

        {/* Texte d'information */}
        <p className="text-sm text-gray-400 mb-6 px-4">
          En cliquant sur <strong>Se connecter</strong> ou <strong>Continuer</strong>, tu acceptes nos{" "}
          <a href="#" className="text-[#f3336d] font-semibold hover:underline">Conditions d’utilisation</a>. Consulte notre{" "}
          <a href="#" className="text-[#f3336d] font-semibold hover:underline">Politique de confidentialité</a> et notre{" "}
          <a href="#" className="text-[#f3336d] font-semibold hover:underline">Politique relative aux cookies</a> pour savoir comment nous traitons les données.
        </p>

        {/* Boutons de connexion */}
        <button className="w-full flex items-center justify-center bg-blue-600 text-white py-3 rounded-full mb-3 hover:bg-blue-700 transition">
          <FaFacebook size={20} className="mr-2" /> Se connecter avec Facebook
        </button>
        <button className="w-full flex items-center justify-center bg-red-500 text-white py-3 rounded-full mb-3 hover:bg-red-600 transition">
          <FaGoogle size={20} className="mr-2" /> Se connecter avec Google
        </button>
        <button className="w-full flex items-center justify-center border border-gray-600 text-white py-3 rounded-full hover:bg-gray-800 transition">
          <FaPhone size={20} className="mr-2" /> Se connecter avec un numéro
        </button>

        {/* Problème de connexion */}
        <div className="mt-6">
          <a href="#" className="text-sm text-[#f3336d] font-semibold hover:underline">
            Problème de connexion ?
          </a>
        </div>

        {/* Bouton de fermeture */}
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
          onClick={onClose}
          aria-label="Fermer le modal"
        >
          <FaTimes size={20} />
        </button>
      </div>
    </div>
  );
}
