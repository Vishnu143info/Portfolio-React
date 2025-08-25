export default function Resume() {
  return (
    <section id="resume" className="py-5 bg-light" data-aos="fade-up">
      <div className="container text-center mb-5">
        <h2 className="fw-bold text-primary">Resume</h2>
        <p className="text-muted">Education & Experience</p>
      </div>

      <div className="container d-flex justify-content-center">
        <div className="col-lg-8">
          {/* Education */}
          <h4 className="text-danger mb-3 text-center">🎓 Education</h4>
          <div className="list-group shadow-sm mb-5">
            <div className="list-group-item text-start">
              <h6 className="fw-bold mb-1">B.E. Computer Science & Engineering</h6>
              <small className="text-muted">
                Government College of Engineering, Dharmapuri (2022–2025)
              </small>
            </div>
            <div className="list-group-item text-start">
              <h6 className="fw-bold mb-1">Diploma in CSE</h6>
              <small className="text-muted">
                RVS Polytechnic College, Coimbatore (2019–2022)
              </small>
            </div>
            <div className="list-group-item text-start">
              <h6 className="fw-bold mb-1">SSLC</h6>
              <small className="text-muted">
                Prasanna Matric School, Tuticorin (2019)
              </small>
            </div>
          </div>

          {/* Experience */}
          <h4 className="text-danger mb-3 text-center">💼 Experience</h4>
          <div className="list-group shadow-sm">
            <div className="list-group-item text-start">
              <h6 className="fw-bold mb-1">Frontend Developer Intern</h6>
              <small className="text-muted">Smartcliff (2024)</small>
              <p className="small mb-0 mt-2 text-muted">
                Worked on front-end development using HTML, CSS, and JavaScript. Focused on fixing bugs and improving user experience.
              </p>
            </div>
            <div className="list-group-item text-start">
              <h6 className="fw-bold mb-1">MERN Stack Training</h6>
              <small className="text-muted">JSpiders (2025)</small>
              <p className="small mb-0 mt-2 text-muted">
                Currently pursuing MERN Stack Developer training, gaining practical experience in MongoDB, Express, React, and Node.js.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
