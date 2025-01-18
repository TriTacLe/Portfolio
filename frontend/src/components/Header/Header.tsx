import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "../../assets/TriLogo.png";
//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faFolder } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

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

  const navLinks = [
    { path: "/", label: "Home", icon: <FontAwesomeIcon icon={faHome} /> },
    {
      path: "/about",
      label: "About me",
      icon: <FontAwesomeIcon icon={faUser} />,
    },
    {
      path: "/projects",
      label: "Projects",
      icon: <FontAwesomeIcon icon={faFolder} />,
    },
  ];

  return (
    <header
      className={`${styles.navbarHeader} ${
        isScrolled ? styles.navbarBlur : ""
      }`}
    >
      <Link to="/">
        <img className={styles.logoImage} src={Logo} alt="Logo" />
      </Link>

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
