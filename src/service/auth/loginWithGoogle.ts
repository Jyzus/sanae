import { signInWithGoogle } from "../../supabase/providers/auth";

export const loginWithGoogle = (reponse) => {
  const response = signInWithGoogle(reponse);
  return response;
};
