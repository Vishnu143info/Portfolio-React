export default function Contact() {
  return (
    <section id="contact" className="py-5 bg-light" data-aos="zoom-in">
      <div className="container text-center mb-5">
        <h2 className="fw-bold text-primary">Contact Me</h2>
        <p className="text-muted">Let's work together — feel free to reach out 🚀</p>
      </div>

      <div className="container d-flex justify-content-center">
        <form
          action="https://formsubmit.co/vishnuprasathappanasamy@gmail.com"
          method="POST"
          className="bg-white p-4 p-md-5 rounded shadow-lg col-md-8 col-lg-6 contact-form"
        >
          <input type="hidden" name="_captcha" value="false" />

          {/* Name */}
          <div className="mb-3">
            <input
              type="text"
              name="name"
              className="form-control form-control-lg rounded-pill"
              placeholder="Your Name"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <input
              type="email"
              name="email"
              className="form-control form-control-lg rounded-pill"
              placeholder="Your Email"
              required
            />
          </div>

          {/* Message */}
          <div className="mb-3">
            <textarea
              name="message"
              rows="5"
              className="form-control rounded"
              placeholder="Your Message"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="btn btn-danger btn-lg w-100 rounded-pill shadow-sm send-btn"
          >
            ✉️ Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
