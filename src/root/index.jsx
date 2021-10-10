import React from "react";
import { Container } from "./style";
import Sidebar from "../components/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { sidebar } from "../utils/sidebar";
import NotFound from "../components/NotFound";
export const Root = () => {
  return (
    <Container>
      <Router>
        <Switch>
          {sidebar.map(({ id, path }) => (
            <Route exact key={id} component={Sidebar} path={path} />
          ))}
        </Switch>
        <Switch>
          {sidebar.map(({ Component, id, path }) => (
            <Route exact key={id} component={Component} path={path} />
          ))}
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </Container>
  );
};
export default Root;
