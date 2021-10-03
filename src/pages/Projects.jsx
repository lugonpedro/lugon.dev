import React from "react";

import styles from "../styles/Projects.module.css";

import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { FaArrowRight } from "react-icons/fa";

import lugon from "../assets/lugon.jpg";

import Navbar from "../components/Navbar";
import NavbarMobile from "../components/NavbarMobile";
import Footer from "../components/Footer";

import MetaTags from "react-meta-tags";

export default function SectionProjects() {
  return (
    <>
      <MetaTags>
        <title>Pedro Lugon</title>
        <meta name="description" content="Site portfólio do Pedro Lugon" />
        <meta name="keywords" content="desenvolvedor, web, mobile" />
        <meta property="og:image" content={lugon} />
      </MetaTags>
      <Navbar />
      <NavbarMobile />
      <div className={styles.container}>
        {projects.map((project) => (
          <div className={styles.project} key={project.id}>
            <div className={styles.grid}>
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div>
                <Link to={`/project/${project.slang}`}>
                  <FaArrowRight size={50} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
