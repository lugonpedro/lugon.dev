import React from "react";

import styles from "../../styles/SectionAbout.module.css";

import lugon from "../../assets/lugon.jpg";
import { FaGithub, FaTwitch, FaTwitter } from "react-icons/fa";

function SectionAbout() {
  return (
    <div className="SectionAbout">
      <div className={styles.container}>
        <img src={lugon} />
        <h1>PEDRO LUGON</h1>
        <a href="mailto:pedrolugonm@gmail.com">
          <h2>pedrolugonm@gmail.com</h2>
        </a>
        <p>
          Nascido em 1998, sou um estudante de Sistemas da Informação pela
          faculdade UDF, atualmente no último ano, tenho 22 anos e moro em
          Brasília-DF, programo assiduamente há dois anos e faço livecoding na
          twitch como hobbie, gosto muito de procurar aprender mais e participar
          de projetos em que estejam dispostos a fazer coisas novas. Me
          considero desenvolvedor back-end porém estou em busca de ser um bom
          fullstack.
        </p>
        <div className={styles.icons}>
          <a target="_blank" rel="noreferrer" href="http://github.com/1ugon">
            <FaGithub size={50} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.twitch.tv/lugondev"
          >
            <FaTwitch size={50} />
          </a>
          <a target="_blank" rel="noreferrer" href="https://twitter.com/lu9on">
            <FaTwitter size={50} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SectionAbout;
