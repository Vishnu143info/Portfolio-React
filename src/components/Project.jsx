
import lmslogo from "../assets/lmslogo.jpg";
import portfoliologo from "../assets/Portfoliologo.png";
import awslogo from "../assets/awslogo.webp";
import textimagelogo from "../assets/text-imagelogo.jpg";
import ptalogo from "../assets/ptalogo.png";
import miniProjectsLogo from "../assets/WebDevelopmentProjects2.png";



export default function Projects() {
  const projects = [
    {
      title: "LMS Website",
      desc: "Learning management platform built using HTML, CSS, JS, Bootstrap.",
      img: lmslogo, 
      link :"/Projects/LMS 1.zip", 
     
    },
    {
      title: "Portfolio Website",
      desc: "Responsive portfolio using Tailwind CSS and animations.",
      img: portfoliologo,
      link: "/Projects/Portfolio.zip",
    },
    {
      title: "AWS Deployment",
      desc: "Interactive e-learning platform hosted using AWS S3, CloudFront, Route 53.",
      img: awslogo,
      link: "/Projects/Deploying an Intercative E-learnig website on AWS.zip",
    },
    {
      title: "Text to Image Generator",
      desc: "Developed a Text to Image Generator (TNSDC) converting text prompts into AI-generated images.",
      img: textimagelogo,
      link: "/Projects/TNSDC-GENERATIVE-AI-main.zip",
    },
    {
      title: "Public Transportation Analysis",
      desc: "Naan Mudhalvan project using data analytics & visualization to improve transit systems.",
      img: ptalogo,
      link: "/Projects/PUBLIC-TRANSPORTATION-ANALYSIS-main.zip",
    },
    {
      title: "Mini Projects",
      desc: "Built a To-Do List, Form Validation, and Dark/Light Mode using HTML, CSS, JavaScript.",
      img: miniProjectsLogo,
      link: "/Projects/Mini Projects.zip",
    },
  ];

  return (
    <section id="projects" className="py-5 bg-white" data-aos="fade-up">
      <div className="container text-center mb-4">
        <h2 className="fw-bold text-primary">Projects</h2>
        <p className="text-muted">Some of my work</p>
      </div>

      <div className="container">
        <div className="row g-4">
          {projects.map((proj, index) => (
            <div key={index} className="col-md-6 col-lg-4" data-aos="zoom-in">
              <div className="card h-100 shadow-sm border-0 hover-shadow">
                <div className="overflow-hidden rounded-top">
                  <img
                    src={proj.img} 
                    className="card-img-top project-img"
                    alt={proj.title}
                    style={{
                      height: "220px",
                      objectFit: "cover",
                      transition: "0.4s",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.transform = "scale(1.05)")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{proj.title}</h5>
                  <p className="card-text text-muted small">{proj.desc}</p>
                  <div className="mt-auto">
                    <a
                      href={proj.link}
                      className="btn btn-danger btn-sm px-3"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
