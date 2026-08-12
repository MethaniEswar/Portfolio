import { motion } from "framer-motion";
import {
  Code2,
  ExternalLink
} from "lucide-react";

function Projects() {

  const projects = [
    {
      number: "01",
      title: "Cinema Booking System",
      description:
        "A full-stack cinema booking application designed to provide users with a convenient movie ticket booking experience. The system includes movie management, screening schedules, hall and seat management, seat selection, booking, and an admin dashboard.",
      technologies: [
        "Java",
        "Spring Boot",
        "React",
        "PostgreSQL",
        "Docker",
        "RabbitMQ",
        "REST API"
      ],
      github: "#",
      live: "#"
    },
    {
      number: "02",
      title: "Job Portal",
      description:
        "A full-stack job portal application designed to connect job seekers with employers. The application includes user registration, authentication, job posting, job searching, job applications, and database management.",
      technologies: [
        "Java",
        "Spring Boot",
        "MySQL",
        "HTML",
        "CSS",
        "Bootstarp",
        "REST API"
      ],
      github: "#",
      live: "#"
    },
    {
      number: "03",
      title: "Hotel Management System",
      description:
        "A full-stack hospital management application designed to simplify healthcare operations. The application includes patient management, doctor management, appointment scheduling, medical records, and database integration.",
      technologies: [
        "Java",
        "Spring Boot",
        "MySQL",
        "React",
        "REST API"
      ],
      github: "#",
      live: "#"
    },
    {
      number: "04",
      title: "E-commerce Website",
      description:
        " A full-stack e-commerce web application designed to provide users with a smooth online shopping experience. The application includes product browsing, user authentication, shopping cart, order management, and database integration.",
      technologies: [
        "Java",
        "Spring Boot",
        "MySQL",
        "React",
        "REST API"
      ],
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="section">

      <div className="container">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>My Recent Work</span>
          <h2>Featured Projects</h2>
        </motion.div>

        <div className="projects-grid">

          {projects.map((project, index) => (

            <motion.article
              className="project-card"
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >

              <div className="project-top">

                <span className="project-number">
                  {project.number}
                </span>

                <div className="project-links">

                  <a href={project.github}>
                    <Code2 size={20} />
                  </a>

                  <a href={project.live}>
                    <ExternalLink size={20} />
                  </a>

                </div>

              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">

                {project.technologies.map((tech) => (
                  <span key={tech}>
                    {tech}
                  </span>
                ))}

              </div>

            </motion.article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;