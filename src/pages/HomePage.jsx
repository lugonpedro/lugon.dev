import React from "react";

import Navbar from "../components/organisms/Navbar";
import SectionAbout from "../components/organisms/SectionAbout";
import SectionSkills from "../components/organisms/SectionSkills";

function HomePage() {
  return (
    <>
      <Navbar />
      <SectionAbout />
      <SectionSkills />
    </>
  );
}

export default HomePage;
