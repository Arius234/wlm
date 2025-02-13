import { getFirestore, doc, setDoc } from "firebase/firestore";
import { User } from "firebase/auth";

const db = getFirestore();

export const saveUserToDB = async (user: User): Promise<void> => {
  if (!user || !user.uid) {
    throw new Error("Utilisateur invalide ou UID manquant.");
  }

  const userRef = doc(db, "users", user.uid);
  const userData = {
    uid: user.uid,
    email: user.email ?? null,
    phoneNumber: user.phoneNumber ?? null,
    displayName: user.displayName ?? "Inconnu",
    createdAt: new Date(),
  };

  try {
    await setDoc(userRef, userData, { merge: true });
    console.log(`Utilisateur ${user.uid} enregistré avec succès.`);
  } catch (error) {
    console.error("Erreur lors de l'enregistrement de l'utilisateur:", error);
    throw error;
  }
};
