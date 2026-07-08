import "./Hero.css";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-left">

        <p className="hero-tag">
          Software Engineer • MERN Developer
        </p>

        <h1>
          Building
          <br />
          thoughtful
          <br />
          digital products.
        </h1>

        <p className="hero-text">
          I'm <strong>D K Karthikesh</strong>, an MCA student passionate
          about crafting modern web experiences using React, Node.js,
          Express, MongoDB and Java. I enjoy turning ideas into clean,
          intuitive applications that people love using.
        </p>

        <div className="hero-buttons">

          <a href="#projects" className="primary-btn">
            View Projects
            <FaArrowRight />
          </a>

          <a href="#contact" className="secondary-btn">
            Let's Talk
          </a>

        </div>

        <div className="hero-social">

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

      <div className="hero-right">

        <div className="hero-image">

          <img
            src="/profile.jpg"
            alt="D K Karthikesh"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;