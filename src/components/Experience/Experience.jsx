import React from "react";
import skills from "../../data/skills.json";
import history from "../../data/history.json"
import { getImageUrl } from "../../utils";
import styles from './Experience.module.css'

function Experience() {
  return (
    <section id="education" className={styles.container}>
      <h2 className={styles.title}>Skills  and  Education</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skills, id) => {
            return (
              <div className={styles.skill} key={id}>
                <div className={styles.skillImageContainer}>
                  <img
                    className={styles.imageSrc}
                    src={getImageUrl(skills.imageSrc)}
                    alt={skills.title}
                  ></img>
                </div>
                <p>{skills.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
            {
               history.map((historyItems,id)=>{
                return <li key={id} className={styles.historyItem}>
                    <img src={getImageUrl(historyItems.imageSrc)} alt ={`${historyItems.organisation} Logo`}/>

                    <div className={styles.historyItemdetails}>
                    
                        <h3>{`${historyItems.role},${historyItems.organisation}`}</h3>
                        {/* <ul>
                            {historyItems.experiences.map((experience,id)=>{
                                return <li key = {id}>
                                    {experience}
                                </li>
                            })}
                        </ul> */}
                        <p>{`${historyItems.experiences}`}</p>
                        <p>{`${historyItems.startDate}-${historyItems.endDate}`}</p>
                        
                    </div>
                </li>
               })
            }
        </ul>
      </div>
    </section>
  );
}

export default Experience;
