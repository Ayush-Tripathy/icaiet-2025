import { BrowserRouter as Router } from "react-router-dom";
import { NavigationProvider } from "./NavigationProvider";
import { AppRoutes } from "./Routes";
import Navbar from "@/lib/components/site-header";
import Footer from "@/lib/components/Footer";

export const Navigation = () => {
  return (
    <Router>
      <Navbar />
      <NavigationProvider>
        <AppRoutes />
      </NavigationProvider>
      <Footer />
    </Router>
  );
};
