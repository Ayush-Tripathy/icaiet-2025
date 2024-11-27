import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import CommitteesPage from "@/pages/Committee";
import ImportantDatesPage from "@/pages/ImportantDatesPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/committee" element={<CommitteesPage />} />
      <Route path="/important-dates" element={<ImportantDatesPage />} />
    </Routes>
  );
};
