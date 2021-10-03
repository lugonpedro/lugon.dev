import React from "react";

import styles from "../styles/About.module.css";

import lugon from "../assets/lugon.jpg";
import CV from "../assets/cv.pdf";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import Navbar from "../components/Navbar";
import NavbarMobile from "../components/NavbarMobile";
import Footer from "../components/Footer";

import MetaTags from "react-meta-tags";

export default function About() {
  return (
    <>
      <MetaTags>
        <title>Pedro Lugon</title>
        <meta name="description" content="Site portfólio do Pedro Lugon" />
        <meta name="keywords" content="desenvolvedor, web, mobile" />
        <meta property="og:image" content={lugon} />
      </MetaTags>
      <Navbar />
      <NavbarMobile />
      <div className={styles.container}>
        <img src={lugon} alt="Pedro Lugon" />
        <h1>PEDRO LUGON</h1>
        <p>
          Sou um estudante de Sistemas da Informação pela faculdade UDF, nascido
          em 1998, moro em Brasília e programo assiduamente desde 2019, tive
          minha primeira experiência com programação em 2017 com a linguagem
          Java, desde então procuro conhecer tecnologias novas que me tragam
          desempenho e praticidade para resolver problemas, atualmente estou
          estudando desenvolvimento web e mobile, focado no ecosistema de React,
          React Native e NodeJS.
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
        <a href={CV} className={styles.cv}>
          Baixar CV
        </a>
      </div>
      <Footer />
    </>
  );
}
