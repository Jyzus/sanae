import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { appSlice } from "./app/appSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    app: appSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type CustomDispatch = typeof store.dispatch;
