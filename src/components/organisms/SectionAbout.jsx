import React from "react";

import styles from "../../styles/SectionAbout.module.css";

import lugon from "../../assets/lugon.jpg";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function SectionAbout() {
  return (
    <div className={styles.container} id="SectionAbout">
      <img src={lugon} alt="Pedro Lugon" />
      <h1>PEDRO LUGON</h1>
      <a href="mailto:pedrolugonm@gmail.com">
        <h2>pedrolugonm@gmail.com</h2>
      </a>
      <p>
        Nascido em 1998, sou um estudante de Sistemas da Informação pela
        faculdade UDF, moro em Brasília e programo assiduamente desde 2019.
        Gosto de estar em constante aprendizado e participar de projetos em que
        estejam engajados com ideias novas.
      </p>
      <div className={styles.icons}>
        <a
          target="_blank"
          rel="noreferrer"
          href="http://github.com/1ugon"
          title="GitHub"
        >
          <FaGithub size={50} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/1ugon/"
          title="LinkedIn"
        >
          <FaLinkedinIn size={50} />
        </a>
      </div>
    </div>
  );
}

export default SectionAbout;
