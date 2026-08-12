import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

function About() {
  const points = [
    "Strong foundation in Java programming",
    "Hands-on experience with Spring Boot",
    "Experience building REST APIs",
    "Frontend development using React.js",
    "Database development using MySQL and PostgreSQL",
    "Experience with Git, GitHub and Docker"
  ];

  return (
    <section id="about" className="section">

      <div className="container">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>Get To Know Me</span>
          <h2>About Me</h2>
        </motion.div>

        <div className="about-content">

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <p>
              I am a Computer Science Engineering graduate passionate about
              software development and full-stack web application development.
            </p>

            <p>
              My primary focus is Java Full Stack Development. I enjoy
              creating applications that are reliable, scalable and easy
              to use.
            </p>

            <p>
              I am continuously improving my programming, problem-solving
              and communication skills while preparing for opportunities
              as a Software Engineer.
            </p>

          </motion.div>

          <motion.div
            className="about-list"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            {points.map((point) => (
              <div className="about-point" key={point}>
                <CheckCircle size={20} />
                <span>{point}</span>
              </div>
            ))}

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default About;