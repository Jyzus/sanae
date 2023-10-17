import { Route, Routes } from "react-router-dom";
import { Exam } from "@pages/app/exams/Exam";
import { ExamEdit } from "@views/pages/app/exams/edit/ExamEdit";
import { ExamAdd } from "@views/pages/app/exams/add/ExamAdd";
import { ExamUseInformationSource } from "@views/pages/app/exams/use/ExamUseInformationSource";

export const ExamRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Exam />} />
      <Route path="/add" element={<ExamAdd />} />
      <Route path="/use/:id" element={<ExamUseInformationSource />} />
      <Route path="/edit/:id" element={<ExamEdit />} />
    </Routes>
  );
};
