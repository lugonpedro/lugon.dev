import React from "react";
import { Switch, Route } from "react-router-dom";

import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import ProjectDetail from "./pages/ProjectDetails";
import NotFound from "./pages/Error404";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <About />
      </Route>
      <Route exact path="/skills">
        <Skills />
      </Route>
      <Route exact path="/projects">
        <Projects />
      </Route>
      <Route exact path="/experience">
        <Experience />
      </Route>
      <Route exact path="/project/:slang">
        <ProjectDetail />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
}
