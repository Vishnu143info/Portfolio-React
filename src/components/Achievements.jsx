import { Award, Star, Briefcase, Heart, Users } from "lucide-react";
import "./Achievements.css"; // ✅ custom CSS for animations + gradients

export default function Achievements() {
  const achievements = [
    {
      icon: <Award className="me-2 text-white" size={20} />,
      gradient: "linear-gradient(90deg, #ec4899, #ef4444)", // pink-red
      title: "Leadership",
      desc: "Served as the Placement Representative for the CSE department, bridging communication between students and recruiters, organizing placement drives, and supporting career readiness efforts.",
    },
    {
      icon: <Star className="me-2 text-white" size={20} />,
      gradient: "linear-gradient(90deg, #facc15, #f97316)", // yellow-orange
      title: "Academic Performance",
      desc: "Maintained a CGPA of 7.5 in B.E. and secured 90% in Diploma (Computer Engineering).",
    },
    {
      icon: <Briefcase className="me-2 text-white" size={20} />,
      gradient: "linear-gradient(90deg, #6366f1, #3b82f6)", // indigo-blue
      title: "Internship Excellence",
      desc: "Recognized for proactive development contributions during my internship at Smartcliff, where I focused on UI/UX improvements and bug fixes.",
    },
    {
      icon: <Heart className="me-2 text-white" size={20} />,
      gradient: "linear-gradient(90deg, #ef4444, #ec4899)", // red-pink
      title: "Volunteering",
      desc: "Actively organized community events to promote awareness of social issues and foster public engagement.",
    },
    {
      icon: <Users className="me-2 text-white" size={20} />,
      gradient: "linear-gradient(90deg, #10b981, #22c55e)", // green-emerald
      title: "Event Coordinator",
      desc: "Served as Department Secretary for the CSE department during my diploma, coordinating events, managing communications, and supporting faculty.",
    },
  ];

  return (
    <section id="achievements" className="py-5 bg-light">
      <div className="container text-center mb-4">
        <h2 className="fw-bold text-primary animate-fade-in">Achievements</h2>
      </div>

      <div className="container">
        <div className="row g-4">
          {achievements.map((item, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div
                className="card shadow-sm border-0 h-100 gradient-border animate-card"
                style={{ "--border-gradient": item.gradient }}
                data-aos="zoom-in"
              >
                <div
                  className="card-header text-white d-flex align-items-center"
                  style={{ backgroundImage: item.gradient }}
                >
                  {item.icon}
                  <h5 className="mb-0">{item.title}</h5>
                </div>
                <div className="card-body">
                  <p className="card-text text-muted">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
