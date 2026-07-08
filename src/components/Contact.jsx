import "./Contact.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-left">

        <p className="section-subtitle">
          LET'S CONNECT
        </p>

        <h2 className="section-title">
          Let's build
          something meaningful.
        </h2>

        <p className="contact-description">
          Whether you have an opportunity, project,
          collaboration or simply want to say hello,
          I'd love to hear from you.
        </p>

        <div className="contact-info">

          <div className="info">

            <FaEnvelope />

            <div>

              <h4>Email</h4>

              <p>dkkarthikesh@gmail.com</p>

            </div>

          </div>

          <div className="info">

            <FaPhoneAlt />

            <div>

              <h4>Phone</h4>

              <p>+91 XXXXX XXXXX</p>

            </div>

          </div>

          <div className="info">

            <FaMapMarkerAlt />

            <div>

              <h4>Location</h4>

              <p>Bengaluru, India</p>

            </div>

          </div>

        </div>

        <div className="contact-social">

          <a
            href="https://github.com/karthikesh-dk"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/d-k-karthikesh-4172bb252"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>

      <div className="contact-right">

        <form>

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            rows="6"
            placeholder="Tell me about your project..."
          ></textarea>

          <button
            className="primary-btn"
            type="submit"
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;