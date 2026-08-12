import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="section contact-section">

      <div className="container">

        <div className="section-heading">
          <span>Get In Touch</span>
          <h2>Contact Me</h2>
        </div>


        <motion.div
          className="contact-box"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <span>Let's Connect</span>

<h2>Looking for a Java Full Stack Developer?</h2>

<p>
  I am a Computer Science graduate seeking opportunities as a
  Java Full Stack Developer. I am interested in building scalable
  web applications and contributing to professional development teams.
  Feel free to contact me regarding job opportunities, interviews,
  or professional collaboration.
</p>


          {/* CONTACT INFORMATION */}

          <div className="contact-info">

            <p>
              <Mail size={20} />

              <a href="mailto:methanieswar@gmail.com">
                methanieswar@gmail.com
              </a>
            </p>


            <p>
              <Phone size={20} />

              <a href="tel:+91 7032689374">
                +91 7032689374
              </a>
            </p>


            <p>
              <MapPin size={20} />

              <span>Guntur, Andhra Pradesh, India</span>
            </p>

          </div>


          {/* SOCIAL LINKS */}

          <div className="contact-socials">

            {/* GitHub */}

            <motion.a
              href="https://github.com/MethaniEswar"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              whileHover={{
                y: -5,
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >

              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.18 0 0 1-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.3-1.56 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
              </svg>

            </motion.a>


            {/* LinkedIn */}

            <motion.a
              href="https://www.linkedin.com/in/eswar-methani-934042357"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              whileHover={{
                y: -5,
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >

              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.37 4.27 5.46v6.28zM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM3.54 9h3.56v11.45H3.54V9zM22.22 0H1.78C.8 0 0 .78 0 1.74v20.52C0 23.22.8 24 1.78 24h20.44C23.2 24 24 .78 24 1.74V22.26C24 23.22 23.2 24 22.22 24z" />
              </svg>

            </motion.a>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Contact;