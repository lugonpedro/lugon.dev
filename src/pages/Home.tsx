import React from "react";

import lugon from "../assets/lugon.jpg";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import MetaTags from "react-meta-tags";
import SectionAbout from "../Sections/About";
import SectionSkills from "../Sections/Skills";
import SectionProjects from "../Sections/Projects";
import SectionExperience from "../Sections/Experience";

export default function Home() {
  return (
    <>
      <MetaTags>
        <title>Pedro Lugon</title>
        <meta name="description" content="Site portfólio do Pedro Lugon" />
        <meta name="keywords" content="desenvolvedor, web, mobile" />
        <meta property="og:image" content={lugon} />
      </MetaTags>
      <Navbar />
      <SectionAbout />
      <SectionProjects />
      <SectionSkills />
      <SectionExperience />
      <Footer />
    </>
  );
}
