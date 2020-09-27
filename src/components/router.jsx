/* eslint-disable react/display-name */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Tasks from "../routes/Tasks";
import Monthly from "../routes/Monthly";
import AddMonthly from "../routes/Monthly/AddMonthly";
import Home from "../routes/Home";
import LogIn from "../routes/LogIn";
import SignUp from "../routes/SignUp";
import Header from "./Header";
import Navigation from "./Navigation";
import PrivateRoute from "./PrivateRoute";

export default () => {
  return (
    <Router>
      <Header />
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/logIn" component={LogIn} />
        <Route path="/sign-up" component={SignUp} />
        <PrivateRoute exact path="/tasks" component={Tasks} />
        <PrivateRoute exact path="/monthly" component={Monthly} />
        <PrivateRoute exact path="/monthly/add" component={AddMonthly} />

        {/* <Route path="/" exact component={Monthly} />
        <Route path="/add" component={AddMonthly} /> */}
      </Switch>
    </Router>
  );
};
