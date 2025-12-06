import { useState, useEffect } from "react";
import { 
  FaHome,
  FaUser,
  FaCode,
  FaBriefcase,
  FaTrophy,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaDownload,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";
import img1 from "../assets/logo.png"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  
  // States for scroll-to-hide (isMenuVisible, lastScrollY) have been removed.

  // Custom CSS for the logo's gradient text effect
  const gradientTextClass = "bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400";
  
  useEffect(() => {
    const handleScroll = () => {
      // 1. Set scroll state for styling (adds background/shadow after scrolling 50px)
      setScrolled(window.scrollY > 50);

      // 2. Active section detection (Scroll-spy logic)
      const sections = ['about', 'projects', 'resume', 'achievements', 'contact'];
      // Use reduce to find the closest active section
      const currentSection = sections.reduce((activeId, section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // The section is active if its top edge is at or above 100px from the viewport top
          if (rect.top <= 100) { 
            return section;
          }
        }
        return activeId; 
      }, 'home'); 
      
      setActiveSection(currentSection);
      
      // Removed: Logic for scroll-to-hide (comparing currentScrollY with lastScrollY)
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Dependency array is now empty since lastScrollY is not used

  const navItems = [
    
    { id: 'about', label: 'About', icon: <FaUser /> },
    { id: 'projects', label: 'Projects', icon: <FaCode /> },
    { id: 'resume', label: 'Resume', icon: <FaBriefcase /> },
    { id: 'achievements', label: 'Achievements', icon: <FaTrophy /> },
    { id: 'contact', label: 'Contact', icon: <FaEnvelope /> },
  ];

  const handleNavClick = (itemId) => {
    setActiveSection(itemId);
    setIsOpen(false);
    
    // Custom smooth scroll with offset correction
    const element = document.getElementById(itemId);
    if (element) {
        const offset = 80; 
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
      // Menu visibility logic is removed. The fixed class ensures it stays.
      scrolled 
        ? 'bg-black/20 backdrop-blur-2xl shadow-2xl border-b border-white/10 py-3' 
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          
          {/* Logo */}
          <a 
            href="#about" 
            className="group flex items-center gap-3 no-underline focus:outline-none"
            onClick={(e) => {
                e.preventDefault();
                handleNavClick('about');
            }}
          >
            <div className="relative group-hover:scale-105 transition-transform duration-300">
             <div className="w-19 h-18 rounded-xl  flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all">
             <img 
             src={img1} 
           alt="VP Logo" 
              className="w-full h-full object-cover rounded-xl"
                        />
</div>
              <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full animate-pulse border-2 border-black/50"></div>
            </div>
 
          </a>
           <div className="hidden md:block">
              <div className="relative">
  <div className="text-lg font-bold tracking-widest text-gray-800">
    VISHNU PRASATH
    <span className="absolute top-0 left-0 text-cyan-400 animate-glitch no-underline opacity-70">VISHNU PRASATH</span>
    <span className="absolute top-0 left-0 text-pink-400 animate-glitch-reverse opacity-70">VISHNU PRASATH</span>
  </div>
</div>
              <div className="text-xs text-gray-400 font-medium tracking-widest">FULL STACK DEVELOPER</div>
            </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`relative group text-sm font-semibold transition-all duration-300 px-3 py-2 ${
                  activeSection === item.id
                    ? 'text-white'
                    : 'text-gray-300 hover:text-white'
                } focus:outline-none`}
                onClick={() => handleNavClick(item.id)}
              >
                <div className="flex items-center gap-2">
                  <span className={`text-lg ${activeSection === item.id ? "scale-110 transition-transform text-blue-400" : ""}`}>{item.icon}</span>
                  {item.label}
                </div>
              </button>
            ))}
          </div>

          {/* Right Controls */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Resume Button */}
<a
  href="/Resume/A.VISHNU.PRASATH.pdf"
  download="Vishnu_Prasath_Resume.pdf"
  className="btn btn-outline-info text-white rounded-pill px-4 py-2 d-flex align-items-center justify-content-center"
>
  <FaDownload size={16} className="me-2" />
  Download Resume
</a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all focus:outline-none focus:ring-2 ring-white/50"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 animate-in fade-in slide-in-from-top-10 duration-300">
            <div className="bg-black/30 backdrop-blur-2xl rounded-xl border border-white/20 p-4 shadow-2xl">
              <div className="grid grid-cols-2 gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`flex flex-col items-center p-3 rounded-xl transition-all no-underline ${
                      activeSection === item.id
                        ? 'bg-blue-500/30 text-white border border-blue-400/50 shadow-lg shadow-blue-500/20'
                        : 'bg-white/10 text-gray-300 hover:text-white hover:bg-white/20'
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                  >
                    <span className="text-xl mb-1">{item.icon}</span>
                    <span className="text-sm font-medium">{item.label}</span>
                  </a>
                ))}
              </div>
              
              {/* Mobile Social & Resume */}
              <div className="flex justify-center space-x-4 mt-4 pt-4 border-t border-white/10">
               
                <a
  href="/Resume/A.VISHNU.PRASATH.pdf"
  download="Vishnu_Prasath_Resume.pdf"
  className="btn btn-sm btn-success rounded-pill px-3 py-1 d-flex align-items-center justify-content-center fw-medium text-white text-decoration-none"
>
  <FaDownload size={16} className="me-2" />
  Resume
</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}