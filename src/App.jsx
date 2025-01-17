import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LandingPage from "./Landing001";
// import Fleet from "./pages/Fleet";
import LuxuryJetLanding from "./LandingPage";
import Footer from "./components/Footer";
import ServicesPage from "./pages/Fleet";
import ServiceDetails from "./pages/ServiceDetails";
import emailjs from "@emailjs/browser";

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LuxuryJetLanding />} />
        <Route path="/home" element={<LuxuryJetLanding />} />
        <Route path="/fleet" element={<ServicesPage />} />
        <Route path="/service/:id" element={<ServiceDetails />} />
      </Routes>{" "}
      <Footer />
    </Router>
  );
}

export default App;
