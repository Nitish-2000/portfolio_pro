import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css"

function Hero() {
  return (
    <div className='dummy'>
  <section className ={styles.container}>
    <div className = {styles.content}>
    <h1 className={styles.title}>Hi, I am Nitish Mani</h1>
    <p className={styles.description}>
       I am Fullstack developer skilled in creating engaging user interface and responsive design.
       And Proficient in server-side programming and database management.
    </p>
    
    <a className={styles.contactBtn} href ="mailto:nitishmani111@gmail.com" target='_blank'>Contact Me</a><br/>
   
    </div>
    <img className={styles.heroImg} src = {getImageUrl("hero/heroImg.png")} alt = "My_Image"/>
 <div className={styles.topBlur}/>

 <div className={styles.bottomBlur}/>
  </section>
  </div>
  )
}
export default Hero;