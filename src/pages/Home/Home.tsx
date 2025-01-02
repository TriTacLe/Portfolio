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

interface SocialLink {
  name: string;
  url: string;
  icon: JSX.Element; // Represents the JSX for an icon
}

const Home: React.FC = () => {
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
    <div>
      <Header />
      <div className={styles.frontPageContainer}>
        <div className={styles.frontPageTextContainer}>
          <h1>Tri Tac Le</h1>
          <p>
            Computer engineering student who <br /> enjoys traveling and playing
            sports. Based in Trondheim, Norway. <br /> orem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptatum, <br />
            enim a perferendis at pariatur quia illo officia id, fuga laudantium
            ex <br />
            itaque deleniti officiis odio atque iusto qui iure aut?
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
          <img src="src/assets/" alt="Picture" />
        </div>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.home}>
          <h1 className={styles.homeH1}>Welcome to my website</h1>
          <p className={styles.homeText}>
            Welcome to my portfolio! This simple yet dynamic website, built
            using React and TypeScript, highlights my ability for creating
            responsive, functional, and visually engaging web applications.
            Here, you'll find examples of my work that showcase my skills. Take
            a look around and feel free to reach out. I'd love to connect and
            collaborate!
          </p>
          <button className={styles.ctaButton}>Get in Touch</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
