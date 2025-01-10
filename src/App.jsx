import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LandingPage from "./Landing001";
import FleetDetails from "./pages/FleetDetails";
import Fleet from "./pages/Fleet";
import LuxuryJetLanding from "./LandingPage";
import Footer from "./components/Footer";
import ServicesPage from "./pages/Fleet";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LuxuryJetLanding />} />
        <Route path="/home" element={<LuxuryJetLanding />} />
        <Route path="/fleet" element={<ServicesPage />} />
        <Route path="/fleet/:id" element={<FleetDetails />} />
      </Routes>{" "}
      <Footer />
    </Router>
  );
}

export default App;
