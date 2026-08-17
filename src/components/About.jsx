import { useState, useEffect } from "react";
import ProfileImg from "../assets/Profile.jpeg";
import { 
  FaDownload, 
  FaChevronDown, 
  FaChevronUp, 
  FaEnvelope, 
  FaPhone, 
  FaLinkedin, 
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCode,
  FaDatabase,
  FaRobot,
  FaCloud,
  FaServer,
  FaFire,
  FaReact,
  FaNodeJs,
  FaAws,
  FaPython,
  FaStar,
  FaRocket,
  FaLightbulb,
  FaChartLine
} from "react-icons/fa";
import { SiExpress, SiTensorflow, SiMongodb, SiTailwindcss } from "react-icons/si";

export default function About() {
  const [showMore, setShowMore] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTech, setActiveTech] = useState(null);
  const [profileImage, setProfileImage] = useState(ProfileImg);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', checkMobile);
    checkMobile();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const floatingIcons = [
    // { icon: "⚡", delay: "0s", size: "text-2xl", color: "text-yellow-400" },
    // { icon: "✨", delay: "1s", size: "text-xl", color: "text-cyan-300" },
    // { icon: "🚀", delay: "2s", size: "text-3xl", color: "text-orange-400" },
    // { icon: "💡", delay: "3s", size: "text-2xl", color: "text-purple-300" },
    // { icon: "🌟", delay: "4s", size: "text-xl", color: "text-pink-300" },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-blue-950 py-8 md:py-16 px-4 md:px-8 overflow-hidden"
      style={{
        '--mouse-x': `${mousePosition.x}%`,
        '--mouse-y': `${mousePosition.y}%`,
      }}
    >
      {/* Dynamic Gradient Mesh Background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div 
          className="absolute inset-0 transition-all duration-1000"
          style={{
            background: `radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.15) 0%, transparent 50%)`
          }}
        />
        <div 
          className="absolute inset-0 transition-all duration-1500"
          style={{
            background: `radial-gradient(circle at calc(100% - var(--mouse-x)) calc(100% - var(--mouse-y)), rgba(168, 85, 247, 0.1) 0%, transparent 50%)`
          }}
        />
      </div>

      {/* Floating Particles - Reduced on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: isMobile ? 10 : 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          />
        ))}
        
        {/* Animated Blobs - Smaller on mobile */}
        <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full mix-blend-screen filter blur-[60px] md:blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full mix-blend-screen filter blur-[60px] md:blur-[100px] animate-pulse-slow animation-delay-2000"></div>
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        {/* Header with responsive text */}
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black mb-4 relative mt-5">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient">
              ABOUT
            </span>
            <span className="block md:absolute md:top-15 md:left-13 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500 text-3xl md:text-5xl lg:text-5xl animate-glitch mt-2 md:mt-0">
              VISHNU PRASATH
            </span>
          </h1>
          <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 md:space-y-12">
            {/* Hero Introduction */}
            <div className="group relative">
              <div className="absolute -inset-2 md:-inset-3 bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20 rounded-2xl md:rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-white/10 shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="text-4xl md:text-5xl animate-wave">👋</div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full animate-ping-slow"></div>
                  </div>
                  <div>
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500 font-bold text-lg md:text-xl">
                      Hello World! I'm
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mt-2">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 animate-gradient bg-[length:300%_300%]">
                        Vishnu Prasath
                      </span>
                    </h2>
                  </div>
                </div>
                
                <div className="inline-flex flex-wrap items-center gap-3 bg-gradient-to-r from-gray-800/70 to-gray-900/70 backdrop-blur-md px-4 md:px-6 py-2 md:py-3 rounded-full border border-white/10 shadow-lg group-hover:border-cyan-500/50 transition-all duration-300">
                  <FaRocket className="text-cyan-400 animate-bounce flex-shrink-0" />
                  <p className="text-base md:text-lg text-gray-200">
                    <span className="font-bold text-cyan-300">Developer | Tester </span> &{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 font-bold">
                      AI/ML Innovator
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Experience Card */}
            <div className="group perspective-1000">
              <div className="relative transform-gpu transition-all duration-700 group-hover:rotate-x-2 group-hover:rotate-y-2">
                <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/70 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-white/10 shadow-2xl">
                  <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
                    <div className="relative">
                      <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-3 md:p-4 rounded-xl shadow-2xl">
                        <FaCalendarAlt className="text-white text-2xl md:text-3xl" />
                      </div>
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-2 md:px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        Current
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                        <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                          First American (India)
                          <FaChartLine className="text-green-400 animate-pulse-slow flex-shrink-0" />
                        </h3>
                      </div>
                     <div className="space-y-3 text-sky-400">
  <h4 className="text-lg md:text-xl font-semibold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
    Techinal Trainee
  </h4>
  <p className="text-gray-400 flex items-center gap-2 text-sm md:text-base">
    <FaMapMarkerAlt className="text-cyan-500 flex-shrink-0" />
    Remote • Full Time • Mar 2026 - Present
  </p>
  
  <div className="space-y-2 text-gray-200">
  <p className="flex items-start gap-2">
    <span className="text-cyan-400 mt-1 flex-shrink-0">•</span>
    <span className="text-sm md:text-base">
      Involved in{" "}
      <span className="font-bold text-cyan-300">Development</span> and{" "}
      <span className="font-bold text-cyan-300">
        Data Validation & Quality Assurance
      </span>{" "}
      to ensure accuracy and consistency
    </span>
  </p>

  <p className="flex items-start gap-2">
    <span className="text-orange-400 mt-1 flex-shrink-0">•</span>
    <span className="text-sm md:text-base">
      Developing and executing{" "}
      <span className="font-bold text-orange-300">
        Playwright Automation
      </span>{" "}
      using TypeScript
    </span>
  </p>

  <p className="flex items-start gap-2">
    <span className="text-emerald-400 mt-1 flex-shrink-0">•</span>
    <span className="text-sm md:text-base">
      Performing{" "}
      <span className="font-bold text-emerald-300">
        API Testing & Response Validation
      </span>{" "}
      to ensure application quality
    </span>
  </p>
</div>
</div>
                    </div>
                  </div>
                  
                  {/* Enhanced Progress */}
                  <div className="mt-6 md:mt-8">
                    <div className="flex justify-between text-xs md:text-sm mb-2 md:mb-3">
                      <span className="text-gray-400">Experience Growth</span>
                      <span className="text-cyan-300 font-bold">3 Months • 25%</span>
                    </div>
                    <div className="w-full h-2 md:h-3 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm">
                      <div className="relative h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full w-1/4">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Tech Stack */}
            <div className="space-y-4 md:space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-1">
                  <FaLightbulb className="text-yellow-400" />
                  Tech Stack
                </h3>
                <span className="text-xs md:text-sm text-gray-400 bg-gray-800/50 px-2 py-1 rounded-full">
                  {activeTech ? `Hovering: ${activeTech}` : 'Hover over tech!'}
                </span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { 
                    title: "Frontend", 
                    icon: <FaCode className="text-xl md:text-2xl" />, 
                    color: "from-cyan-500 to-blue-500",
                    skills: ["React.js", "Bootstrap", "Tailwind"],
                    tech: "React"
                  },
                  { 
                    title: "Database", 
                    icon: <FaDatabase className="text-xl md:text-2xl" />, 
                    color: "from-emerald-500 to-green-500",
                    skills: ["Firebase", "MongoDB", "SQL"],
                    tech: "Database"
                  },
                  { 
                    title: "Backend", 
                    icon: <FaServer className="text-xl md:text-2xl" />, 
                    color: "from-orange-500 to-yellow-500",
                    skills: ["Node.js", "Express.js"],
                    tech: "Backend"
                  },
                  { 
                    title: "AI/ML", 
                    icon: <FaRobot className="text-xl md:text-2xl" />, 
                    color: "from-pink-500 to-rose-500",
                    skills: ["Python", "Prompt Eng", "Agent AI"],
                    tech: "AI"
                  },
                  { 
                    title: "Cloud", 
                    icon: <FaCloud className="text-xl md:text-2xl" />, 
                    color: "from-purple-500 to-indigo-500",
                    skills: ["AWS", "Azure"],
                    tech: "Cloud"
                  },
                ].map((stack, index) => (
                  <div 
                    key={index}
                    className="group relative"
                    onMouseEnter={() => setActiveTech(stack.tech)}
                    onMouseLeave={() => setActiveTech(null)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl p-4 rounded-2xl border border-white/10 transition-all duration-500 group-hover:scale-105 group-hover:border-cyan-500/50">
                      <div className={`inline-flex p-2 md:p-3 rounded-xl bg-gradient-to-r ${stack.color} mb-3 shadow-lg`}>
                        {stack.icon}
                      </div>
                      <h4 className="text-base md:text-lg font-bold text-white mb-2">{stack.title}</h4>
                      <div className="space-y-1">
                        {stack.skills.map((skill, i) => (
                          <span 
                            key={i}
                            className="block px-2 py-1.5 bg-gray-800/50 rounded text-xs md:text-sm text-gray-300 hover:bg-gray-700/70 transition-all duration-300 hover:translate-x-1 hover:shadow-lg"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Profile Section */}
          <div className="space-y-6 md:space-y-10">
            {/* 3D Profile Card - Responsive */}
            <div className="relative perspective-1000">
              {/* Orbiting Elements - Hide on mobile */}
              {!isMobile && floatingIcons.map((icon, i) => (
                <div
                  key={i}
                  className={`absolute ${icon.color} ${icon.size} animate-orbit opacity-70`}
                  style={{
                    animationDelay: icon.delay,
                    top: '50%',
                    left: '50%',
                    transformOrigin: `calc(50% + ${Math.cos(i * 72 * Math.PI/180) * 150}px) calc(50% + ${Math.sin(i * 72 * Math.PI/180) * 150}px)`,
                  }}
                >
                  {icon.icon}
                </div>
              ))}

              {/* Main Profile Container - Responsive sizing */}
              <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80 transform-gpu hover:rotate-y-10 transition-transform duration-1000">
                {/* Outer Ring */}
                <div className="absolute inset-0 border-4 border-transparent rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 p-1 animate-spin-slow">
                  <div className="w-full h-full bg-gray-900 rounded-full"></div>
                </div>

                {/* Profile Image */}
               <div className="absolute inset-8 md:inset-10 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl group bg-gradient-to-br from-cyan-900/20 to-blue-900/20 backdrop-blur-sm">
  <div className="relative w-full h-full">
    {/* High quality placeholder while loading */}
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-900 via-blue-900 to-purple-900 animate-pulse-slow opacity-20"></div>
    
    {/* Main image with quality optimization */}
    <img
      src={profileImage}
      alt="Vishnu Prasath - Full Stack Developer"
      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-all duration-700"
      style={{
        imageRendering: 'optimizeQuality',
        transform: 'translateZ(0)', // GPU acceleration
      }}
      onError={() => {
        const highQualityFallbacks = [
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=80&crop=face",
          "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=80&crop=face",
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=80&crop=face",
        ];
        setProfileImage(highQualityFallbacks[0]);
      }}
      loading="eager"
      decoding="async"
      sizes="(max-width: 768px) 200px, 400px"
      srcSet={`
        ${profileImage}?w=200 200w,
        ${profileImage}?w=400 400w,
        ${profileImage}?w=800 800w
      `}
    />
    
    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 via-transparent to-purple-500/5"></div>
    
    {/* Professional badge overlay - Simplified on mobile */}
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-transparent to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
      <div className="text-center">
        <span className="text-xs md:text-sm font-bold text-sky-300">Full Stack Developer</span>
      </div>
    </div>
  </div>
  
  {/* Floating initials overlay - Simplified on mobile */}
  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
    <div className="bg-black/40 backdrop-blur-sm rounded-full p-6 md:p-8 transform scale-0 group-hover:scale-100 transition-transform duration-500">
      <span className="text-4xl md:text-5xl font-black text-white">VP</span>
    </div>
  </div>
</div>

                {/* Floating Badges - Simplified on mobile */}
                {!isMobile ? [
                  { text: "React", top: "10%", left: "10%", color: "cyan" },
                  { text: "Firebase", top: "15%", right: "10%", color: "green" },
                  { text: "AI/ML", bottom: "20%", left: "5%", color: "orange" },
                  { text: "Cloud", bottom: "15%", right: "10%", color: "red" },
                ].map((badge, i) => (
                  <div
                    key={i}
                    className={`absolute animate-float z-10`}
                    style={{
                      top: badge.top,
                      [badge.left ? 'left' : 'right']: badge.left || badge.right,
                      animationDelay: `${i * 0.5}s`,
                    }}
                  >
                    <div className={`bg-gray-900/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-${badge.color}-500/50 shadow-xl`}>
                      <span className={`text-xs font-bold text-${badge.color}-400`}>{badge.text}</span>
                    </div>
                  </div>
                )) : (
                  <div className="absolute -bottom-4 left-0 right-0 flex justify-center gap-2">
                    {["React", "Firebase", "AI/ML", "Cloud"].map((tech, i) => (
                      <div key={i} className="bg-gray-900/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-cyan-500/50 shadow-xl">
                        <span className="text-xs font-bold text-cyan-400">{tech}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Stats with Hover Effects - Grid adjustments */}
            <div className="grid grid-cols-2 gap-3 md:gap-5 max-w-md mx-auto">
              {[
                { 
                  value: "4+", 
                  label: "Months Exp", 
                  icon: "🚀", 
                  gradient: "from-cyan-500 to-blue-500",
                  description: "Professional Growth"
                },
                { 
                  value: "19+", 
                  label: "Projects", 
                  icon: "💻", 
                  gradient: "from-purple-500 to-pink-500",
                  description: "Successfully Delivered"
                },
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="group relative"
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.gradient} rounded-xl blur opacity-0 group-hover:opacity-40 transition-all duration-500`}></div>
                  <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/70 backdrop-blur-sm p-4 md:p-5 rounded-xl border border-white/10 text-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl">
                    <div className="text-3xl md:text-4xl mb-2 opacity-70 group-hover:opacity-100">
                      {stat.icon}
                    </div>
                    <div className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1`}>
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-gray-300 font-semibold mb-1">{stat.label}</div>
                    <div className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {stat.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Learning Timeline */}
            <div className="max-w-md mx-auto">
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl p-6 md:p-7 rounded-2xl border border-white/10 shadow-2xl">
                <h4 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-3 pb-3 border-b border-white/10">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-lg">
                    <FaRocket className="text-white" />
                  </span>
                  Learning Journey
                </h4>
                <div className="space-y-4 md:space-y-6">
                  {[
                    { 
                      title: "MERN Stack Mastery", 
                      status: "In Progress", 
                      duration: "Mar 2025 - Aug 2025", 
                      progress: 100,
                      color: "bg-gradient-to-r from-cyan-500 to-blue-500",
                      icon: "⚡"
                    },
                    { 
                      title: "AI/ML Engineering", 
                      status: "Learning", 
                      duration: "2024 - Present", 
                      progress: 60,
                      color: "bg-gradient-to-r from-orange-500 to-red-500",
                      icon: "🤖"
                    },
                    { 
                      title: "Cloud Architecture", 
                      status: "Exploring", 
                      duration: "2024 - Present", 
                      progress: 45,
                      color: "bg-gradient-to-r from-purple-500 to-pink-500",
                      icon: "☁️"
                    },
                  ].map((item, index) => (
                    <div key={index} className="group flex items-start gap-3 md:gap-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300">
                      <div className="text-xl md:text-2xl opacity-70 group-hover:opacity-100 flex-shrink-0">{item.icon}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 mb-2">
                          <h5 className="font-bold text-white group-hover:text-cyan-300 transition-colors text-sm md:text-base truncate">
                            {item.title}
                          </h5>
                          <span className="text-xs px-2 py-1 bg-gray-800/50 rounded-full text-gray-300 font-medium flex-shrink-0">
                            {item.status}
                          </span>
                        </div>
                        <p className="text-xs md:text-sm text-gray-400 mb-2">{item.duration}</p>
                        <div className="w-full h-1.5 md:h-2 bg-gray-800/50 rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${item.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${item.progress}%` }}
                          />
                        </div>
                        <div className="text-xs text-gray-500 text-right mt-1">{item.progress}% Complete</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons - Stack on mobile */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-4 md:pt-6">
              <a
                href="/Resume/A.VISHNU.PRASATH.pdf"
                className="group relative inline-flex items-center justify-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-cyan-500/50"
                download
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-150"></div>
                <FaDownload className="relative z-10 text-lg md:text-xl" />
                <span className="relative z-10 text-sm md:text-base">Download Resume</span>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 blur opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
              </a>
              
              {/* Optional View More button */}
              {/* <button
                onClick={() => setShowMore(!showMore)}
                className="group relative inline-flex items-center justify-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-md border-2 border-white/10 text-gray-300 font-bold rounded-2xl overflow-hidden transition-all duration-500 hover:border-cyan-500 hover:text-white hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {showMore ? <FaChevronUp /> : <FaChevronDown className="group-hover:animate-bounce" />}
                <span className="text-sm md:text-base">{showMore ? "Show Less" : "View More"}</span>
              </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Animations */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        
        .animate-blob {
          animation: blob 8s infinite ease-in-out;
        }
        
        @keyframes wave {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(15deg) scale(1.1);
          }
          75% {
            transform: rotate(-10deg) scale(1.1);
          }
        }
        
        .animate-wave {
          animation: wave 2.5s infinite ease-in-out;
        }
        
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-gradient {
          animation: gradient 3s infinite ease;
          background-size: 200% 200%;
        }
        
        @keyframes glitch {
          0% {
            clip-path: inset(40% 0 61% 0);
            transform: translate(-2px, 2px);
          }
          5% {
            clip-path: inset(92% 0 1% 0);
            transform: translate(2px, -2px);
          }
          10% {
            clip-path: inset(43% 0 1% 0);
            transform: translate(1px, -1px);
          }
          15% {
            clip-path: inset(25% 0 58% 0);
          }
          20% {
            clip-path: inset(54% 0 7% 0);
            transform: translate(-1px, 2px);
          }
          45% {
            clip-path: inset(58% 0 43% 0);
            transform: translate(1px, -2px);
          }
          50% {
            clip-path: inset(98% 0 1% 0);
            transform: translate(-1px, 1px);
          }
          55% {
            clip-path: inset(25% 0 58% 0);
          }
          60% {
            clip-path: inset(54% 0 7% 0);
          }
          65% {
            clip-path: inset(78% 0 3% 0);
          }
          70% {
            clip-path: inset(84% 0 9% 0);
          }
          75% {
            clip-path: inset(32% 0 45% 0);
          }
          80% {
            clip-path: inset(58% 0 43% 0);
          }
          85% {
            clip-path: inset(2% 0 95% 0);
          }
          90% {
            clip-path: inset(80% 0 1% 0);
          }
          95% {
            clip-path: inset(63% 0 19% 0);
          }
          100% {
            clip-path: inset(7% 0 79% 0);
          }
        }
        
        .animate-glitch {
          animation: glitch 2s infinite linear alternate-reverse;
        }
        
        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(150px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(150px) rotate(-360deg);
          }
        }
        .animate-orbit {
          animation: orbit 15s infinite linear;
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(5deg);
          }
        }
        .animate-float {
          animation: float 6s infinite ease-in-out;
        }
        @keyframes shine {
          0% {
            background-position: -100%;
          }
          100% {
            background-position: 200%;
          }
        }
        .animate-shine {
          animation: shine 2s infinite linear;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          background-size: 200% 100%;
        }
        
        /* Responsive text sizes */
        @media (max-width: 640px) {
          .text-responsive {
            font-size: clamp(1rem, 4vw, 1.5rem);
          }
        }
      `}</style>

      {/* Add these to your global CSS or Tailwind config */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .perspective-1000 {
            perspective: 500px;
          }
          
          .animate-orbit {
            display: none;
          }
          
          .group-hover\\:scale-105:hover {
            transform: scale(1.03);
          }
        }
        
        /* Better touch targets for mobile */
        @media (max-width: 768px) {
          button, 
          a, 
          .interactive {
            min-height: 44px;
            min-width: 44px;
          }
        }
        
        /* Prevent text overflow on small screens */
        .truncate-multiline {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}