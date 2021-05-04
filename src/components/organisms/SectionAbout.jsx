import React from "react";

import styles from "../../styles/SectionAbout.module.css";

import lugon from "../../assets/lugon.jpg";
import { FaGithub, FaTwitch, FaTwitter, FaChevronDown } from "react-icons/fa";
import { Link } from "react-scroll";

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
        faculdade UDF e moro em Brasília, programo assiduamente desde 2019 e
        faço livecoding na twitch como hobbie, gosto de aprender mais e
        participar de projetos que estejam dispostos a fazer coisas novas. Me
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
      <Link
        activeClass="active"
        to="SectionSkills"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <FaChevronDown size={30} />
      </Link>
    </div>
  );
}

export default SectionAbout;
