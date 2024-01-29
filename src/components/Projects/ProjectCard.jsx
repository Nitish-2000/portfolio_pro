import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Projectcard.module.css";

function ProjectCard({
  project: { title, imageSrc, demo, source, skills, description },
}) {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skills, id) => {
          <li key={id} className={styles.skill}>
            {skills}
          </li>;
        })}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link} target="_blank">Demo</a>
        <a href={source} className={styles.link} target="_blank">Source</a>
      </div>
    </div>
  );
}

export default ProjectCard;
