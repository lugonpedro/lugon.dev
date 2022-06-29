import React, { useState } from "react";

import styles from "../styles/Section.module.css";

import ReactTextTransition from "react-text-transition";

import {
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaJs,
  FaPython,
  FaReact,
  FaNode,
  FaDatabase,
  FaPhp,
  FaLaravel,
} from "react-icons/fa";

export default function SectionSkills() {
  const [lang, setLang] = useState<string>("TECNOLOGIAS");

  return (
    <div className={styles.skillsContainer} id="skills">
      <ReactTextTransition direction="up" delay={300} inline>
        <h1>{lang}</h1>
      </ReactTextTransition>
      <div className={styles.skills}>
        <i
          onMouseEnter={() => setLang("HTML")}
          onMouseLeave={() => setLang("TECNOLOGIAS")}
        >
          <FaHtml5 size={50} />
        </i>

        <i
          onMouseEnter={() => setLang("CSS")}
          onMouseLeave={() => setLang("TECNOLOGIAS")}
        >
          <FaCss3Alt size={50} />
        </i>
        <i
          onMouseEnter={() => setLang("Java")}
          onMouseLeave={() => setLang("TECNOLOGIAS")}
        >
          <FaJava size={50} />
        </i>
        <i
          onMouseEnter={() => setLang("JavaScript")}
          onMouseLeave={() => setLang("TECNOLOGIAS")}
        >
          <FaJs size={50} />
        </i>
        <i
          onMouseEnter={() => setLang("Python")}
          onMouseLeave={() => setLang("TECNOLOGIAS")}
        >
          <FaPython size={50} />
        </i>
        <i
          onMouseEnter={() => setLang("PHP")}
          onMouseLeave={() => setLang("TECNOLOGIAS")}
        >
          <FaPhp size={50} />
        </i>
        <i
          onMouseEnter={() => setLang("React")}
          onMouseLeave={() => setLang("TECNOLOGIAS")}
        >
          <FaReact size={50} />
        </i>
        <i
          onMouseEnter={() => setLang("Node")}
          onMouseLeave={() => setLang("TECNOLOGIAS")}
        >
          <FaNode size={50} />
        </i>
        <i
          onMouseEnter={() => setLang("Laravel")}
          onMouseLeave={() => setLang("TECNOLOGIAS")}
        >
          <FaLaravel size={50} />
        </i>
        <i
          onMouseEnter={() => setLang("Bancos de Dados")}
          onMouseLeave={() => setLang("TECNOLOGIAS")}
        >
          <FaDatabase size={50} />
        </i>
      </div>
    </div>
  );
}
