import React from "react";
import Error404 from "./Error404";
import GoBackNav from "../components/GoBackNav";

import { useParams } from "react-router-dom";
import { useProject } from "../data/projects";

import { FaGithub, FaLink } from "react-icons/fa";

import styles from "../styles/ProjectDetails.module.css";

function ProjectDetails() {
  const params = useParams();
  const project = useProject(params.slang);

  if (!project) {
    return <Error404 />;
  } else {
    return (
      <>
        <GoBackNav />
        <div className={styles.container}>
          <img src={project.image} alt={project.imagealt} />
          <div className={styles.project}>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <div className={styles.projectlinks}>
              {project.link === "" ? (
                ""
              ) : (
                <a href={project.link}>
                  <FaLink size={30} />
                  <p>LINK</p>
                </a>
              )}
              {project.source === "" ? (
                ""
              ) : (
                <a href={project.source}>
                  <FaGithub size={30} />
                  <p>CODE</p>
                </a>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProjectDetails;
