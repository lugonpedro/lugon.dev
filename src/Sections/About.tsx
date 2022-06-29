import React from "react";

import styles from "../styles/Section.module.css";

import lugon from "../assets/lugon.jpg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function SectionAbout() {
  function getMail() {
    navigator.clipboard.writeText("pedrolugonm@gmail.com");
    alert("E-mail copiado com sucesso");
  }

  return (
    <div className={styles.aboutContainer} id="about">
      <div className={styles.imageContainer}>
        <img src={lugon} alt="Pedro Lugon" />
      </div>
      <div className={styles.textContainer}>
        <h1>PEDRO LUGON</h1>
        <p>
          Sou um estudante de Sistemas da Informação pela faculdade UDF, nascido
          em 1998, tive minha primeira experiência com programação em 2017 com a
          linguagem Java, desde então procuro conhecer tecnologias novas que me
          tragam desempenho e praticidade para resolver problemas, atualmente
          estou estudando desenvolvimento web e mobile, focado no ecosistema de
          React, React Native e NodeJS.
        </p>
        <div className={styles.icons}>
          <a
            href="http://github.com/1ugon"
            title="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={50} />
          </a>
          <a
            href="https://www.linkedin.com/in/1ugon/"
            title="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={50} />
          </a>
          <a
            href="mailto:pedrolugonm@gmail.com"
            title="E-mail"
            onClick={getMail}
          >
            <FaEnvelope size={50} />
          </a>
        </div>
      </div>
    </div>
  );
}
