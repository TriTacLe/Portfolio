import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "../../assets/TriLogo.png";

const Header: React.FC = () => {
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About me" },
    { path: "/projects", label: "Projects" },
  ];

  return (
    <header className={styles.navbarHeader}>
      <img className={styles.logoImage} src={Logo} alt="Logo" />
      <nav className={styles.navbarContainer}>
        <ul className={styles.navbar}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`${styles.navbarLink} ${
                  location.pathname === link.path ? styles.activeLink : ""
                }`}
              >
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
