import React from "react";
import Error404 from "./Error404";
import GoBackNav from "../components/GoBackNav";

import { useParams, Params } from "react-router-dom";
import { useProject } from "../data/projects";

import { FaGithub, FaLink } from "react-icons/fa";

import styles from "../styles/ProjectDetails.module.css";

import MetaTags from "react-meta-tags";

export default function ProjectDetails() {
  const { slang }: Readonly<Params<string>> = useParams();
  const project = useProject(slang ? slang : "");

  if (!project) {
    return <Error404 />;
  } else {
    return (
      <>
        <MetaTags>
          <title>{project.title}</title>
          <meta name="description" content={project.description} />
          <meta property="og:image" content={project.image} />
        </MetaTags>
        <GoBackNav />
        <div className={styles.container}>
          <img src={project.image} alt={project.imagealt} />
          <div className={styles.project}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className={styles.projectlinks}>
              {project.link === "" ? (
                ""
              ) : (
                <a href={project.link}>
                  <FaLink size={30} />
                  <p>LINK</p>
                </a>
              )}
              {project.link === "" ? (
                ""
              ) : (
                <a href={project.link}>
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
