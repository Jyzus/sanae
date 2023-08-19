import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Navbar } from "../components/Navigation/Navbar";
import { Profile } from "../pages/Profile";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
