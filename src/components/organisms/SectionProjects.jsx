import React from "react";

import styles from "../../styles/SectionProjects.module.css";

import { Link } from "react-router-dom";
import { projects } from "../../data/projects";
import { FaArrowAltCircleRight, FaGithub } from "react-icons/fa";

function SectionProjects() {
  return (
    <div className={styles.container} id="SectionProjects">
      <h1>PROJETOS</h1>
      {projects.map((project) => (
        <div className={styles.project} key={project.id}>
          <div className={styles.grid}>
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <div>
              <Link to={`/project/${project.slang}`}>
                <FaArrowAltCircleRight size={50} />
              </Link>
            </div>
          </div>
        </div>
      ))}
      <a
        className={styles.more}
        href="https://github.com/1ugon"
        target="_blank"
        rel="noreferrer"
      >
        <h3>Veja mais projetos no GitHub</h3>
        <FaGithub />
      </a>
    </div>
  );
}

export default SectionProjects;
