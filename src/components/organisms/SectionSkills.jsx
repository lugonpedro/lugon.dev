import React from "react";

import styles from "../../styles/SectionSkills.module.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaJs,
  FaPython,
  FaNpm,
  FaReact,
  FaNode,
  FaDatabase,
} from "react-icons/fa";

function SectionSkills() {
  return (
    <div className="SectionSkills">
      <div className={styles.container}>
        <h1>HABILIDADES</h1>
        <div className={styles.skills}>
          <a title="HTML">
            <FaHtml5 size={50} />
          </a>
          <a title="CSS">
            <FaCss3Alt size={50} />
          </a>
          <a title="Java">
            <FaJava size={50} />
          </a>
          <a title="Javascript">
            <FaJs size={50} />
          </a>
          <a title="Python">
            <FaPython size={50} />
          </a>
        </div>
        <h1>FERRAMENTAS</h1>
        <div className={styles.tools}>
          <a title="NPM">
            <FaNpm size={50} />
          </a>
          <a title="React">
            <FaReact size={50} />
          </a>
          <a title="Node JS">
            <FaNode size={50} />
          </a>
          <a title="Bancos de dados relacionais e não relacionais">
            <FaDatabase size={50} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SectionSkills;
