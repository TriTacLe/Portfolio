import React from "react";
import styles from "./Home.module.css";
import Header from "../../components/Header/Header.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import myImage from "../../assets/intro.jpg";
import useSocialLinks from "../../hooks/useSocialLinks.tsx";

const Home: React.FC = () => {
  const socialLinks = useSocialLinks;

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
            href="mailto:tritac.le@gmail.com?subject=Let's%20Connect"
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
