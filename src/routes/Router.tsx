import { useAuthStore } from "@store/auth/authStore";
import { Load } from "@views/components/Load";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRoutes } from "./app/AppRoutes";
import { AuthRoutes } from "./auth/AuthRoutes";

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
            <Route path="/*" element={<AppRoutes />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};
