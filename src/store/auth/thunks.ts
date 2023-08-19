import { logoutFirebase, signInWithGoogle } from "../../firebase/providers";
import { checking, login, logout } from "./authSlice";

export const checkingAuthentication = () => {
  return async (dispatch) => {
    dispatch(checking());
  };
};

export const startSignInWithGoogle = () => {
  return async (dispatch) => {
    dispatch(checking());

    const result = await signInWithGoogle();
    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase();

    dispatch(logout({}));
  };
};
