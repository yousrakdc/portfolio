import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
      <section className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Hi, I'm Yousra</h1>
          <p className={styles.description}>
            A passionate junior Fullstack Developer with a knack for crafting elegant and efficient web solutions. Welcome to my portfolio!
          </p>
          <div className={styles.buttons}>
            <a
              href={getImageUrl("/hero/Yousra-Kerdouchi-resume-EN.pdf")}
              className={styles.resumeBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
            <a href="mailto:yousrakerdouchi@email.com" className={styles.contactBtn}>
              Contact Me
            </a>
          </div>
        </div>
        <img
          src={getImageUrl("/hero/heroImage.png")}
          alt="Hero image of me"
          className={styles.heroImg}
        />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
      </section>
    );
  };
  