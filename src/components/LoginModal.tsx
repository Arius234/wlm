import { loginWithGoogle, loginWithFacebook} from "@/lib/authService";
import { User } from "firebase/auth";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "login" | "signup";
}

export default function AuthModal({ onClose, type }: AuthModalProps) {

  const handleGoogleAuth = async () => {
    const user = await loginWithGoogle();
    if (user) handleAuthSuccess(user);
  };

  const handleFacebookAuth = async () => {
    const user = await loginWithFacebook();
    if (user) handleAuthSuccess(user);
  };


  const handleAuthSuccess = (user: User) => {
    console.log("Utilisateur connecté:", user);
    onClose();
    window.location.href = "/pre-profile/preprofile"; // Redirection vers le profil après la connexion
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">{type === "login" ? "Connexion" : "Créer un compte"}</h2>
        <div className="mb-6 text-sm text-gray-500">
          En cliquant sur Se connecter ou Continuer, tu acceptes nos <a href="#" className="underline">Conditions d&apos;utilisation</a>, notre <a href="#" className="underline">Politique de confidentialité</a> et notre <a href="#" className="underline">Politique relative aux cookies</a>.
        </div>

        <button onClick={handleGoogleAuth} className="w-full bg-red-500 text-white py-3 rounded-full mb-3 flex items-center justify-center space-x-2">
          <span>Continuer avec Google</span>
        </button>

        <button onClick={handleFacebookAuth} className="w-full bg-blue-600 text-white py-3 rounded-full mb-3 flex items-center justify-center space-x-2">
          <span>Continuer avec Facebook</span>
        </button>
      </div>
    </div>
  );
}
