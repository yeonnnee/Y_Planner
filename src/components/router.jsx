import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Tasks from "../routes/Tasks";
import Monthly from "../routes/Monthly";
import AddMonthly from "../routes/AddMonthly";
import EditMonthly from "../routes/EditMonthly";
import Home from "../routes/Home";
import Account from "../routes/Account";
import ResetPw from "../routes/Account/ResetPw.jsx";
import DeleteAccount from "../routes/Account/DeleteAccount";
import LogIn from "../routes/Auth";
import SignUp from "../routes/SignUp";
import SignUpSuccess from "../routes/SignUp/SignUpSuccess";
import Header from "./Header";
import PrivateRoute from "./PrivateRoute";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/logIn" component={LogIn} />
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/sign-up/success" component={SignUpSuccess} />
        <PrivateRoute exact path="/tasks" component={Tasks} />
        <PrivateRoute exact path="/monthly" component={Monthly} />
        <PrivateRoute exact path="/add" component={AddMonthly} />
        <PrivateRoute exact path="/edit" component={EditMonthly} />
        <PrivateRoute exact path="/account" component={Account} />
        <PrivateRoute exact path="/reset-password" component={ResetPw} />
        <PrivateRoute exact path="/delete-account" component={DeleteAccount} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
