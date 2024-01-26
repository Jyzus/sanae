import { Route, Routes } from "react-router-dom";
import { LoginPage } from "@pages/auth/LoginPage";
import RegisterPage from "@views/pages/auth/RegisterPage";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};
