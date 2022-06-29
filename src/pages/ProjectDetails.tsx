import React from "react";
import Error404 from "./Error404";
import GoBackNav from "../components/GoBackNav";

import { useParams, Params } from "react-router-dom";
import { useProject } from "../data/projects";

import { FaLink } from "react-icons/fa";

import styles from "../styles/ProjectDetails.module.css";
import Footer from "../components/Footer";

export default function ProjectDetails() {
  const { slang }: Readonly<Params<string>> = useParams();
  const project = useProject(slang ? slang : "");

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
            <p>{project.description}</p>
            <a href={project.link} className={styles.link}>
              <FaLink size={30} />
              <p>LINK</p>
            </a>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
