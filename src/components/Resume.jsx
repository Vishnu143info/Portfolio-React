import { useState } from "react";
import {
  FaGraduationCap,
  FaBriefcase,
  FaCertificate,
  FaDownload,
  FaAward,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaLaptopCode,
  FaRocket,
  FaCode,
  FaCloud,
  FaRobot,
  FaUniversity,
  FaSchool,
} from "react-icons/fa";
import { SiReact } from "react-icons/si";

// FIX 1: Map skill colors to full, non-dynamic Tailwind class names
const skillColors = {
  cyan: { text: "text-cyan-400", bg: "bg-cyan-500", hoverBorder: "hover:border-cyan-500/50" },
  green: { text: "text-green-400", bg: "bg-green-500", hoverBorder: "hover:border-green-500/50" },
  orange: { text: "text-orange-400", bg: "bg-orange-500", hoverBorder: "hover:border-orange-500/50" },
  purple: { text: "text-purple-400", bg: "bg-purple-500", hoverBorder: "hover:border-purple-500/50" },
  skyblue: { text: "text-sky-400", bg: "bg-sky-500", hoverBorder: "hover:border-sky-500/50" },
};

export default function Resume() {
  const [activeTab, setActiveTab] = useState("education");

  const educationData = [
    {
      id: 1,
      degree: "B.E. Computer Science & Engineering",
      institution: "Government College of Engineering, Dharmapuri",
      period: "2022 – 2025",
      score: "8.2 CGPA",
      icon: <FaUniversity className="text-blue-500 text-2xl" />,
      color: "from-blue-500 to-cyan-500",
      highlights: [
        "Core Subjects: Data Structures, Algorithms, DBMS, OOPS",
        "Final Year Project: Deploying an Interactive LMS Website on AWS",
        "Acted as a Placement Representative"
      ],
    },
    {
      id: 2,
      degree: "Diploma in Computer Science & Engineering",
      institution: "RVS Polytechnic College, Coimbatore",
      period: "2019 – 2022",
      score: "90%",
      icon: <FaSchool className="text-purple-500 text-2xl" />,
      color: "from-purple-500 to-pink-500",
      highlights: [
        "Specialization: Web Technologies & Networking",
        "Project: Patient Monitoring System",
        
      ],
    },
    {
      id: 3,
      degree: "SSLC (10th Standard)",
      institution: "Prasanna Matric Higher Secondary School, Tuticorin",
      period: "2019",
      score: "78%",
      icon: <FaGraduationCap className="text-green-500 text-2xl" />,
      color: "from-green-500 to-emerald-500",
      highlights: [
        "Won First Prize Twice in Dance Competitions",
        "Science Exhibition Participant",
       
      ],
    },
  ];

  const experienceData = [
    {
      id: 1,
      role: "Full Stack Developer",
      company: "Innomatrics Technologies",
      period: "Sep 2025 – Present",
      location: "On-site",
      type: "Full Time",
      icon: <FaRocket className="text-orange-500 text-2xl" />,
      color: "from-orange-500 to-red-500",
      responsibilities: [
        "Developing full-stack applications using React, Node.js, Firebase",
        "Implementing RESTful APIs and microservices architecture",
        "Integrating Firebase for authentication and real-time database",
        "Building responsive UI with Tailwind CSS & Bootstrap",
        "Deploying applications on AWS & Vercel",
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "Firebase", "AWS", "Express.js"],
    },
    {
      id: 2,
      role: "Frontend Developer Intern",
      company: "Smartcliff",
      period: "Jul 2024 – Aug 2024",
      location: "On-site",
      type: "Internship",
      icon: <FaLaptopCode className="text-cyan-500 text-2xl" />,
      color: "from-cyan-500 to-blue-500",
      responsibilities: [
        "Developed responsive web applications using HTML/CSS/JS",
        "Fixed UI bugs and improved user experience",
        "Implemented responsive designs for mobile-first approach",
        "Collaborated with design team for pixel-perfect implementations",
        "Optimized website performance and loading speed",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript",  "Bootstrap", "Figma"],
    },
    {
      id: 3,
      role: "MERN Stack Training",
      company: "JSpiders",
      period: "Jan 2025 – Jun 2025",
      location: "Bangalore",
      type: "Professional Training",
      icon: <FaCertificate className="text-purple-500 text-2xl" />,
      color: "from-purple-500 to-indigo-500",
      responsibilities: [
        "Mastered full MERN stack development lifecycle",
        "Learned backend development with Node.js & Express",
        "Database design and management with MongoDB",
        "API development and testing with Postman",
      ],
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "REST APIs", "Postman"],
    },
  ];

  const certifications = [
    {
      name: "MERN Stack Development",
      issuer: "JSpiders",
      date: "2025",
      icon: <SiReact className="text-cyan-400" />,
    },
    {
      name: "Frontend Development",
      issuer: "Smartcliff",
      date: "2024",
      icon: <FaCode className="text-blue-400" />,
    },
  ];

  return (
    <section
      id="resume"
      className="relative py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-blue-950 min-h-screen w-full overflow-hidden"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animation-delay-2000 animate-blob"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-3xl animation-delay-4000 animate-blob"></div>
      </div>

      {/* MAIN FIX: Added a wrapper with max-width constraints */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 w-full">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
              <FaBriefcase className="text-white text-xl" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                Resume
              </span>
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My educational background, professional journey, and acquired skills
          </p>

          {/* Download Button */}
          {/* <div className="mt-8 w-full flex justify-center">
            <a
              href="/Resume/A.VISHNU.PRASATH.pdf"
              download
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-300 max-w-max"
            >
              <FaDownload className="text-xl" />
              Download Full Resume
              <span className="opacity-0 group-hover:opacity-100 transition-opacity">📄</span>
            </a>
          </div> */}
        </div>

        {/* Toggle Navigation - FIXED: Added flex-wrap for mobile */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 w-full">
          <button
            onClick={() => setActiveTab("education")}
            className={`group flex items-center gap-4 px-4 sm:px-8 py-4 rounded-2xl transition-all duration-300 flex-shrink-0 ${
              activeTab === "education"
                ? "bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/50 shadow-lg shadow-cyan-500/20"
                : "bg-gray-800/50 border border-gray-700 hover:border-cyan-500/30"
            }`}
          >
            <div
              className={`p-3 rounded-xl ${
                activeTab === "education"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500"
                  : "bg-gray-700 group-hover:bg-cyan-500/20"
              }`}
            >
              <FaGraduationCap className="text-white text-xl" />
            </div>
            <div className="text-left">
              <h3 className="text-lg font-bold text-white">Education</h3>
              <p className="text-sm text-gray-400">Academic Journey</p>
            </div>
          </button>

          <button
            onClick={() => setActiveTab("experience")}
            className={`group flex items-center gap-4 px-4 sm:px-8 py-4 rounded-2xl transition-all duration-300 flex-shrink-0 ${
              activeTab === "experience"
                ? "bg-gradient-to-r from-orange-600/20 to-red-600/20 border border-orange-500/50 shadow-lg shadow-orange-500/20"
                : "bg-gray-800/50 border border-gray-700 hover:border-orange-500/30"
            }`}
          >
            <div
              className={`p-3 rounded-xl ${
                activeTab === "experience"
                  ? "bg-gradient-to-r from-orange-500 to-red-500"
                  : "bg-gray-700 group-hover:bg-orange-500/20"
              }`}
            >
              <FaBriefcase className="text-white text-xl" />
            </div>
            <div className="text-left">
              <h3 className="text-lg font-bold text-white">Experience</h3>
              <p className="text-sm text-gray-400">Professional Journey</p>
            </div>
          </button>

          <button
            onClick={() => setActiveTab("certifications")}
            className={`group flex items-center gap-4 px-4 sm:px-8 py-4 rounded-2xl transition-all duration-300 flex-shrink-0 ${
              activeTab === "certifications"
                ? "bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/50 shadow-lg shadow-purple-500/20"
                : "bg-gray-800/50 border border-gray-700 hover:border-purple-500/30"
            }`}
          >
            <div
              className={`p-3 rounded-xl ${
                activeTab === "certifications"
                  ? "bg-gradient-to-r from-purple-500 to-pink-500"
                  : "bg-gray-700 group-hover:bg-purple-500/20"
              }`}
            >
              <FaCertificate className="text-white text-xl" />
            </div>
            <div className="text-left">
              <h3 className="text-lg font-bold text-white">Certifications</h3>
              <p className="text-sm text-gray-400">Skills & Achievements</p>
            </div>
          </button>
        </div>

        {/* Content Sections - FIXED: Added width constraints */}
        <div className="w-full max-w-6xl mx-auto">
          {/* Education Content */}
          {activeTab === "education" && (
            <div className="space-y-8 animate-fade-in w-full">
              {educationData.map((edu, index) => (
                <div key={edu.id} className="group relative w-full">
                  <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl w-full overflow-hidden">
                    <div className="flex flex-col md:flex-row gap-6 w-full">
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div className={`bg-gradient-to-r ${edu.color} p-6 rounded-2xl shadow-2xl`}>
                            {edu.icon}
                          </div>
                          <div className="absolute -top-2 -right-2 bg-gradient-to-r from-gray-900 to-gray-800 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg border border-gray-700">
                            {edu.score}
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                          <div className="min-w-0">
                            <h3 className="text-2xl font-bold text-white mb-2 truncate">{edu.degree}</h3>
                            <div className="flex items-center gap-3 text-gray-400 mb-3 flex-wrap">
                              <FaUniversity className="text-cyan-400 flex-shrink-0" />
                              <span className="break-words">{edu.institution}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full mt-2 md:mt-0">
                            <FaCalendarAlt className="text-cyan-400" />
                            <span className="text-white font-medium">{edu.period}</span>
                          </div>
                        </div>
                        <div className="space-y-3 mb-6 text-sky-400">
                          {/* Subheading: Key Highlights (already text-sky-400) */}
                          <h4 className="text-lg font-semibold text-sky-400 flex items-center gap-2">
                            <FaAward className="text-sky  -400" />
                            Key Highlights
                          </h4>
                          <ul className="space-y-2">
                            {edu.highlights.map((highlight, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-300 break-words">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mt-6">
                          <div className="flex justify-between text-sm text-gray-400 mb-2">
                            <span>Course Completion</span>
                            <span>{index === 0 ? "Completed" : "Completed"}</span>
                          </div>
                          <div className="w-full h-2 bg-gray-800/50 rounded-full overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${edu.color} rounded-full transition-all duration-1000`}
                              style={{ width: index === 0 ? "100%" : "100%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Experience Content */}
          {activeTab === "experience" && (
            <div className="space-y-8 animate-fade-in w-full">
              {experienceData.map((exp, index) => (
                <div key={exp.id} className="group relative w-full">
                  <div className="absolute -inset-4 bg-gradient-to-r from-orange-600/10 to-red-600/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl w-full overflow-hidden">
                    <div className="flex flex-col md:flex-row gap-6 w-full">
                      <div className="flex-shrink-0">
                        <div className={`bg-gradient-to-r ${exp.color} p-6 rounded-2xl shadow-2xl`}>
                          {exp.icon}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                          <div className="min-w-0">
                            <h3 className="text-2xl font-bold text-white mb-2 truncate">{exp.role}</h3>
                            <div className="flex flex-wrap items-center gap-3 text-gray-400 mb-3">
                              <div className="flex items-center gap-2">
                                <FaBriefcase className="text-cyan-400 flex-shrink-0" />
                                <span className="font-medium text-white break-words">{exp.company}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <FaMapMarkerAlt className="text-emerald-400 flex-shrink-0" />
                                <span className="break-words">{exp.location}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <FaCalendarAlt className="text-orange-400 flex-shrink-0" />
                                <span className="break-words">{exp.period}</span>
                              </div>
                            </div>
                            <span className="inline-block px-4 py-1 bg-gray-800/50 text-cyan-300 rounded-full text-sm font-medium border border-cyan-500/30">
                              {exp.type}
                            </span>
                          </div>
                        </div>
                        <div className="space-y-4 mb-6 text-purple-400">
                          {/* Subheading: Key Responsibilities (already text-sky-400) */}
                          <h4 className="text-lg font-semibold text-sky-400">Key Responsibilities</h4>
                          <ul className="space-y-3">
                            {exp.responsibilities.map((resp, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-300 break-words">{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                         <div className="text-lg font-semibold text-sky-400 mb-3"> 
                          <h4 >Technologies Used</h4>
                         </div>
                          
                          <div className="flex flex-wrap gap-3">
                            {exp.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-full text-sm border border-gray-700 hover:border-sky-500/50 hover:text-sky-300 transition-all break-words"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Certifications Content */}
          {activeTab === "certifications" && (
            <div className="grid md:grid-cols-2 gap-6 animate-fade-in w-full">
              {certifications.map((cert, index) => (
                <div key={index} className="group relative w-full">
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-xl hover:shadow-2xl transition-all w-full">
                    <div className="flex items-start gap-4 w-full">
                      <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-4 rounded-xl flex-shrink-0">
                        {cert.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xl font-bold text-white mb-2 truncate">{cert.name}</h4>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <div className="text-gray-400">
                            <span className="text-sky-300">{cert.issuer}</span>
                            <span className="mx-2 hidden sm:inline">•</span>
                            <span className="block sm:inline">{cert.date}</span>
                          </div>
                          <span className="text-xs px-3 py-1 bg-green-500/20 text-green-400 rounded-full self-start sm:self-auto">
                            Verified
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Skills Section */}
              <div className="md:col-span-2 mt-8 w-full">
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl w-full overflow-hidden">
                  <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                      {
                        category: "Frontend",
                        skills: ["React.js", "JavaScript", "HTML5/CSS3", "Tailwind CSS"],
                        color: "cyan",
                      },
                      {
                        category: "Backend",
                        skills: ["Node.js", "Express.js", "MongoDB", "Firebase"],
                        color: "green",
                      },
                      { category: "Tools", skills: ["Git/GitHub", "Power BI", "VS Code", "Figma"], color: "orange" },
                      {
                        category: "Cloud/AI",
                        skills: ["AWS", "Propmt Engineering", "AI/ML Basics ", "Agent AI"],
                        color: "purple",
                      },
                    ].map((skillSet, index) => (
                      <div key={index} className="group w-full text-sky-400">
                        {/* 🌟 FIX: Changed skill heading color to text-sky-400 🌟 */}
                        <h4 className={`text-lg font-bold text-sky-400 mb-3`}>
                          {skillSet.category}
                        </h4>
                        <div className="space-y-2">
                          {skillSet.skills.map((skill, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-all w-full"
                            >
                              <div className={`w-2 h-2 rounded-full ${skillColors[skillSet.color].bg} flex-shrink-0`}></div>
                              <span className="text-gray-300 break-words">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Stats */}
        <div className="text-center mt-16 w-full">
          <div className="inline-flex items-center gap-4 bg-gray-800/50 backdrop-blur-sm p-4 rounded-2xl border border-gray-700 max-w-full overflow-hidden">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div>
            <p className="text-gray-300 text-sm sm:text-base break-words">
              Total Experience: <span className="font-bold text-sky-300">3+ Months</span> • Projects:{" "}
              <span className="font-bold text-purple-300">15+</span> • Technologies:{" "}
              <span className="font-bold text-orange-300">20+</span>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1.0s ease-out forwards; 
        }
        
        /* Additional fixes for overflow */
        @media (max-width: 640px) {
          .text-5xl {
            font-size: 2.5rem !important;
          }
          .text-6xl {
            font-size: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}