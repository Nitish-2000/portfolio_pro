import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './Contact.module.css'

function Contact() {
  return (
    <footer id="contact" className={styles.container}>
       <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out</p>
       </div>
       <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt = "Email_Icon"/>
            <a href="mailto:nitishmani111@gmail.com" target='blank'>nitishmani111@gmail.com</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt = "LinkedIn_Icon"/>
            <a href="https://www.linkedin.com/in/nitish-mani/" target='blank'>LinkedIn</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt = "Github_Icon"/>
            <a href="https://github.com/Nitish-2000" target='blank'>Github</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/cv1.jpg")} alt = "Resume_Icon"/>
            <a href="https://drive.google.com/file/d/1kyGhAV4ZcjNRjEQGyYrPz5zj6AEzyQlG/view?usp=sharing" target="_blank">Check Resume</a>
        </li>
       </ul>
    </footer>
  )
}

export default Contact;