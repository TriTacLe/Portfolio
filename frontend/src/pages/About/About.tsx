import React from "react";
import styles from "./About.module.css";
import Header from "../../components/Header/Header.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import { Link } from "react-router-dom";
import selfieImage from "../../assets/selfie.jpg";
import pianoImage from "../../assets/piano.png";
import placeholder from "../../assets/antony.png";
import surfingImage from "../../assets/surfing.png";
import cavingImage from "../../assets/caving.png";
import EmojiRain from "../../components/Animation/RainAnimation.tsx";

const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <EmojiRain />
      <div className={styles.content}>
        <section className={styles.intro}>
          <h1 className={styles.h1}>Who am I?</h1>
          <div className={styles.introContent}>
            <p className={styles.introP}>
              I am a 20-year-old Computer and Systems Engineering student at
              NTNU Trondheim. Born and raised in Norway with Vietnamese
              heritage, I am fluent in three languages: Norwegian, English, and
              Vietnamese. From a young age, I have had a strong interest in
              science—initially in natural sciences—but in recent years, my
              interest has shifted toward computer science and network
              communications. Beyond academics, I have a keen interest in
              finance and economics. I actively engage in both short- and
              long-term investing, as well as swing and day trading across a
              variety of securities, including bonds, ETFs, stocks, and
              cryptocurrencies. My professional experience started early,
              selling newspapers at the age of 11, and since then, I have gained
              hands-on experience in various fields.{" "}
              <Link
                className={styles.CVlink}
                to="https://drive.google.com/file/d/188F_BJj0uNgn3dPATgQgcBcAhDO7BUn1/view?usp=sharing"
                //to="https://drive.google.com/file/d/1cde-6yZuJah2yQEjMxl1escoeMMtF5vq/view?usp=sharing"
              >
                <strong>Link to My CV</strong>
              </Link>
            </p>
            <div className={styles.introImgContainer}>
              <img
                src={selfieImage}
                alt="Picture"
                className={styles.introImage}
              />
            </div>
          </div>
        </section>
        <section className={styles.skills}>
          <div className={styles.skillGrid}>
            <h2 className={styles.h2TechStack}>Tech Stack</h2>
            <div className={styles.techSkillsContainer}>
              <div className={styles.skillCategory}>
                <h4>Programming languages</h4>
                <ul>
                  <li>HTML</li>
                  <li>JavaScript</li>
                  <li>CSS</li>
                  <li>TypeScript</li>
                  <li>Java</li>
                  <li>Python</li>
                </ul>
              </div>
              <div className={styles.skillCategory}>
                <h4>Frameworks</h4>
                <ul>
                  <li>React</li>
                  <li>Node.js</li>
                </ul>
              </div>
              <div className={styles.skillCategory}>
                <h4>Databases</h4>
                <ul>
                  <li>MySQL</li>
                </ul>
              </div>
              <div className={styles.skillCategory}>
                <h4>Networking</h4>
                <ul>
                  <li>Wireshark</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.interestSection}>
          <div className={styles.interestContainer}>
            <h2 className={styles.h2}>Personal Interest</h2>
            <ul>
              <li>
                <div className={styles.interestImgContainer}>
                  <img src={pianoImage} alt="Piano" />
                </div>
                Piano
              </li>
              <li>
                <div className={styles.interestImgContainer}>
                  <img src={placeholder} alt="Gym" />
                </div>
                Gym
              </li>
              <li>
                <div className={styles.interestImgContainer}>
                  <img src={placeholder} alt="Boxing" />
                </div>
                Boxing
              </li>
              <li>
                <div className={styles.interestImgContainer}>
                  <img src={placeholder} alt="Investing" />
                </div>
                Investing
              </li>
              <li>
                <div className={styles.interestImgContainer}>
                  <img src={placeholder} alt="Coding" />
                </div>
                Software developing
              </li>
              <li>
                <div className={styles.interestImgContainer}>
                  <img src={surfingImage} alt="Surfing" />
                </div>
                Surfing
              </li>
              <li>
                <div className={styles.interestImgContainer}>
                  <img src={placeholder} alt="Backpacking" />
                </div>
                Backpacking
              </li>
              <li>
                <div className={styles.interestImgContainer}>
                  <img src={cavingImage} alt="Caving" />
                </div>
                Caving
              </li>
            </ul>
          </div>
        </section>
        <section className={styles.cta}>
          <div className={styles.ctaContainer}>
            <h2 className={styles.h2}>Let's Connect!</h2>
            <p>
              Feel free to explore my portfolio or drop me a message. I’d love
              to connect!
            </p>
            <button
              className={styles.ctaButton}
              onClick={() =>
                (window.location.href = "mailto:tritac.le@gmail.com")
              }
            >
              Contact Me
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
