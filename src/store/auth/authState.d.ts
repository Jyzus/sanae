export type authState = State & Action;

interface State {
  status: "not-Authenticated" | "Authenticated" | "checking";
  email: null | string;
  username: null | string;
  photoURL: null | string;
  uid: null | string;
}

interface Action {
  checking: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  loginWithGoogle: (response: any) => void;
  logout: () => void;
}
