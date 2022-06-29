import React from "react";

import styles from "../styles/Section.module.css";

export default function SectionExperience() {
  return (
    <div className={styles.experienceContainer} id="experience">
      <div className={styles.formation}>
        <h1>FORMAÇÃO</h1>

        <div className={styles.block}>
          <h2>Sistemas da Informação</h2>
          <p>(Janeiro/2018 - Junho/2022)</p>
          <h3>Centro Universitário do Distrito Federal - UDF</h3>
        </div>

        <div className={styles.block}>
          <h2>Ciência da Computação</h2>
          <p>(Janeiro/2017 - Dezembro/2017)</p>
          <h3>Centro Universitário de Brasília - CEUB</h3>
        </div>
      </div>
      <div className={styles.experience}>
        <h1>EXPERIÊNCIA</h1>

        <div className={styles.block}>
          <h2>Desenvolvedor Júnior C# .NET</h2>
          <p>(Fevereiro/2022 - atual)</p>
          <p>
            Trabalhando remotamente na empresa OpenPort para ajudar a solucionar
            problemas e dificuldades na criação de sistemas para gestão
            portuária.
          </p>
        </div>

        <div className={styles.block}>
          <h2>Freelancer</h2>
          <p>(Janeiro/2021 - Abril/2022)</p>
          <p>
            Freelancer trabalhando com desenvolvimento web e mobile (focado no
            ecosistema React, React Native e NodeJS).
          </p>
        </div>

        <div className={styles.block}>
          <h2>Estágio na UDF</h2>
          <p>(Abril/2020 - Junho/2020)</p>
          <p>
            Estagiei no desenvolvimento de um sistema em PHP com o framework
            Laravel, em meio a um time de quinze pessoas utilizando o Slack na
            comunicação, Trello na organização das atividades e o Git para
            repositório e versionamento de código.
          </p>
        </div>
      </div>
    </div>
  );
}
