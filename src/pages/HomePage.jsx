import React from "react";

import Navbar from "../components/Navbar";
import SectionAbout from "../components/SectionAbout";
import SectionExperience from "../components/SectionExperience";
import SectionProjects from "../components/SectionProjects";
import SectionSkills from "../components/SectionSkills";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
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
