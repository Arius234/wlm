import { 
    GoogleAuthProvider, 
    FacebookAuthProvider, 
    signInWithPopup, 
    User 
  } from "firebase/auth";
  import { auth } from "./firebaseConfig";
  
  // Google Auth
  export const loginWithGoogle = async (): Promise<User | null> => {
    if (!auth) {
      console.error("Firebase auth instance is not initialized.");
      return null;
    }
  
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      return result.user;
    } catch (error) {
      console.error("Erreur lors de la connexion avec Google:", error);
      return null;
    }
  };
  
  // Facebook Auth
  export const loginWithFacebook = async (): Promise<User | null> => {
    if (!auth) {
      console.error("Firebase auth instance is not initialized.");
      return null;
    }
  
    const provider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      return result.user;
    } catch (error) {
      console.error("Erreur lors de la connexion avec Facebook:", error);
      return null;
    }
  };
  