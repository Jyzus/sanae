import { create } from "zustand";
import { authState } from "./authState";
import { signUp } from "../../supabase/providers/auth";

export const useAuthStore = create<authState>((set) => ({
  status: "not-Authenticated",
  email: null,
  username: null,
  photoURL: null,
  uid: null,
  errorStatus: null,

  checking: () => set(() => ({ status: "checking" })),
  signUp: async (fieldValues) => {
    const response = await signUp(fieldValues);
    if (response.error) {
      set({ errorStatus: response.error });
    }
    console.log(response);
  },
  login: () => {
    set(() => ({
      status: "Authenticated",
    }));
  },
  logout: () =>
    set(() => ({
      status: "not-Authenticated",
      email: null,
      username: null,
      photoURL: null,
      uid: null,
    })),
}));
