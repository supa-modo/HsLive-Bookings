import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LuxuryJetLanding from "./Landing2";
import FleetDetails from "./pages/FleetDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LuxuryJetLanding />} />
        <Route path="/fleet/:id" element={<FleetDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
