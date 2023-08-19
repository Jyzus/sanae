import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "./auth/routes/AuthRoutes";
import { useCheckOut } from "./hooks/useCheckOut";
import { ChekingAuth } from "./app/components/ChekingAuth";
import { AppRoutes } from "./app/routes/AppRoutes";

export const Router = () => {
  const { status } = useCheckOut();

  if (status == "checking") {
    return <ChekingAuth />;
  }
  return (
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
  );
};
