import React from "react";

import styles from "../../styles/SectionProjects.module.css";

import { projects } from "../../data/projects";

import { FaArrowAltCircleRight } from "react-icons/fa";

function SectionProjects() {
  return (
    <div className="SectionProjects">
      <div className={styles.container}>
        {projects.map((project) => (
          <div className={styles.project} key={project.id}>
            <div className={styles.grid}>
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div>
                <a href="#">
                  <FaArrowAltCircleRight size={50} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectionProjects;
