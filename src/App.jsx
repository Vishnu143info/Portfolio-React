import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Project.jsx";
import Resume from "./components/Resume.jsx";
import Achievements from "./components/Achievements.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";


function App() {
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
</Router>

  );
}

export default App;
