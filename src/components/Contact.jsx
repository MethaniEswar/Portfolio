import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;

    const mailSubject = encodeURIComponent(
      subject || `Portfolio Contact from ${name}`
    );

    const mailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href =
      `mailto:methanieswar@gmail.com?subject=${mailSubject}&body=${mailBody}`;
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">

        {/* Section Heading */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2>Get In Touch</h2>

          <p className="contact-description">
            Have a project in mind? I'm always interested in learning new
            technologies, working on exciting projects and connecting with
            other developers. Feel free to reach out to me.
          </p>
        </motion.div>

        {/* Contact Layout */}
        <div className="contact-container">

          {/* LEFT SIDE */}
          <motion.div
            className="contact-info-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3>Let's Connect</h3>

            <p className="contact-info-text">
              I'm open to job opportunities, collaborations and
              interesting software development projects.
            </p>

            {/* Email */}
            <div className="contact-item">
              <div className="contact-icon">
                <Mail size={21} />
              </div>

              <div>
                <span>Email</span>
                <a href="mailto:methanieswar@gmail.com">
                  methanieswar@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="contact-item">
              <div className="contact-icon">
                <Phone size={21} />
              </div>

              <div>
                <span>Phone</span>
                <a href="tel:+917032689374">
                  +91 7032689374
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="contact-item">
              <div className="contact-icon">
                <MapPin size={21} />
              </div>

              <div>
                <span>Location</span>
                <p>Guntur, Andhra Pradesh, India</p>
              </div>
            </div>

          </motion.div>

          {/* RIGHT SIDE - MESSAGE FORM */}
          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3>Send Me a Message</h3>

            <form onSubmit={handleSubmit}>

              {/* Name */}
              <div className="form-group">
                <label htmlFor="name">
                  Your Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email */}
              <div className="form-group">
                <label htmlFor="email">
                  Your Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Subject */}
              <div className="form-group">
                <label htmlFor="subject">
                  Subject
                </label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Enter subject"
                  required
                />
              </div>

              {/* Message */}
              <div className="form-group">
                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Write your message..."
                  required
                ></textarea>
              </div>

              {/* Send Button */}
              <motion.button
                type="submit"
                className="send-message-btn"
                whileHover={{
                  scale: 1.02,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
              >
                <Send size={18} />
                Send Message
              </motion.button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;