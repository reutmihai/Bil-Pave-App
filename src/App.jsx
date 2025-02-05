import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/navigation/Navigation";
import { Home } from "./pages/Home/Home";
import { Services } from "./pages/Services";
import { Portfolio } from "./pages/Portfolio";
import { About } from "./pages/About";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";

function App() {
  return (
    <Router basename="/Bil-Pave-App/">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
