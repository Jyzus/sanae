import { login, logout } from "@store/auth/authSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { FirebaseAuth } from "../firebase/config";
import { useCustomSelector } from "./redux";

export const useCheckOut = () => {
  const { status } = useCustomSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout({}));

      const { uid, displayName, email, photoURL } = user;
      dispatch(login({ uid, displayName, email, photoURL }));
    });
  }, []);

  return {
    status,
  };
};
