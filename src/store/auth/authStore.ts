import { create } from "zustand";
import { authState } from "./authState";
import { loginWithGoogle } from "../../service/auth/loginWithGoogle";

export const useAuthStore = create<authState>((set) => ({
  status: "not-Authenticated",
  email: null,
  username: null,
  photoURL: null,
  uid: null,

  checking: () => set(() => ({ status: "checking" })),
  loginWithGoogle: (reponse) => {
    const response = loginWithGoogle(reponse);
    console.log(response);
    set(() => ({
      status: "Authenticated",
      // email: response.email,
      // username: response.username,
      // photoURL: response.photoURL,
      // uid: response.uid,
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
