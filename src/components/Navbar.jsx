import React from "react";

import styles from "../styles/Navbar.module.css";

import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className={styles.container}>
      <div>
        <ul>
          <li>
            <Link
              activeClass="active"
              to="SectionAbout"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              SOBRE
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="SectionSkills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              HABILIDADES
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="SectionProjects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              PROJETOS
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="SectionExperience"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              EXPERIÊNCIA
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
