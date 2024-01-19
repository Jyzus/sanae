import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Load } from "@views/components/Load";
import { AuthRoutes } from "./auth/AuthRoutes";
import { AppRoutes } from "./app/AppRoutes";
import { useAuthStore } from "@store/auth/authStore";

export const Router = () => {
  const status = useAuthStore((state) => state.status);

  if (status == "checking") {
    return <Load />;
  }
  return (
    <BrowserRouter>
      <Routes>
        {status == "Authenticated" ? (
          <>
            <Route path="/*" element={<AppRoutes />} />
          </>
        ) : (
          <>
            <Route path="/auth/*" element={<AuthRoutes />} />
            <Route path="/*" element={<Navigate to={"/auth/login"} />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};
