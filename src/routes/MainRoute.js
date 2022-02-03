import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import LoginScreen from "../screens/LoginScreen";
// import history from "../components/history";
// import PrivateRoute from "./PrivateRoute";
// import MainScreen from "../screens/MainScreen";

const MainRoute = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={LoginScreen} />
        {/* <PrivateRoute path="/home" component={MainScreen} /> */}
      </Switch>
    </Router>
  );
};

export default MainRoute;
