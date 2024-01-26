import { supabase } from "../config";

export const logout = async () => {
  const { error } = await supabase.auth.signOut();
  return error;
};

export const signUp = async (fieldData: {
  email: string;
  password: string;
}) => {
  const { data, error } = await supabase.auth.signUp({
    email: fieldData.email,
    password: fieldData.password,
  });

  return { data, error };
};
