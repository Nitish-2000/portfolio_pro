import react from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

function About() {
  return (
    <div className="dummy">
      <section className={styles.container} id = "about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
          <img
            className={styles.aboutImage}
            src={getImageUrl("about/aboutImage.png")}
            alt="About me image"
          />
          <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
              <img
                src={getImageUrl("about/cursorIcon.png")}
                alt="cursor icon"
              />
              <div className={styles.aboutItemText}>
                <h3>Frontend Developer</h3>
                <p>
                Expert in crafting  user-friendly interfaces
                 through HTML, CSS, and JavaScript.
                 {/* ensuring seamless web experiences. */}
                </p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img
                src={getImageUrl("about/serverIcon.png")}
                alt="cursor icon"
              />
              <div className={styles.aboutItemText}>
                <h3>Backend Developer</h3>
                <p>
                Experienced in server-side development, database management, 
                and API integration,ensuring the seamless functionality of web applications.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default About;
