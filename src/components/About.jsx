import "./About.css";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-left">

        <p className="about-small">
          ABOUT ME
        </p>

        <h2>
          Every great product
          begins with
          <span> curiosity.</span>
        </h2>

      </div>

      <div className="about-right">

        <p>
          I'm <strong>D K Karthikesh</strong>, currently pursuing my
          Master of Computer Applications while building modern,
          responsive and scalable web applications.
        </p>

        <p>
          My interests lie in Full Stack Development, UI Design,
          Artificial Intelligence and creating digital experiences
          that feel simple, elegant and meaningful.
        </p>

        <p>
          Every project I build is an opportunity to learn,
          improve and solve a real-world problem through technology.
        </p>

        <div className="about-grid">

          <div className="about-card">

            <h3>01</h3>

            <h4>Problem Solver</h4>

            <p>
              I enjoy solving real-world challenges with clean,
              scalable software.
            </p>

          </div>

          <div className="about-card">

            <h3>02</h3>

            <h4>Continuous Learner</h4>

            <p>
              Exploring modern technologies, AI and cloud platforms
              every day.
            </p>

          </div>

          <div className="about-card">

            <h3>03</h3>

            <h4>Design First</h4>

            <p>
              I believe beautiful user experience is just as important
              as functionality.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;