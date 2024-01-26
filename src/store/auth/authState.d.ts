import { AuthError } from "@supabase/supabase-js";

export type authState = State & Action;

interface State {
  status: "not-Authenticated" | "Authenticated" | "checking";
  email: null | string;
  username: null | string;
  photoURL: null | string;
  uid: null | string;
  errorStatus: null | AuthError;
}

interface Action {
  checking: () => void;
  signUp: (fieldValues) => Promise<void>;
  login: (fieldValues) => void;
  logout: () => void;
}
