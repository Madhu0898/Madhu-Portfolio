// src/components/Skills.js
import "../styles/Skills.css";

const Skills = () => {
  const skills = [
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "React",
    "Redux",
    "Context API",
    "Tailwind CSS",
    "SCSS",
    "Material UI",
    "RESTful APIs",
    "JWT",
    "Jest",
    "React Testing Library",
    "Git/GitHub",
    "Jira",
    "Agile/Scrum",
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div className="skill-item" key={i}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
