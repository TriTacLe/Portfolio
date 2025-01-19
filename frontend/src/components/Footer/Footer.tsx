import React from "react";
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

  interface SocialLink {
    platform: string;
    url: string;
    icon: JSX.Element;
    color: string;
  }

  const socialLinks: SocialLink[] = [
    {
      platform: "Facebook",
      url: "https://facebook.com",
      icon: <FaFacebookSquare />,
      color: "#4267B2",
    },
    {
      platform: "Twitter",
      url: "https://twitter.com",
      icon: <FaTwitterSquare />,
      color: "#1DA1F2",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com",
      icon: <FaLinkedin />,
      color: "#0077B5",
    },
    {
      platform: "GitHub",
      url: "https://github.com",
      icon: <FaGithubSquare />,
      color: "#000",
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.socialLinksContainer}>
          <h4>LET'S CONNECT</h4>
          <div className={styles.socialLinks}>
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${link.platform}`}
              >
                {React.cloneElement(link.icon, {
                  className: styles.socialIcon,
                  style: { ...iconStyle, color: link.color },
                })}
              </a>
            ))}
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
