import { useState } from "react";
import { getImageUrl } from "../../utils";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>

        <a href="#home" className={styles.logo}>
          Yorian<span>.</span>
        </a>

        {/* Desktop menu */}
        <ul className={styles.desktopMenu}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <img
            src={
              menuOpen
                ? getImageUrl("nav/closeIcon.png")
                : getImageUrl("nav/menuIcon.png")
            }
            alt=""
          />
        </button>

        {/* Mobile menu */}
        <div
          className={`${styles.mobileMenu} ${
            menuOpen ? styles.open : ""
          }`}
        >
          <ul>
            <li>
              <a href="#about" onClick={closeMenu}>
                About
              </a>
            </li>

            <li>
              <a href="#experience" onClick={closeMenu}>
                Experience
              </a>
            </li>

            <li>
              <a href="#projects" onClick={closeMenu}>
                Projects
              </a>
            </li>

            <li>
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};