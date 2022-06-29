import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import SectionAbout from "../Sections/About";
import SectionSkills from "../Sections/Skills";
import SectionProjects from "../Sections/Projects";
import SectionExperience from "../Sections/Experience";

export default function Home() {
  return (
    <>
      <Navbar />
      <SectionAbout />
      <SectionProjects />
      <SectionSkills />
      <SectionExperience />
      <Footer />
    </>
  );
}
