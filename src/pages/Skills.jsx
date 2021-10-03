import React from "react";

import styles from "../styles/Skills.module.css";

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

import lugon from "../assets/lugon.jpg";
import Navbar from "../components/Navbar";
import NavbarMobile from "../components/NavbarMobile";
import Footer from "../components/Footer";

import MetaTags from "react-meta-tags";

export default function SectionSkills() {
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
        <h1>LINGUAGENS</h1>
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
          <i title="PHP">
            <FaPhp size={50} />
          </i>
        </div>
        <h1>FERRAMENTAS</h1>
        <div className={styles.tools}>
          <i title="React e React Native">
            <FaReact size={50} />
          </i>
          <i title="Node JS">
            <FaNode size={50} />
          </i>
          <i title="Laravel">
            <FaLaravel size={50} />
          </i>
          <i title="Bancos de dados relacionais e não relacionais">
            <FaDatabase size={50} />
          </i>
        </div>
      </div>
      <Footer />
    </>
  );
}
