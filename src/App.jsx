import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/navigation/Navigation";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Portfolio } from "./pages/Portfolio";
import { About } from "./pages/About";

function App() {
  return (
    <Router basename="/Bil-Pave-App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
