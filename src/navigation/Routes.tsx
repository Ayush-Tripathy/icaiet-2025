import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import CommitteesPage from "@/pages/Committee";
import ImportantDatesPage from "@/pages/ImportantDatesPage";
import Registration from "@/pages/Registration";
import CallForPapers from "@/pages/CallForPapers";
import Speakers from "@/pages/Speakers";
import Contact from "@/pages/Contact";
import SubmissionGuidelines from "@/pages/Submission";
import CameraReadyInstructions from "@/pages/CameraReadyInstructions";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/committee" element={<CommitteesPage />} />
      <Route path="/important-dates" element={<ImportantDatesPage />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/call-for-papers" element={<CallForPapers />} />
      <Route path="/speakers" element={<Speakers />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/submission-guidelines" element={<SubmissionGuidelines />} />
      <Route
        path="/camera-ready-instructions"
        element={<CameraReadyInstructions />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
