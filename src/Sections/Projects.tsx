import React from "react";

import styles from "../styles/Section.module.css";

import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function SectionProjects() {
  return (
    <div className={styles.projectsContainer} id="projects">
      {projects.map((project) => (
        <Link
          className={styles.project}
          key={project.id}
          to={`/project/${project.slang}`}
        >
          <div className={styles.grid}>
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
