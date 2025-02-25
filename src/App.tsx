import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Portfolio } from "./pages/Portfolio";
import { About } from "./pages/About";
import SharedLayout from "./components/SharedLayout";
import ScrollToTop from "./components/ScrollToTop";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";

const App: React.FC = () => {
  return (
    <Router basename="/">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
