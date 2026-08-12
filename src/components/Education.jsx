import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

function Education() {
  return (
    <section id="education" className="section">

      <div className="container">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>My Academic Journey</span>
          <h2>Education</h2>
        </motion.div>

        <motion.div
          className="education-card"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >

          <div className="education-icon">
            <GraduationCap size={30} />
          </div>

          <div>

            <span className="education-year">
              2022 - 2026
            </span>

            <h3>
              Bachelor of Technology
            </h3>
            <h4>Rajiv Gandhi University of Knowledge Technologies Ongole, Andhra Pradesh</h4>

            <h4>
              Computer Science Engineering
            </h4>

            <p>
              Completed B.Tech in Computer Science Engineering with a
              strong interest in software development, programming,
              databases and web technologies.
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Education;