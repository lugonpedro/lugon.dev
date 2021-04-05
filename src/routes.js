import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProjectDetail from "./pages/ProjectDetails";
import NotFound from "./pages/Error404";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
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
