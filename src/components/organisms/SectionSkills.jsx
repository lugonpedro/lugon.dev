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
          <i title="HTML">
            <FaHtml5 size={50} />
          </i>
          <i title="CSS">
            <FaCss3Alt size={50} />
          </i>
          <i title="Java">
            <FaJava size={50} />
          </i>
          <i title="Javascript">
            <FaJs size={50} />
          </i>
          <i title="Python">
            <FaPython size={50} />
          </i>
        </div>
        <h1>FERRAMENTAS</h1>
        <div className={styles.tools}>
          <i title="NPM">
            <FaNpm size={50} />
          </i>
          <i title="React">
            <FaReact size={50} />
          </i>
          <i title="Node JS">
            <FaNode size={50} />
          </i>
          <i title="Bancos de dados relacionais e não relacionais">
            <FaDatabase size={50} />
          </i>
        </div>
      </div>
    </div>
  );
}

export default SectionSkills;
