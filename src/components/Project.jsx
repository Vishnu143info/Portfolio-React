import { useState, useRef, useEffect } from "react";
import { FaFire, FaNodeJs, FaReact, FaExternalLinkAlt, FaStar, FaCode, FaLock, FaEye, FaDownload } from "react-icons/fa";
import { SiFirebase, SiExpress } from "react-icons/si";
import lmslogo from "../assets/lmslogo.jpg";
import portfoliologo from "../assets/Portfoliologo.png";
import awslogo from "../assets/awslogo.webp";
import textimagelogo from "../assets/text-imagelogo.jpg";
import ptalogo from "../assets/ptalogo.png";
import miniProjectsLogo from "../assets/WebDevelopmentProjects2.png";

// LazyImage Component
const LazyImage = ({ src, alt, className, fallback = "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = imgRef.current;
            if (img) {
              img.src = src;
              observer.unobserve(img);
            }
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src]);

  const handleLoad = () => {
    setLoaded(true);
  };

  const handleError = () => {
    setError(true);
    setLoaded(true);
  };

  return (
    <div className="relative w-full h-full">
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse rounded-lg"></div>
      )}
      <img
        ref={imgRef}
        src=""
        alt={alt}
        className={`${className} transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        loading="lazy"
        onLoad={handleLoad}
        onError={handleError}
        style={{ opacity: loaded ? 1 : 0 }}
      />
      {error && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
          <FaCode className="text-gray-600 text-2xl" />
        </div>
      )}
    </div>
  );
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState(6);
  const projectsRef = useRef();

  const projects = [
    {
      title: "Nuetill LMS",
      desc: "Advanced Learning Management System with AI-powered chatbot, interactive courses, and role-based access for Admin, Tutor, and Students.",
      img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "https://lms-silk-ten.vercel.app/",
      category: "website",
      tags: ["React.js", "LMS", "Interactive", "Agent AI", "Chat bot", "Admin", "Tutor", "Student"],
      techStack: ["react"],
      featured: true,
      hasAccess: true
    },
    {
      title: "Sadhana Cart E-commerce",
      desc: "Complete e-commerce platform with product catalog, shopping cart, payment integration, and order management system using React and Firebase.",
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "https://www.sadhanacart.com/",
      category: "ecommerce",
      tags: ["React.js", "Firebase", "Redux"],
      techStack: ["react", "firebase"],
      featured: true,
      hasAccess: true
    },
    {
      title: "L Mart E-commerce",
      desc: "Online supermarket platform with inventory management, order processing, and customer dashboard using React and Firebase services.",
      img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: null,
      category: "ecommerce",
      tags: ["React.js", "Firebase Auth", "Firestore"],
      techStack: ["react", "firebase"],
      featured: true,
      hasAccess: false
    },
    {
      title: "Printing E-commerce",
      desc: "Custom printing service platform with design upload, customization tools, and order management system built with React and Firebase.",
      img: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: null,
      category: "ecommerce",
      tags: ["React.js", "Firebase"],
      techStack: ["react", "firebase"],
      hasAccess: false
    },

    // Admin Panels
    {
      title: "MIDESI Admin Panel",
      desc: "Comprehensive admin dashboard for managing vendors, orders, and analytics with real-time data visualization using React and Material-UI.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: null,
      category: "admin",
      tags: ["React.js", "Material-UI", "Firebase", "Vendor", "Orders", "Chart.js"],
      techStack: ["react", "firebase"],
      featured: true,
      hasAccess: false
    },
    {
      title: "Sadhana Cart Admin",
      desc: "Admin interface for managing e-commerce operations including order processing, vendor management, and real-time analytics.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: null,
      category: "admin",
      tags: ["React.js", "Firebase", "Real-time", "Vendor", "Orders"],
      techStack: ["react", "firebase"],
      hasAccess: false
    },
    {
      title: "Namma Savaari Admin",
      desc: "Transportation service management system with booking management, driver allocation, and real-time tracking dashboard.",
      img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "https://admin-panel-web-taupe.vercel.app/",
      category: "admin",
      tags: ["React.js", "Firebase", "Booking"],
      techStack: ["react", "firebase"],
      featured: true,
      hasAccess: true
    },
    {
      title: "L Mart Admin Panel",
      desc: "Inventory and order management system for supermarket operations with vendor management and stock tracking features.",
      img: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: null,
      category: "admin",
      tags: ["React.js", "Firebase", "Inventory", "Vendor", "Orders"],
      techStack: ["react", "firebase"],
      hasAccess: false
    },
    {
      title: "Vistaraa Admin",
      desc: "Travel booking management system with flight booking, customer support, and analytics dashboard for travel agencies.",
      img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: null,
      category: "admin",
      tags: ["React.js", "Firebase Auth", "Booking", "Chart.js", "Vendor", "Orders"],
      techStack: ["react", "firebase"],
      hasAccess: false
    },

    // Seller Panels
    {
      title: "Sadhana Cart Seller",
      desc: "Seller dashboard for managing product listings, order fulfillment, and sales analytics with performance tracking.",
      img: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: null,
      category: "seller",
      tags: ["React.js", "Firebase", "Analytics", "Vendor", "Orders"],
      techStack: ["react", "firebase"],
      featured: true,
      hasAccess: false
    },
    {
      title: "L Mart Seller Panel",
      desc: "Vendor portal for product management, order processing, and inventory control for supermarket sellers.",
      img: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: null,
      category: "seller",
      tags: ["React.js", "Firebase", "Vendor", "Orders"],
      techStack: ["react", "firebase"],
      hasAccess: false
    },

    // Websites
    {
      title: "E-track Website",
      desc: "Logistics and package tracking platform with real-time updates, shipment tracking, and automated notifications.",
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "https://innomatrics-tech-etrack.vercel.app/",
      category: "website",
      tags: ["React.js", "Node.js", "Real-time", "Zoho mail"],
      techStack: ["react", "node"],
      featured: true,
      hasAccess: false
    },
    {
      title: "Interiors Website",
      desc: "Portfolio website for interior design company showcasing projects, services, and client gallery with responsive design.",
      img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "https://interiors-sigma.vercel.app/",
      category: "website",
      tags: ["React.js", "Gallery", "Portfolio"],
      techStack: ["react"],
      hasAccess: true
    },
    {
      title: "Universal Website",
      desc: "Corporate website with services showcase, contact management, and lead generation system for business clients.",
      img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "https://universal-pearl.vercel.app/",
      category: "website",
      tags: ["React.js", "Node.js", "Contact"],
      techStack: ["react", "node"],
      hasAccess: true
    },
    {
      title: "LMS Website",
      desc: "Learning Management System with course management, student enrollment, and progress tracking for educational institutions.",
      img: lmslogo,
      link: "https://lms-git-main-vishnu143infos-projects.vercel.app/",
      category: "website",
      tags: ["HTML", "CSS", "JS", "LMS", "Courses", "Admin", "Tutor", "Student"],
      techStack: ["js"],
      hasAccess: true
    },

    // Downloadable Projects
    {
      title: "AWS Deployment Project",
      desc: "Complete e-learning platform deployed on AWS infrastructure with S3 storage, CloudFront CDN, and Route 53 DNS management.",
      img: awslogo,
      link: "/Projects/Deploying an Interactive E-learning website on AWS.zip",
      category: "cloud",
      tags: ["AWS", "HTML", "CSS", "JS", "LMS", "Courses", "Admin", "Tutor", "Student", "Deployment", "S3", "CloudFront"],
      techStack: ["cloud", "js", "deployment", "aws"],
      featured: true,
      hasAccess: true,
      isDownload: true
    },
    {
      title: "Text to Image Generator",
      desc: "AI-powered application that converts textual descriptions into high-quality images using TensorFlow and OpenAI models.",
      img: textimagelogo,
      link: "/Projects/TNSDC-GENERATIVE-AI-main.zip",
      category: "ai",
      tags: ["Python", "Tensorflow", "AI", "Image Generation", "OpenAI"],
      techStack: ["ai", "image generation", "openai"],
      featured: true,
      hasAccess: true,
      isDownload: true
    },
    {
      title: "Public Transportation Analysis",
      desc: "Data analytics project analyzing public transportation patterns using Python, Pandas, and data visualization libraries.",
      img: ptalogo,
      link: "/Projects/PUBLIC-TRANSPORTATION-ANALYSIS-main.zip",
      category: "analytics",
      tags: ["Data Analytics", "Visualization", "Python", "Pandas"],
      techStack: ["python", "data analytics", "visualization"],
      featured: true,
      hasAccess: true,
      isDownload: true
    },
    {
      title: "Mini Projects Collection",
      desc: "Collection of beginner to intermediate web development projects including To-Do List, Form Validation, and UI components.",
      img: miniProjectsLogo,
      link: "/Projects/Mini Projects.zip",
      category: "website",
      tags: ["React.js", "JavaScript", "HTML/CSS", "Beginner Projects"],
      techStack: ["react", "js"],
      hasAccess: true,
      isDownload: true
    },
    {
      title: "Portfolio Website",
      desc: "Modern portfolio website with animations, project showcase, and responsive design built with React and Tailwind CSS.",
      img: portfoliologo,
      link: "/Projects/Portfolio.zip",
      category: "website",
      tags: ["React.js", "Animations", "Portfolio", "Tailwind CSS"],
      techStack: ["react"],
      hasAccess: true,
      isDownload: true
    },
  ];

  const categories = [
    { id: "all", name: "All Projects", count: projects.length },
    { id: "ecommerce", name: "E-commerce", count: projects.filter(p => p.category === "ecommerce").length },
    { id: "admin", name: "Admin Panels", count: projects.filter(p => p.category === "admin").length },
    { id: "seller", name: "Seller Panels", count: projects.filter(p => p.category === "seller").length },
    { id: "website", name: "Websites", count: projects.filter(p => p.category === "website").length },
    { id: "download", name: "Downloadable", count: projects.filter(p => p.isDownload).length },
    { id: "featured", name: "Featured", count: projects.filter(p => p.featured).length },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : activeFilter === "featured"
    ? projects.filter(project => project.featured)
    : activeFilter === "download"
    ? projects.filter(project => project.isDownload)
    : projects.filter(project => project.category === activeFilter);

  const projectsToShow = filteredProjects.slice(0, visibleProjects);
  const hasMoreProjects = visibleProjects < filteredProjects.length;

  const getTechIcon = (tech) => {
    switch(tech) {
      case 'react': return <FaReact className="text-cyan-400" />;
      case 'node': return <FaNodeJs className="text-green-500" />;
      case 'firebase': return <FaFire className="text-orange-500" />;
      default: return <FaCode className="text-gray-400" />;
    }
  };

  const handleDownload = (url, filename) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename || url.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const loadMoreProjects = () => {
    setVisibleProjects(prev => prev + 6);
  };

  return (
    <section id="projects" className="relative py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl opacity-30"></div>
              <div className="relative bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-2xl">
                <FaCode className="text-white text-3xl" />
              </div>
            </div>
            <h2 className="text-4xl md:text-6xl font-black">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient">
                My Projects
              </span>
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Building modern web applications with <span className="font-bold text-cyan-300">React.js</span>, 
            {" "}<span className="font-bold text-green-400">Node.js</span>, and{" "}
            <span className="font-bold text-orange-400">Firebase</span>
          </p>
          
          {/* Tech Stack Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-cyan-500/30">
              <FaReact className="text-cyan-400 text-xl" />
              <span className="text-gray-200 font-medium">React.js</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-green-500/30">
              <FaNodeJs className="text-green-400 text-xl" />
              <span className="text-gray-200 font-medium">Node.js</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-orange-500/30">
              <FaFire className="text-orange-400 text-xl" />
              <span className="text-gray-200 font-medium">Firebase</span>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveFilter(category.id);
                setVisibleProjects(6);
              }}
              className="group relative"
            >
              <div className={`absolute -inset-0.5 rounded-full blur transition-all duration-300 ${
                activeFilter === category.id 
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 opacity-100' 
                  : 'bg-gradient-to-r from-gray-700 to-gray-800 opacity-0 group-hover:opacity-50'
              }`}></div>
              <div className={`relative flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? "bg-gray-900 text-white shadow-xl"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-800/70 hover:text-white"
              }`}>
                {category.name}
                <span className={`px-2 py-1 text-xs rounded-full ${
                  activeFilter === category.id 
                    ? 'bg-cyan-500/20 text-cyan-300' 
                    : 'bg-gray-700/50 text-gray-400'
                }`}>
                  {category.count}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Projects Grid - Fixed Height Cards */}
        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsToShow.map((proj, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Card Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 rounded-2xl blur-xl transition-all duration-500 ${
                hoveredProject === index ? 'opacity-100' : 'opacity-0'
              }`}></div>
              
              {/* Main Card - Fixed Height */}
              <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/70 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 group-hover:scale-[1.02] flex flex-col h-full">
                
                {/* Image Section - Fixed Height */}
                <div className="relative h-48 overflow-hidden">
                  <LazyImage
                    src={proj.img}
                    alt={proj.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                  
                  {/* Featured Badge */}
                  {proj.featured && (
                    <div className="absolute top-4 left-4 flex items-center gap-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-yellow-500/30">
                      <FaStar className="text-yellow-400 text-xs" />
                      <span className="text-yellow-300 text-xs font-medium">Featured</span>
                    </div>
                  )}
                  
                  {/* Tech Stack Icons */}
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    {proj.techStack.map((tech, techIndex) => (
                      <div 
                        key={techIndex} 
                        className="bg-gray-900/80 backdrop-blur-sm p-2 rounded-lg border border-white/10"
                      >
                        {getTechIcon(tech)}
                      </div>
                    ))}
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-gray-900/80 backdrop-blur-sm text-gray-300 text-xs font-medium px-3 py-1.5 rounded-full border border-white/10">
                      {proj.category}
                    </span>
                  </div>
                </div>

                {/* Content Section - Flexible Height */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-5 line-clamp-3 flex-1">
                    {proj.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="px-3 py-1.5 bg-gray-800/50 text-gray-300 text-xs font-medium rounded-lg border border-white/5 hover:border-cyan-500/30 transition-all duration-300 hover:scale-105"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Button - Fixed at Bottom */}
                  <div className="mt-auto">
                    {proj.isDownload ? (
                      // Download Button
                      <button
                        onClick={() => handleDownload(proj.link, proj.title.replace(/\s+/g, '_') + '.zip')}
                        className="group/btn relative w-full"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                        <div className="relative flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-medium rounded-lg border border-white/10 group-hover/btn:border-emerald-500/50 transition-all duration-300">
                          <FaDownload className="text-emerald-400" />
                          <span>Download Files</span>
                        </div>
                      </button>
                    ) : proj.link ? (
                      // Live Project Button
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn relative w-full block"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                        <div className="relative flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-medium rounded-lg border border-white/10 group-hover/btn:border-cyan-500/50 transition-all duration-300">
                          <FaExternalLinkAlt className="text-cyan-400" />
                          <span>View Project</span>
                        </div>
                      </a>
                    ) : proj.hasAccess === false ? (
                      // Private Project Button
                      <div className="group/btn relative w-full cursor-not-allowed">
                        <div className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-800/50 text-gray-500 font-medium rounded-lg border border-gray-700/50">
                          <FaLock className="text-gray-500" />
                          <span>Private Project</span>
                        </div>
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-gray-300 text-sm px-3 py-2 rounded-lg border border-gray-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                          Due to privacy reasons
                        </div>
                      </div>
                    ) : (
                      // No Link Available
                      <button className="group/btn relative w-full cursor-not-allowed">
                        <div className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-800/50 text-gray-500 font-medium rounded-lg border border-gray-700/50">
                          <FaEye className="text-gray-500" />
                          <span>View Project</span>
                        </div>
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-gray-300 text-sm px-3 py-2 rounded-lg border border-gray-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                          Project link unavailable
                        </div>
                      </button>
                    )}
                  </div>
                </div>

                {/* Hover Line Effect */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${
                  proj.isDownload 
                    ? 'bg-gradient-to-r from-emerald-500 to-green-500' 
                    : 'bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500'
                }`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMoreProjects && (
          <div className="text-center mt-12">
           <button
  onClick={loadMoreProjects}
  className="group relative px-8 py-4 overflow-hidden"
>
  {/* Animated background particles */}
  <div className="absolute inset-0">
    <div className="absolute top-0 -left-4 w-20 h-20 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
    <div className="absolute top-0 -right-4 w-20 h-20 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
  </div>
  
  <div className="relative flex items-center gap-3 px-10 py-4 bg-gray-900/90 backdrop-blur-sm text-white font-semibold rounded-2xl border border-white/10 group-hover:border-cyan-400/40 transition-all duration-300 shadow-2xl group-hover:shadow-cyan-500/30">
    <div className="relative">
      <span className="relative z-10">Load More Projects</span>
      <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-500"></div>
    </div>
    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white text-sm font-bold shadow-lg">
      {filteredProjects.length - visibleProjects}
    </span>
  </div>
</button>


          </div>
        )}

        {/* Download Notice */}
        <div className="mt-12 p-6 bg-gradient-to-r from-emerald-500/10 to-green-500/10 backdrop-blur-sm rounded-2xl border border-emerald-500/20">
          <div className="flex items-start gap-4">
            <div className="bg-gradient-to-r from-emerald-500/20 to-green-500/20 p-3 rounded-xl">
              <FaDownload className="text-emerald-400 text-xl" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-2">Project Files Available</h4>
              <p className="text-gray-300 mb-3">
                Complete source code files are available for download. These include React.js applications, Firebase configurations, and project documentation.
              </p>
              <div className="flex flex-wrap gap-2">
                {projects
                  .filter(p => p.isDownload)
                  .map((proj, index) => (
                    <span key={index} className="px-3 py-1.5 bg-emerald-500/20 text-emerald-300 text-sm font-medium rounded-full border border-emerald-500/30">
                      {proj.title}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* Privacy Notice */}
        <div className="mt-6 p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl border border-purple-500/20">
          <div className="flex items-start gap-4">
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-3 rounded-xl">
              <FaLock className="text-purple-400 text-xl" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-2">Privacy Notice</h4>
              <p className="text-gray-300">
                Some projects are marked as private due to client confidentiality agreements and privacy policies. 
                These projects showcase real-world applications I've built but cannot be publicly accessed. 
                I can discuss the technical details and my contributions during interviews.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                value: projects.length, 
                label: "Total Projects", 
                icon: <FaCode className="text-2xl" />,
                gradient: "from-cyan-500 to-blue-500"
              },
              { 
                value: projects.filter(p => p.link && !p.isDownload).length, 
                label: "Live Projects", 
                icon: <FaExternalLinkAlt className="text-2xl" />,
                gradient: "from-green-500 to-emerald-500"
              },
              { 
                value: projects.filter(p => p.isDownload).length, 
                label: "Downloadable", 
                icon: <FaDownload className="text-2xl" />,
                gradient: "from-emerald-500 to-green-500"
              },
              { 
                value: projects.filter(p => !p.link && !p.isDownload).length, 
                label: "Private Projects", 
                icon: <FaLock className="text-2xl" />,
                gradient: "from-purple-500 to-pink-500"
              },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-700 to-gray-800 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.gradient} mb-4`}>
                    {stat.icon}
                  </div>
                  <div className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add animations */}
      <style jsx>{`
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
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float 4s infinite ease-in-out;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
        
        .animate-pulse {
          animation: pulse 2s infinite ease-in-out;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @keyframes blob {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-20px) scale(1.1); }
}
.animate-blob {
  animation: blob 7s infinite;
}
.animation-delay-2000 {
  animation-delay: 2s;
}
      `}</style>
    </section>
  );
}