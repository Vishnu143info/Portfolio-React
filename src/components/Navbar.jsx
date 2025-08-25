import { useEffect } from "react";
import feather from "feather-icons";

export default function Navbar() {
  useEffect(() => {
    
    feather.replace();
  }, []);

  return (
    <header className="sticky-top shadow-sm bg-white">
      <nav className="navbar navbar-expand-md container d-flex align-items-center">
     

        {/* Brand */}
        <a
          className="navbar-brand fw-bold gradient-text d-flex align-items-center gap-2"
          href="#about"
        >
          <i data-feather="user"></i> Vishnu
        </a>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto fw-medium">
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#resume">Resume</a></li>
            <li className="nav-item"><a className="nav-link" href="#achievements">Achievements</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
