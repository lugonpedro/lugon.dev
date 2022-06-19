import React from "react";

import styles from "../styles/Experience.module.css";

import lugon from "../assets/lugon.jpg";
import Navbar from "../components/Navbar";
import NavbarMobile from "../components/NavbarMobile";
import Footer from "../components/Footer";

import MetaTags from "react-meta-tags";

export default function Experience() {
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
        <div className={styles.formation}>
          <h1>FORMAÇÃO</h1>

          <h2>Sistemas da Informação</h2>
          <h3>Centro Universitário do Distrito Federal - UDF</h3>
          <h4>(Janeiro/2018 - Junho/2022)</h4>

          <h2>Ciência da Computação</h2>
          <h3>Centro Universitário de Brasília - CEUB</h3>
          <h4>(Janeiro/2017 - Dezembro/2017)</h4>
        </div>
        <div className={styles.experience}>
          <h1>EXPERIÊNCIA</h1>

          <h2>Desenvolvedor Júnior C# .NET</h2>
          <h4>(Fevereiro/2022 - atual)</h4>
          <p>
            Trabalhando remotamente na empresa OpenPort para ajudar a solucionar
            problemas e dificuldades na criação de sistemas para gestão
            portuária.
          </p>

          <h2>Freelancer</h2>
          <h4>(Janeiro/2021 - Abril/2022)</h4>
          <p>
            Freelancer trabalhando com desenvolvimento web e mobile (focado no
            ecosistema React, React Native e NodeJS).
          </p>

          <h2>Estágio na UDF</h2>
          <h4>(Abril/2020 - Junho/2020)</h4>
          <p>
            Estagiei no desenvolvimento de um sistema em PHP com o framework
            Laravel, em meio a um time de quinze pessoas utilizando o Slack na
            comunicação, Trello na organização das atividades e o Git para
            repositório e versionamento de código.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
