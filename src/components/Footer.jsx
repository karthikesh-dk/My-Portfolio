import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaArrowUp
} from "react-icons/fa";

function Footer() {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (

    <footer className="footer">

      <div className="footer-top">

        <p className="footer-tag">
          THANK YOU FOR VISITING
        </p>

        <h2>
          Good design is invisible.
          <br />
          Great engineering makes it possible.
        </h2>

      </div>

      <div className="footer-middle">

        <div className="footer-brand">

          <h1>DK.</h1>

          <p>
            MERN Stack Developer
            <br />
            Bengaluru, India
          </p>

        </div>

        <div className="footer-links">

          <h4>Navigation</h4>

          <a href="#home">Home</a>

          <a href="#about">About</a>

          <a href="#skills">Toolkit</a>

          <a href="#projects">Projects</a>

          <a href="#journey">Story</a>

          <a href="#contact">Contact</a>

        </div>

        <div className="footer-social">

          <h4>Connect</h4>

          <a
            href="https://github.com/karthikesh-dk"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/d-k-karthikesh-4172bb252"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
            LinkedIn
          </a>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 D K Karthikesh.
          Crafted with React.
        </p>

        <button
          onClick={scrollTop}
        >
          <FaArrowUp />
        </button>

      </div>

    </footer>

  );

}

export default Footer;