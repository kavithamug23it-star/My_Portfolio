import "./Skills.css";

function Skills() {
  const frontend = ["HTML5", "CSS3", "JavaScript", "React"];
  const backend = ["Node.js", "Express.js", "MongoDB", "REST API"];
  const tools = ["Figma", "Canva", "Git", "GitHub", "VS Code"];

  return (
    <section id="skills" className="skills">

      <div className="skills-container">

        <h4>MY SKILLS</h4>

        <h2>Technical Skills</h2>

        <div className="skills-grid">

          <div className="skill-card">
            <h3>Frontend</h3>

            <div className="skill-list">
              {frontend.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-card">
            <h3>Backend</h3>

            <div className="skill-list">
              {backend.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-card">
            <h3>Tools</h3>

            <div className="skill-list">
              {tools.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;