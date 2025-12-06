import { Award, Star, Briefcase, Heart, Users, Trophy, Target, UsersIcon, Medal, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export default function Achievements() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % achievements.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const achievements = [
 {
  icon: <Trophy className="text-white" size={28} />,
  gradient: "linear-gradient(135deg, #ec4899 0%, #ef4444 50%, #f97316 100%)",
  glow: "rgba(236, 72, 153, 0.3)",
  title: "Leadership Excellence",
  desc: "Served as Placement Representative for the CSE department, facilitating communication between students and recruiters while ensuring smooth coordination during placement drives.",
  stats: "50+ Students Guided | 10+ Companies Engaged | 95% Query Resolution",
  badges: ["Leadership", "Coordination", "Communication", "Industry Interaction"],
  year: "2023–2025"
}
,
    {
      icon: <Star className="text-white" size={28} />,
      gradient: "linear-gradient(135deg, #facc15 0%, #f97316 50%, #ea580c 100%)",
      glow: "rgba(250, 204, 21, 0.3)",
      title: "Academic Distinction",
      desc: "Consistently maintained academic excellence with CGPA of 8 in B.E. Computer Science and secured 90% in Diploma (Computer Engineering), ranking among top 10% of the department.",
      stats: "CGPA: 8 | Diploma: 90%",
      badges: ["Academic Excellence", "Consistency", "Top Performer"],
      year: "2020-2024"
    },
    {
      icon: <Briefcase className="text-white" size={28} />,
      gradient: "linear-gradient(135deg, #6366f1 0%, #3b82f6 50%, #0ea5e9 100%)",
      glow: "rgba(99, 102, 241, 0.3)",
      title: "Internship Excellence",
      desc: "Recognized for outstanding contributions at Smartcliff internship, implementing UI/UX improvements that enhanced user engagement by 40% and resolving critical bugs improving system stability.",
      stats: "40% UX Improvement | 100% Bug Resolution",
      badges: ["Professional", "Problem Solving", "Innovation"],
      year: "2024"
    },
    {
      icon: <Heart className="text-white" size={28} />,
      gradient: "linear-gradient(135deg, #ef4444 0%, #ec4899 50%, #d946ef 100%)",
      glow: "rgba(239, 68, 68, 0.3)",
      title: "Community Leadership",
      desc: "Successfully organized 15+ community awareness events reaching 40+ participants, focusing on social issues, environmental awareness, and public engagement initiatives.",
      stats: "5+ Events | 40+ Participants",
      badges: ["Volunteering", "Organization", "Social Impact"],
      year: "2022-2025"
    },
    {
      icon: <UsersIcon className="text-white" size={28} />,
      gradient: "linear-gradient(135deg, #10b981 0%, #22c55e 50%, #16a34a 100%)",
      glow: "rgba(16, 185, 129, 0.3)",
      title: "Department Leadership",
      desc: "Served as Department Secretary for CSE during diploma, coordinating 20+ departmental events, managing communications across 40+ students, and supporting faculty in administrative tasks.",
      stats: "20+ Events | 40+ Students",
      badges: ["Coordination", "Communication", "Administration"],
      year: "2021-2022"
    },
    {
      icon: <Target className="text-white" size={28} />,
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 50%, #6d28d9 100%)",
      glow: "rgba(139, 92, 246, 0.3)",
      title: "Project Leadership",
      desc: "Led multiple full-stack development projects from conception to deployment, coordinating teams of 3-5 members and delivering solutions ahead of deadlines.",
      stats: "10+ Projects | 100% On-Time Delivery",
      badges: ["Project Management", "Team Leadership", "Delivery"],
      year: "Ongoing"
    }
  ];

  return (
    <section id="achievements" className="relative py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-60 h-60 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-yellow-500 to-orange-500 p-4 rounded-2xl">
                <Trophy className="text-white text-3xl" />
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-6xl font-black">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 animate-gradient">
                  Achievements
                </span>
              </h2>
              <p className="text-gray-300 text-lg mt-2">Milestones & Recognitions</p>
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Celebrating the journey of growth, leadership, and excellence that has shaped my professional path
          </p>
        </div>

        {/* Stats Bar */}
        <div className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "6+", label: "Major Achievements", icon: <Trophy className="text-yellow-400" /> },
              { value: "300+", label: "Students Impacted", icon: <Users className="text-blue-400" /> },
              { value: "15+", label: "Events Organized", icon: <Sparkles className="text-purple-400" /> },
              { value: "10+", label: "Projects Delivered", icon: <Target className="text-green-400" /> },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm p-4 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-gray-800/50 p-2 rounded-lg">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <div 
              key={index}
              className={`relative group transition-all duration-500 transform hover:scale-[1.02] ${
                isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex((prev) => prev)}
            >
              {/* Glow Effect */}
              <div 
                className="absolute -inset-0.5 rounded-3xl blur-xl transition-all duration-500"
                style={{
                  background: item.gradient,
                  opacity: activeIndex === index ? 0.7 : 0.2,
                }}
              ></div>
              
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/70 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-full">
                {/* Header with Gradient */}
                <div 
                  className="relative p-6"
                  style={{ background: item.gradient }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-white/20 p-2 rounded-xl backdrop-blur-sm">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs bg-white/20 px-2 py-1 rounded-full text-white">
                            {item.year}
                          </span>
                          <span className="text-xs text-white/80">
                            {item.stats}
                          </span>
                        </div>
                      </div>
                    </div>
                    {index === activeIndex && (
                      <div className="animate-pulse">
                        <Sparkles className="text-white" size={20} />
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.badges.map((badge, badgeIndex) => (
                      <span 
                        key={badgeIndex}
                        className="px-3 py-1.5 bg-white/5 text-gray-300 text-xs font-medium rounded-full border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:text-white"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  {/* Progress/Impact Indicator */}
                  <div className="mt-4 pt-4 border-t border-white/5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Impact Level</span>
                      <div className="flex items-center gap-2">
                        {[...Array(5)].map((_, i) => (
                          <div 
                            key={i}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              i < 3 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' : 'bg-gray-700'
                            }`}
                            style={{
                              transform: activeIndex === index ? `scale(${1 + i * 0.1})` : 'scale(1)',
                              animationDelay: `${i * 100}ms`
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 rounded-full animate-float"
                      style={{
                        background: item.gradient,
                        left: `${20 + i * 20}%`,
                        top: `${30 + i * 10}%`,
                        animationDelay: `${i * 0.5}s`,
                      }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/20 rounded-tl-xl"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/20 rounded-tr-xl"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/20 rounded-bl-xl"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/20 rounded-br-xl"></div>
            </div>
          ))}
        </div>

        {/* Timeline Indicator */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex justify-center items-center gap-4">
            <div className="text-gray-400 text-sm">Timeline Progress</div>
            <div className="flex-1 max-w-md">
              <div className="flex justify-between relative">
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-800 -translate-y-1/2"></div>
                <div className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 -translate-y-1/2" style={{ width: `${(activeIndex + 1) / achievements.length * 100}%` }}></div>
                {achievements.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`relative z-10 w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeIndex 
                        ? 'bg-gradient-to-r from-yellow-500 to-orange-500 scale-125' 
                        : index < activeIndex 
                        ? 'bg-yellow-500/50' 
                        : 'bg-gray-700'
                    }`}
                  >
                    <div className={`absolute inset-0 rounded-full animate-ping ${
                      index === activeIndex ? 'bg-yellow-500/30' : 'hidden'
                    }`}></div>
                  </button>
                ))}
              </div>
            </div>
            <div className="text-gray-400 text-sm">
              {activeIndex + 1} of {achievements.length}
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-16 p-8 bg-gradient-to-r from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-3xl border border-white/10">
          <div className="flex items-center gap-6">
            <div className="hidden md:block">
              <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 p-4 rounded-2xl">
                <Award className="text-yellow-400" size={40} />
              </div>
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-bold text-white mb-3">
                Excellence is not an act, but a habit
              </h4>
              <p className="text-gray-300">
                Each achievement represents a step in my journey of continuous learning and growth. 
                From academic excellence to community leadership, every experience has contributed 
                to developing a versatile skill set and a commitment to making a positive impact.
              </p>
            </div>
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
        
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
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
        
        .animate-gradient {
          animation: gradient 3s infinite ease;
        }
        
        .animate-fade-up {
          animation: fade-up 0.6s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s infinite ease-in-out;
        }
        
        .animate-pulse {
          animation: pulse 2s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}