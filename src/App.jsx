import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Project.jsx";
import Resume from "./components/Resume.jsx";
import Achievements from "./components/Achievements.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <About />
              <Projects />
              <Resume />
              <Achievements />
              <Contact />
              <Footer />
            </>
          }
        />
      </Routes>

      {/* Scroll-To-Top Button */}
      {showScroll && (
        <button className="scroll-to-top-btn" onClick={scrollToTop}>
          <ArrowUp size={22} />
        </button>
      )}
    </Router>
  );
}

export default App;
