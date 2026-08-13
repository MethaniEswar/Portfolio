import { useState, useEffect } from "react";


import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollReveal from "./components/ScrollReveal";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    return savedTheme
      ? savedTheme === "dark"
      : true;
  });

  useEffect(() => {
    document.body.className = darkMode
      ? "dark-mode"
      : "light-mode";

    localStorage.setItem(
      "theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main>

        {/* Hero */}
        <section id="home">
          <Hero />
        </section>

        {/* About */}
        <section id="about">
          <ScrollReveal>
            <About />
          </ScrollReveal>
        </section>

        {/* Stats */}
        <ScrollReveal>
          <Stats />
        </ScrollReveal>

        {/* Skills */}
        <section id="skills">
          <ScrollReveal>
            <Skills />
          </ScrollReveal>
        </section>

        {/* Projects */}
        <section id="projects">
          <ScrollReveal>
            <Projects />
          </ScrollReveal>
        </section>

        {/* Education */}
        <section id="education">
          <ScrollReveal>
            <Education />
          </ScrollReveal>
        </section>

        {/* Contact */}
        <section id="contact">
          <ScrollReveal>
            <Contact />
          </ScrollReveal>
        </section>

      </main>

      <Footer />

      <ScrollToTop />
    </>
  );
}

export default App;