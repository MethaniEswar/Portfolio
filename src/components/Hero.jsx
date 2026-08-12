import { motion } from "framer-motion";
import {
  Download,
  ArrowDown,
  Mouse,
} from "lucide-react";

function Hero() {
  return (
    <section id="home" className="hero">

      {/* Animated Background */}
      <div className="hero-background">

        <motion.div
          className="gradient-circle circle-one"
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="gradient-circle circle-two"
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

      </div>


      <div className="container hero-container">

        {/* LEFT SIDE */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          {/* Hello */}
          <motion.p
            className="hero-small"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
          >
            Hello, I'm
          </motion.p>


          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.35,
            }}
          >
            Methani <span>Eswar</span>
          </motion.h1>


          {/* Role */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
            }}
          >
            Java Full Stack Developer
          </motion.h2>


          {/* Description */}
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.65,
            }}
          >
            I build modern, scalable and user-friendly web applications
            using Java, Spring Boot, React.js and databases. I am passionate
            about solving problems and continuously learning new technologies.
          </motion.p>


          {/* BUTTONS */}
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
            }}
          >

            <motion.a
              href="#projects"
              className="btn primary-btn"
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              View My Work
            </motion.a>


            <motion.a
              href="/resume.pdf"
              className="btn secondary-btn"
              download
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              <Download size={18} />
              Download Resume
            </motion.a>

          </motion.div>


          {/* SOCIAL LINKS */}
          <motion.div
            className="social-links"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 1,
            }}
          >

            {/* GitHub */}
            <motion.a
              href="https://github.com/MethaniEswar"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              whileHover={{
                y: -4,
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.18 0 0 1-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.3-1.56 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
              </svg>

              <span>GitHub</span>
            </motion.a>


            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/eswar-methani-934042357"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              whileHover={{
                y: -4,
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.37 4.27 5.46v6.28zM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM3.54 9h3.56v11.45H3.54V9zM22.22 0H1.78C.8 0 0 .78 0 1.74v20.52C0 23.22.8 24 1.78 24h20.44C23.2 24 24 .78 24 1.74V22.26C24 23.22 23.2 24 22.22 24z" />
              </svg>

              <span>LinkedIn</span>
            </motion.a>

          </motion.div>

        </motion.div>


        {/* RIGHT SIDE - PROFILE IMAGE */}
        <motion.div
          className="hero-image-card"
          initial={{
            opacity: 0,
            scale: 0.7,
            x: 60,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <motion.div
            className="profile-image-wrapper"
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >

            <img
              src="/profile.png"
              alt="Methani Eswar"
              className="profile-image"
            />

            <div className="image-glow"></div>

          </motion.div>

        </motion.div>

      </div>


      {/* SCROLL DOWN */}
      <motion.a
        href="#about"
        className="scroll-down"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: [0, 10, 0],
        }}
        transition={{
          opacity: {
            duration: 1,
            delay: 1.5,
          },
          y: {
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >

        <span>Scroll Down</span>

        <Mouse size={24} />

        <ArrowDown size={18} />

      </motion.a>

    </section>
  );
}

export default Hero;