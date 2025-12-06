import {
  Heart,
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  FileText,
  ExternalLink,
  Sparkles,
  Code,
  Briefcase,
  User,
  Home
} from "lucide-react";
import { useState, useEffect } from "react";
import img1 from "../assets/logo.png"

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const quickLinks = [
    { name: 'Home', href: '#home', icon: <Home size={16} /> },
    { name: 'About', href: '#about', icon: <User size={16} /> },
    { name: 'Projects', href: '#projects', icon: <Code size={16} /> },
    { name: 'Resume', href: '#resume', icon: <Briefcase size={16} /> },
    { name: 'Contact', href: '#contact', icon: <Mail size={16} /> },
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/vishnu-prasath-a-vishnu/', icon: <Linkedin size={20} />, color: 'hover:text-blue-400' },

    { name: 'Resume', href: '/Resume/A.VISHNU.PRASATH.pdf', icon: <FileText size={20} />, color: 'hover:text-red-400' },
  ];

  const contactInfo = [
    { icon: <Mail size={16} />, text: 'vishnuprasathappanasamy@gmail.com', href: '#contact' },
    { icon: <Phone size={16} />, text: '+91 9344598906', href: 'tel:+919344598906' },
    { icon: <MapPin size={16} />, text: 'Coimbatore, Tamil Nadu', href: 'https://www.google.com/maps/place/BTM+Layout,+Bengaluru,+Karnataka' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black border-t border-white/10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full" style={{
            backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Animated Particles */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative w-20 h-20 rounded-lg  from-blue-500 via-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
                   <div className="w-19 h-18 rounded-xl  flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all">
                    <img 
                      src={img1} 
                      alt="VP Logo" 
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Vishnu Prasath</h3>
                <p className="text-sm text-gray-400">Full Stack Developer</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting digital experiences with modern web technologies.
              Passionate about building scalable applications and solving complex problems.
            </p>
            <div className="flex items-center gap-4 pt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 rounded-lg bg-gray-800/50 text-gray-400 border border-white/10 hover:border-white/20 ${social.color} transition-all duration-300 hover:scale-110 group relative no-underline hover:no-underline`}
                  onMouseEnter={() => setHoveredLink(social.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {social.icon}
                  {hoveredLink === social.name && (
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded border border-white/10 whitespace-nowrap">
                      {social.name}
                    </div>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mx-15 mb-6 pb-2 border-b border-white/10 inline-block">
              <span className="flex items-center gap-3">
                <Sparkles size={16} className="text-cyan-400" />
                Quick Links
              </span>
            </h4>
            <ul className="space-y-3 mx-10">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300 py-2 no-underline hover:no-underline"
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <span className={`transition-transform duration-300 ${hoveredLink === link.name ? 'scale-110' : ''}`}>
                      {link.icon}
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                    {hoveredLink === link.name && (
                      <ExternalLink size={12} className="ml-auto text-cyan-400" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mx-7 mb-6 pb-2 border-b border-white/10 inline-block">
              Get In Touch
            </h4>
            <ul className="space-y-2">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <a
                    href={info.href}
                    target={info.href.includes('http') ? '_blank' : '_self'}
                    rel={info.href.includes('http') ? 'noopener noreferrer' : ''}
                    className="group flex items-start gap-3 text-gray-400 hover:text-white transition-all duration-300 no-underline hover:no-underline"
                  >
                    <span className="mt-0.5 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </span>
                    <span>{info.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats/Quick Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 mx-15 pb-2 border-b border-white/10 inline-block">
              At a Glance
            </h4>
            <div className="space-y-2 mx-15">
              {[
                { label: 'Projects Completed', value: '25+' },
                { label: 'Technologies Used', value: '15+' },
                { label: 'Years Experience', value: '2+' },
                { label: 'Happy Clients', value: '10+' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-2 border-b border-white/5 last:border-0"
                >
                  <span className="text-gray-400 text-sm">{stat.label}</span>
                  <span className="text-white font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="px-4 bg-gray-900">
              <Sparkles className="text-cyan-400" size={20} />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {currentYear} Vishnu Prasath. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="/Resume/A.VISHNU.PRASATH.pdf"
              download
              className="group flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-300 no-underline hover:no-underline"
            >
              <FileText size={14} />
              <span>Download Resume</span>
              <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            <div className="hidden md:block h-4 w-px bg-white/10"></div>

            <a
              href="#contact"
              className="group flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-300 no-underline hover:no-underline"
            >
              <Mail size={14} />
              <span>Hire Me</span>
              <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>
        </div>

        {/* Back to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 group"
            aria-label="Scroll to top"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative w-12 h-12 rounded-full bg-gray-900 border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 transition-all duration-300 group-hover:scale-110">
              <ArrowUp className="text-white group-hover:text-cyan-300 transition-colors duration-300" />
              <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-blue-500/30 transition-all duration-500 animate-ping opacity-0 group-hover:opacity-100"></div>
            </div>
          </button>
        )}

        {/* Developer Credit */}
        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-gray-500">
            Designed & Developed by
            <span className="text-gray-400 ml-1">Vishnu Prasath</span>
          </p>
        </div>
      </div>

      {/* Add animations and the ultimate CSS fix */}
      <style jsx>{`
        /* *** ULTIMATE CSS FIX FOR UNDERLINES *** This forces the text-decoration to none for all anchor tags 
          within the footer element, overriding browser defaults and Tailwind conflicts.
        */
        footer a, footer a:hover, footer a:focus {
          text-decoration: none !important;
        }

        /* Existing Animations */
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .animate-float {
          animation: float 4s infinite ease-in-out;
        }

        .animate-pulse {
          animation: pulse 2s infinite ease-in-out;
        }

        .animate-ping {
          animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </footer>
  );
}