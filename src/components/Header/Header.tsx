import React, { useEffect } from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const [activePage, setActivePage] = React.useState<string>("");

  useEffect(() => {
    const hash = window.location.hash || "#home";
    setActivePage(hash);
  }, []);

  return (
    <>
      <div className={styles.navbarHeader}>
        <img
          className={styles.logoImage}
          src="src/assets/TriLogo.png"
          alt="Logo"
        />
        <div className={styles.navbarContainer}>
          <nav className={styles.navbar}>
            <ul>
              <li>
                <a
                  href="Home.tsx"
                  className={activePage === "Home.tsx" ? styles.activeLink : ""}
                  onClick={() => setActivePage("Home.tsx")}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="About.tsx"
                  className={
                    activePage === "About.tsx" ? styles.activeLink : ""
                  }
                  onClick={() => setActivePage("About.tsx")}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="Portfolio.tsx"
                  className={
                    activePage === "Portfolio.tsx" ? styles.activeLink : ""
                  }
                  onClick={() => setActivePage("Portfolio.tsx")}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="Projects.tsx"
                  className={
                    activePage === "Projects.tsx" ? styles.activeLink : ""
                  }
                  onClick={() => setActivePage("Projects.tsx")}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="Contact.tsx"
                  className={
                    activePage === "Contact.tsx" ? styles.activeLink : ""
                  }
                  onClick={() => setActivePage("Contact.tsx")}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
