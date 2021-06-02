import React from "react";

import styles from "../../styles/SectionExperience.module.css";

function SectionExperience() {
  return (
    <div className={styles.container} id="SectionExperience">
      <div className={styles.formation}>
        <h1>FORMAÇÃO</h1>
        <h2>Sistemas da Informação</h2>
        <h4>Centro Universitário do Distrito Federal - UDF</h4>
        <h5>(Janeiro/2019 - atual)</h5>
        <h2>Ciência da Computação</h2>
        <h4>Centro Universitário de Brasília - CEUB</h4>
        <h5>(Janeiro/2018 - Dezembro/2018)</h5>
      </div>
      <div className={styles.experience}>
        <h1>EXPERIÊNCIA</h1>
        <h2>Freelancer</h2>
        <h4>Remoto</h4>
        <h5>(Janeiro/2021 - atual)</h5>
        <p>Freelancer trabalhando com desenvolvimento web e mobile.</p>

        <h2>Estágio na UDF</h2>
        <h4>Remoto</h4>
        <h5>(Abril/2020 - Junho/2020)</h5>
        <p>
          Estagiei no desenvolvimento de um sistema em PHP com o framework
          Laravel, em meio a um time de quinze pessoas utilizando o Slack na
          comunicação, Trello na organização das atividades e o Git para
          repositório e versionamento de código.
        </p>
      </div>
    </div>
  );
}

export default SectionExperience;
