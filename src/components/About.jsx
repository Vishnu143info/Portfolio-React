import { useState } from "react";
import ProfileImg from "../assets/Profile.jpg"; 

export default function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      id="about"
      className="container py-5 d-flex flex-column flex-md-row align-items-center gap-5"
    >
      {/* Left */}
      <div
        className="flex-fill text-center text-md-start"
        data-aos="fade-right"
      >
        <p className="text-danger fw-semibold fs-5">👋 Hi, I'm</p>
        <h2 className="display-4 fw-bold gradient-text mb-3">
          Vishnu Prasath
        </h2>

        <div className="lead">
          I'm a motivated and detail-oriented web developer skilled in{" "}
          <strong>HTML, CSS, JavaScript, React.js, and SQL</strong>, with a
          strong interest in building responsive and user-friendly web
          applications.
          <br />
          <br />
          Currently growing as a{" "}
          <strong className="text-danger">MERN Stack Developer</strong>,
          gaining hands-on experience in MongoDB, Express.js, React.js, Node.js,
          REST APIs, backend development, and database management.
          <br />
          <br />
          Expanding into <strong  className="text-danger">AI/ML technologies</strong>, focusing on
          Large Language Models (LLMs), Generative AI, Deep Learning, Agent AI,
          Prompt Engineering, and cloud platforms like AWS and Azure.
          <br />
          <br />
          <strong>Skills:</strong> HTML5, CSS3, JavaScript, React.js, Bootstrap,
          UI/UX Design, SQL, AI/ML (basics), Agent AI, AWS, Prompt Engineering,
          Power BI.
        </div>

        {/* Buttons */}
        <div className="d-flex flex-wrap gap-3 mt-4 justify-content-center justify-content-md-start">
          <a
            href="/Resume/A.VISHNU.PRASATH.pdf"
            className="btn btn-danger px-4 fw-semibold shadow-sm"
          >
            📄 Download Resume
          </a>
          <button
            className="btn btn-outline-danger px-4 fw-semibold shadow-sm"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "▲ View Less" : "▼ View More"}
          </button>
        </div>

        {/* Extra Info */}
        {showMore && (
          <div
            className="mt-4 p-4 bg-white border rounded shadow-lg small"
            data-aos="fade-up"
          >
            <h5 className="text-primary fw-bold">📫 Contact</h5>
            <p>
              <strong>Email:</strong>{" "}
              vishnuprasathappanasamy@gmail.com
            </p>
            <p>
              <strong>Phone:</strong> +91 93445 98906
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/vishnu-prasath-a-vishnu"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/vishnu-prasath-a-vishnu
              </a>
            </p>
          </div>
        )}
      </div>

      {/* Right - Profile Image */}
      <div
        className="flex-fill text-center"
        data-aos="fade-left"
      >
        <div className="position-relative d-inline-block">
          <img
            src={ProfileImg} 
            alt="Profile"
            className="img-fluid rounded-circle shadow-lg border border-3 border-danger"
            style={{ maxWidth: "420px", transition: "0.3s" }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
          <div className="position-absolute bottom-0 start-50 translate-middle-x bg-danger text-white px-3 py-1 rounded-pill shadow-sm">
            🚀 MERN & AI Enthusiast
          </div>
        </div>
      </div>
    </section>
  );
}
