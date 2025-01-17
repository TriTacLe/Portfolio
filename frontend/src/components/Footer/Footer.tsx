import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";

const Footer: React.FC = () => {
  const iconStyle: React.CSSProperties = {
    fontSize: "30px",
    margin: "0 2px",
    color: "#fff",
  };
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.socialLinksContainer}>
          <h4>LET'S CONNECT</h4>
          <div className={styles.socialLinks}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare style={{ ...iconStyle, color: "#4267B2" }} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitterSquare style={{ ...iconStyle, color: "#1DA1F2" }} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin style={{ ...iconStyle, color: "#0077B5" }} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare style={{ ...iconStyle, color: "#000" }} />
            </a>
          </div>
        </div>

        <div className={styles.footerSectionContact}>
          <h4>CONTACT</h4>
          <p>
            Email:<a href="mailto:tritac.le@gmail.com">tritac.le@gmail.com</a>
          </p>
          <p>Phone: +4747686930</p>
        </div>
        <div></div>

        <div className={styles.footerSectionNavigation}>
          <h4>SITE LINKS</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>
          © {new Date().getFullYear()} Tri Tac Le. Built with React +
          TypeScript.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
