import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "@views/navigation/Navbar";
import { Home } from "@views/pages/app/home/Home";
import { Profile } from "@pages/app/profile/Profile";
import { ExamRouter } from "./ExamRouter";
import Courses from "@views/pages/app/courses/Courses";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/exams/*" element={<ExamRouter />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
