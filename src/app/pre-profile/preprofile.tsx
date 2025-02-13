import { useState, useEffect } from "react";
import { auth } from "@/lib/firebaseConfig";
import { User } from "firebase/auth";

export default function PreProfile() {
  // Correction : useState<User | null>
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Vérification si 'auth' est défini
    if (auth) {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        setUser(user); // Mise à jour de l'état
      });

      // Cleanup de l'abonnement
      return () => unsubscribe();
    }
  }, []); // Le hook s'exécute une seule fois au montage du composant

  return (
    <div>
      {user ? (
        <h1>Bienvenue, {user.displayName || "Utilisateur"} !</h1>
      ) : (
        <h1>Chargement...</h1>
      )}
    </div>
  );
}
