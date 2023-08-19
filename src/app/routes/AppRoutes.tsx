import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Navbar } from "../components/Navigation/Navbar";
import { Profile } from "../pages/Profile";
import { Exams } from "../pages/Exams";
import { Notes } from "../pages/Notes";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/exams" element={<Exams />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
