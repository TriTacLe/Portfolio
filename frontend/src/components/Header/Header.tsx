import React, { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "../../assets/TriLogo.png";
//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import navLinks from "../../types/navLinks";
//import { useTheme } from "../../context/ThemeContext";

const Header: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);

  //const { theme, toggleTheme } = useTheme();

  return (
    <header
      className={`${styles.navbarHeader} ${
        isScrolled ? styles.navbarBlur : ""
      }`}
    >
      <div className={styles.headerContent}>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img className={styles.logoImage} src={Logo} alt="Logo" />
        </Link>
        <button
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
      </div>

      <nav
        className={`${styles.navbarContainer} ${
          menuOpen ? styles.navbarOpen : ""
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <ul className={styles.navbar}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`${styles.navbarLink} ${
                  location.pathname === link.path ? styles.activeLink : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.icon}
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
