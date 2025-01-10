import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LandingPage from "./Landing001";
import FleetDetails from "./pages/FleetDetails";
import Fleet from "./pages/Fleet";
import LuxuryJetLanding from "./LandingPage";
import Footer from "./components/Footer";
import ServiceDetails from "./pages/ServiceDetailsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LuxuryJetLanding />} />
        <Route path="/home" element={<LuxuryJetLanding />} />
        <Route path="/fleet" element={<Fleet />} />
        <Route path="/fleet/:id" element={<FleetDetails />} />
        <Route path="/service/:id" element={<ServiceDetails />} />
      </Routes>{" "}
      <Footer />
    </Router>
  );
}

export default App;
