import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

function Navbar() {
  // Dark / Light mode
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") !== "light";
  });

  // Mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Apply theme
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");

      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");

      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Close mobile menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Toggle theme
  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <nav className="navbar">

      <div className="container nav-container">

        {/* Logo */}
        <button
          className="logo"
          onClick={() => {
            window.location.href = "#home";
            closeMenu();
          }}
        >
          Eswar.M
        </button>


        {/* Navigation Links */}
        <div
          className={`nav-links ${
            menuOpen ? "active" : ""
          }`}
        >

          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#education" onClick={closeMenu}>
            Education
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>


          {/* Theme Toggle */}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle dark and light mode"
          >
            {darkMode ? (
              <Sun size={20} />
            ) : (
              <Moon size={20} />
            )}
          </button>

        </div>


        {/* Mobile Menu Button */}
        <button
          className="menu-button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X size={27} />
          ) : (
            <Menu size={27} />
          )}
        </button>

      </div>

    </nav>
  );
}

export default Navbar;