import React from "react";

import styles from "../styles/Navbar.module.css";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={styles.container}>
      <div>
        <ul>
          <li>
            <Link to="/">SOBRE</Link>
          </li>
          <li>
            <Link to="/skills">HABILIDADES</Link>
          </li>
          <li>
            <Link to="/projects">PROJETOS</Link>
          </li>
          <li>
            <Link to="/experience">EXPERIÊNCIA</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
