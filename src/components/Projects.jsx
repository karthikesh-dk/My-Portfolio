import "./Projects.css";
import { FaGithub, FaArrowRight } from "react-icons/fa";

function Projects() {

  const projects = [

    {
      title: "Facility Management System",
      year: "2025",
      image: "/projects/facility.png",

      description:
        "A complete MERN Stack application developed for managing complaints, staff, dashboards and issue tracking within an organization.",

      features: [
        "Admin Dashboard",
        "Issue Tracking",
        "Staff Management",
        "Reports"
      ],

      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB"
      ],

      github: "https://github.com/karthikesh-dk",

      live: "#"
    },

    {
      title: "Virtual Mouse",

      year: "2024",

      image: "/projects/mouse.png",

      description:
        "Computer Vision based Virtual Mouse using OpenCV and MediaPipe capable of controlling cursor movements through hand gestures.",

      features: [
        "Gesture Recognition",
        "Hand Tracking",
        "Cursor Control",
        "OpenCV"
      ],

      tech: [
        "Python",
        "OpenCV",
        "MediaPipe"
      ],

      github: "https://github.com/karthikesh-dk",

      live: "#"
    },

    {
      title: "Personal Portfolio",

      year: "2026",

      image: "/projects/portfolio.png",

      description:
        "Editorial style portfolio built using React featuring responsive layouts and elegant user experience.",

      features: [
        "Responsive",
        "Luxury UI",
        "React",
        "Reusable Components"
      ],

      tech: [
        "React",
        "CSS",
        "JavaScript"
      ],

      github: "https://github.com/karthikesh-dk",

      live: "#"
    }

  ];

  return (

    <section className="projects" id="projects">

      <div className="projects-heading">

        <p className="section-subtitle">
          FEATURED WORK
        </p>

        <h2 className="section-title">
          Selected
          <br />
          Projects
        </h2>

      </div>

      {

        projects.map((project,index)=>(

          <div

            className={`project ${index%2!==0?"reverse":""}`}

            key={index}

          >

            <div className="project-image">

              <img
                src={project.image}
                alt={project.title}
              />

            </div>

            <div className="project-content">

              <span className="project-year">
                {project.year}
              </span>

              <h2>
                {project.title}
              </h2>

              <p>

                {project.description}

              </p>

              <ul>

                {

                  project.features.map((item,i)=>(

                    <li key={i}>
                      • {item}
                    </li>

                  ))

                }

              </ul>

              <div className="tech">

                {

                  project.tech.map((item,i)=>(

                    <span key={i}>
                      {item}
                    </span>

                  ))

                }

              </div>

              <div className="project-buttons">

                <a

                  href={project.github}

                  target="_blank"

                  rel="noreferrer"

                  className="primary-btn"

                >

                  <FaGithub />

                  Github

                </a>

                <a

                  href={project.live}

                  className="secondary-btn"

                >

                  View Project

                  <FaArrowRight />

                </a>

              </div>

            </div>

          </div>

        ))

      }

    </section>

  );

}

export default Projects;