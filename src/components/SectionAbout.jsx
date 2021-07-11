import React from "react";

import styles from "../styles/SectionAbout.module.css";

import lugon from "../assets/lugon.jpg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function SectionAbout() {
  return (
    <div className={styles.container} id="SectionAbout">
      <img src={lugon} alt="Pedro Lugon" />
      <h1>PEDRO LUGON</h1>
      <p>
        Sou um estudante de Sistemas da Informação pela faculdade UDF, nascido
        em 1998, moro em Brasília e programo assiduamente desde 2019, tive minha
        primeira experiência com programação em 2017 com a linguagem Java, desde
        então procuro conhecer tecnologias novas que me tragam desempenho e
        praticidade para resolver os problemas, atualmente estou estudando
        desenvolvimento web e mobile, focado no ecosistema de React, React
        Native e NodeJS.
      </p>
      <div className={styles.icons}>
        <a href="http://github.com/1ugon" title="GitHub">
          <FaGithub size={50} />
        </a>
        <a href="https://www.linkedin.com/in/1ugon/" title="LinkedIn">
          <FaLinkedin size={50} />
        </a>
        <a href="mailto:pedrolugonm@gmail.com" title="E-mail">
          <FaEnvelope size={50} />
        </a>
      </div>
    </div>
  );
}

export default SectionAbout;
