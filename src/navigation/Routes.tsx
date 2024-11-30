import { Routes, Route, useLocation } from "react-router-dom";
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
import CallForSponsorship from "@/pages/CallForSponsorship";
import Sponsors from "@/pages/Sponsors";
import { useEffect } from "react";

export const AppRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("Scrolling to top");
    window.scrollTo(0, 0);
  }, [location]);

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
      <Route path="/call-for-sponsorship" element={<CallForSponsorship />} />
      <Route path="/sponsors" element={<Sponsors />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
