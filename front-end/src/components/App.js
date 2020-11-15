import "./app.scss";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { connect } from "react-redux";
import { handleFetchProfile } from "../actions/auth";

import ProtectedRoute from "./auth/ProtectedRoute";

import Layout from "./Layout";
import Login from "./auth/Login";

const App = (props) => {
  useEffect(() => {
    props.handleFetchProfile();
  }, []);
  return (
    <Switch>
      <Route path="/auth/login" component={Login} />
      <Route path="/" component={Layout} />
    </Switch>
  );
};

export default connect(null, { handleFetchProfile })(App);
