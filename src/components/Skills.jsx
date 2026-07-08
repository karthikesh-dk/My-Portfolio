import "./Skills.css";

function Skills() {

  const skillGroups = [

    {
      title: "Frontend",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Responsive Design"
      ]
    },

    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "MySQL",
        "REST APIs"
      ]
    },

    {
      title: "Programming",
      skills: [
        "Java",
        "Python",
        "SQL",
        "Data Structures",
        "OOP"
      ]
    },

    {
      title: "Tools",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "Figma"
      ]
    }

  ];

  return (

    <section className="skills" id="skills">

      <div className="skills-header">

        <p className="section-subtitle">
          MY TOOLKIT
        </p>

        <h2 className="section-title">
          Technologies
          <br />
          I enjoy working with.
        </h2>

      </div>

      <div className="skills-wrapper">

        {skillGroups.map((group, index) => (

          <div className="skill-category" key={index}>

            <h3>{group.title}</h3>

            <div className="skill-tags">

              {group.skills.map((skill, i) => (

                <span key={i}>
                  {skill}
                </span>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Skills;