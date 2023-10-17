import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useCheckOut } from "@hooks/useCheckOut";
import { Load } from "@views/components/Load";
import { AuthRoutes } from "./auth/AuthRoutes";
import { AppRoutes } from "./app/AppRoutes";

export const Router = () => {
  const { status } = useCheckOut();

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
