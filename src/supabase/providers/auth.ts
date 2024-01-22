import { supabase } from "../config";

export const logout = async () => {
  const { error } = await supabase.auth.signOut();
  return error;
};

export const signInWithGoogle = async () => {
  const response = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
    },
  });

  console.log("Rpt: ", response);

  return response;
};

export const signInWithGithub = async () => {
  await supabase.auth.signInWithOAuth({
    provider: "github",
  });
};
