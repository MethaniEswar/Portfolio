import { motion } from "framer-motion";

function Skills() {

  const skillGroups = [
    {
      title: "Backend",
      skills: [
        "Java",
        "Spring Boot",
        "Spring MVC",
        "REST API",
        "JPA / Hibernate"
      ]
    },
    {
      title: "Frontend",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Responsive Design"
      ]
    },
    {
      title: "Database",
      skills: [
        "MySQL",
        "PostgreSQL",
        "SQL",
        "Database Design"
      ]
    },
    {
      title: "Tools",
      skills: [
        "Git",
        "GitHub",
        "Docker",
        "Maven",
        "VS Code",
        "Eclipse"
      ]
    }
  ];

  return (
    <section id="skills" className="section">

      <div className="container">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>What I Work With</span>
          <h2>Technical Skills</h2>
        </motion.div>

        <div className="skills-groups">

          {skillGroups.map((group, index) => (

            <motion.div
              className="skill-group"
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >

              <h3>{group.title}</h3>

              <div className="skill-tags">

                {group.skills.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;