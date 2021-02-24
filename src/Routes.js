import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import About from "./About.js";
import Projects from "./Projects.js";
import Connect from "./Connect.js";
import Home from "./Home.js";


/** Routes

 * 
 */
function Routes() {


  return (
    <Switch>
      {/* <Route exact path="/">
        <Home />
      </Route> */}
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/projects">
        <Projects />
      </Route>
      <Route exact path="/connect">
        <Connect />
      </Route>
      <Redirect to="/about" />
    </Switch>
  );
}

export default Routes;