
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Project.jsx";
import Resume from "./components/Resume.jsx";
import Achievements from "./components/Achievements.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";


function App() {
 

  return (
    <div>
      <Navbar />
      <About />
      <Projects />
      <Resume />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
