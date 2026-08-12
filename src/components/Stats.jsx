import { motion } from "framer-motion";
import {
  Code2,
  FolderGit2,
  GraduationCap,
  Coffee
} from "lucide-react";

function Stats() {
  const stats = [
    {
      icon: <Code2 />,
      number: "10+",
      title: "Technologies"
    },
    {
      icon: <FolderGit2 />,
      number: "4+",
      title: "Projects"
    },
    {
      icon: <GraduationCap />,
      number: "2026",
      title: "Graduation"
    },
    {
      icon: <Coffee />,
      number: "100%",
      title: "Learning Mindset"
    }
  ];

  return (
    <section className="stats-section">

      <div className="container stats-grid">

        {stats.map((stat, index) => (
          <motion.div
            className="stat-card"
            key={stat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >

            <div className="stat-icon">
              {stat.icon}
            </div>

            <h3>{stat.number}</h3>

            <p>{stat.title}</p>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Stats;