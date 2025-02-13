import { useState, useEffect } from "react";
import { auth } from "@/lib/firebaseConfig";
import { User } from "firebase/auth";

export default function PreProfile() {
  // Correction : useState<User | null>
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user); // Plus d'erreur ici
    });

    return () => unsubscribe();
  }, []);

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
