import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "@views/navigation/Navbar";
import { Home } from "@views/pages/app/home/Home";
import { Notes } from "@pages/app/notes/Notes";
import { Profile } from "@pages/app/profile/Profile";
import { ExamRouter } from "./ExamRouter";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/exams/*" element={<ExamRouter />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
