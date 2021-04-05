import React from "react";

import Navbar from "../components/organisms/Navbar";
import SectionAbout from "../components/organisms/SectionAbout";
import SectionExperience from "../components/organisms/SectionExperience";
import SectionProjects from "../components/organisms/SectionProjects";
import SectionSkills from "../components/organisms/SectionSkills";
import Footer from "../components/molecules/Footer";

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
