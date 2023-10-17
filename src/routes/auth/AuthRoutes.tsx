import { Route, Routes } from "react-router-dom";
import { LoginPage } from "@pages/auth/LoginPage";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};
