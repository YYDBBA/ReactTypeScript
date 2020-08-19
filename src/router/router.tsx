import React from "react";
import { Route, HashRouter, Switch, Redirect } from "react-router-dom";
import Home from "../pages/HomeIndex";
import App from "../App";
import Index from "../pages/Home";
import Set from "../pages/Set";
import My from "../pages/My";
import Equipment from "../pages/Equipment";
import Login from "../pages/Login";

const AppRouter: React.FC = () => {
  return (
    <HashRouter>
      <Route path="/" component={App} />
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/home">
          <Home />
          <Switch>
            <Route path="/home/index" exact>
              <Index />
            </Route>
            <Route path="/home/set" exact>
              <Set />
            </Route>
            <Route path="/home/my" exact>
              <My />
            </Route>
            <Route path="/home/equipment" component={Equipment} />
            <Redirect to="/home/index" />
          </Switch>
        </Route>
        <Redirect to="/login" />
      </Switch>
    </HashRouter>
  );
}
export default React.memo(AppRouter)
