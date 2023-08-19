import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "checking",
    email: null,
    displayName: null,
    photoURL: null,
    uid: null,
    errorMessage: null,
  },
  reducers: {
    checking: (state) => {
      state.status = "checking";
    },
    logout: (state, { payload }) => {
      state.status = "not-Authenticated";
      state.email = null;
      state.displayName = null;
      state.photoURL = null;
      state.uid = null;
      state.errorMessage = payload?.errorMessage;
    },
    login: (state, { payload }) => {
      state.status = "Authenticated";
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.photoURL = payload.photoURL;
      state.uid = payload.uid;
      state.errorMessage = null;
    },
  },
});
export const { checking, logout, login } = authSlice.actions;
