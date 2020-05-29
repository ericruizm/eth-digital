import React from "react";
import { Route, Switch } from "react-router-dom";
// import Dashboard from '../pages/dashboard';
import Login from "../pages/login";
import Home from "../pages/Home";
import Settings from "../pages/Settings";
import Movements from "../pages/Movements";
import Contratos from "../pages/Contratos";

export function LoginRoutes() {
  return (
    <Switch>
      <Route path="/" render={(props) => <Login {...props} />} defaults exact />
      <Route path="/home" render={(props) => <Home {...props} />} defaults />
      <Route
        path="/contracts"
        render={(props) => <Contratos {...props} />}
        defaults
      />
      <Route
        path="/movements"
        render={(props) => <Movements {...props} />}
        defaults
      />
      <Route
        path="/settings"
        render={(props) => <Settings {...props} />}
        defaults
      />
    </Switch>
  );
}

export function LogoutRoutes() {
  return (
    <Switch>
      <Route path="/" render={(props) => <Login {...props} />} defaults />
      <Route path="/home" render={(props) => <Home {...props} />} defaults />
      <Route
        path="/movements"
        render={(props) => <Movements {...props} />}
        defaults
      />
      <Route
        path="/settings"
        render={(props) => <Settings {...props} />}
        defaults
      />
    </Switch>
  );
}
