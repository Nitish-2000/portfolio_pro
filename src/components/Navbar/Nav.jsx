import React from "react";
import styles from "./Nav.module.css";
import { getImageUrl } from "../../utils";
import { useState } from "react";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={styles.dummy}>
      <nav className={styles.navbar}>
        <a href="/" className={styles.title}>
          Portfolio
        </a>
        <div className={styles.menu}>
          <img
            className={styles.mentBtn}
            src={
              menuOpen
                ? getImageUrl("nav/closeIcon.png")
                : getImageUrl("nav/menuIcon.png")
            }
            alt="menu-Btn"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <ul
            className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}
          >
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#education">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
