import React from "react";
import styles from "./Home.module.css";
import Header from "../../components/Header/Header.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import myImage from "../../assets/frontimg.jpg";

interface SocialLink {
  name: string;
  url: string;
  icon: JSX.Element;
  color?: string;
}

const Home: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=100023347819321",
      icon: <FaFacebookF />,
      color: "#4267B2",
    },
    {
      name: "Twitter",
      url: "https://www.twitter.com",
      icon: <FaTwitter />,
      color: "#1DA1F2",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/tritacle/",
      icon: <FaLinkedinIn />,
      color: "#0077B5",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/tri_le4/",
      icon: <FaInstagram className={styles.instagramIcon} />,
      color: "#C13584",
    },
    {
      name: "GitHub",
      url: "https://github.com/TriTacLe",
      icon: <FaGithub />,
      //color: "#333",
    },
  ];

  return (
    <div className={styles.homeContainer}>
      <Header />
      <div className={styles.frontPageContainer}>
        <div className={styles.frontPageTextContainer}>
          <h1 className={styles.h1Name}>Tri Tac Le</h1>
          <p>
            Computer Engineering student at Norwegian University of Science and
            Technology (NTNU) in Trondheim.
          </p>
          <div className={styles.socialLinksContainer}>
            {socialLinks.map((socialLink) => (
              <a
                key={socialLink.name}
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
                style={
                  socialLink.color !== "gradient"
                    ? { color: socialLink.color }
                    : undefined
                }
              >
                {socialLink.icon}
              </a>
            ))}
          </div>
        </div>
        <div className={styles.frontPictureContainer}>
          <img src={myImage} alt="Picture" />
        </div>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.home}>
          <h1 className={styles.homeH1}>Welcome to my website</h1>
          <p className={styles.homeText}>
            Welcome to my portfolio! This simple yet dynamic website, built
            using React and TypeScript, with solely purpose to learn and
            practice creating responsive, functional, and visually engaging web
            applications. This website represent a portfolio of my work. Take a
            look around and feel free to reach out. I'd love to connect and
            collaborate!
          </p>
          <a
            className={styles.ctaBtnEmail}
            href="mailto:your-email@example.com?subject=Let's%20Connect"
          >
            <button className={styles.ctaButton}>Get in Touch</button>
          </a>{" "}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
