import React from "react";

import Navbar from "../components/Navbar";
import SectionAbout from "../components/SectionAbout";
import SectionExperience from "../components/SectionExperience";
import SectionProjects from "../components/SectionProjects";
import SectionSkills from "../components/SectionSkills";
import Footer from "../components/Footer";

import MetaTags from "react-meta-tags";

function HomePage() {
  return (
    <>
      <MetaTags>
        <title>Pedro Lugon</title>
        <meta name="description" content="Site portfólio do Pedro Lugon" />
        <meta name="keywords" content="desenvolvedor, web, mobile" />
        <meta property="og:image" content="../src/assets/lugon.jpg" />
      </MetaTags>
      <Navbar />
      <SectionAbout />
      <SectionSkills />
      <SectionProjects />
      <SectionExperience />
      <Footer />
    </>
  );
}

export default HomePage;
