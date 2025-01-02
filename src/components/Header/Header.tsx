import React from "react";
import styles from "./Header.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

interface SocialLink {
  name: string;
  url: string;
  icon: JSX.Element; // Represents the JSX for an icon
}

const Header: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      name: "Facebook",
      url: "https://www.facebook.com",
      icon: <FaFacebookF />,
    },
    {
      name: "Twitter",
      url: "https://www.twitter.com",
      icon: <FaTwitter />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com",
      icon: <FaLinkedinIn />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com",
      icon: <FaInstagram />,
    },
    {
      name: "GitHub",
      url: "https://www.github.com",
      icon: <FaGithub />,
    },
  ];

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
                <a href="#about">Home</a>
              </li>
              <li>
                <a href="#contact">About</a>
              </li>
              <li>
                <a href="#projects">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className={styles.headerContainer}>
        <div className={styles.headerTextContainer}>
          <h1>Tri Tac Le</h1>
          <p>
            Computer engineering student who <br /> enjoys traveling and playing
            sports
          </p>
          <div className={styles.socialLinksContainer}>
            {socialLinks.map((socialLink) => (
              <a
                key={socialLink.name}
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {socialLink.icon}
              </a>
            ))}
          </div>
        </div>
        <div className={styles.frontPictureContainer}>
          <img src="src/assets/frontPicture.JPG" alt="Picture" />
        </div>
      </div>
    </>
  );
};

export default Header;
