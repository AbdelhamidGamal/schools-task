import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoute from "../auth/ProtectedRoute";

import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import ViewSchools from "../ViewSchools";
import PendingSchools from "../PendingSchools";
import AcceptedSchools from "../AcceptedSchools";
import RejectedSchools from "../RejectedSchools";

function Layout() {
  return (
    <div>
      <Navbar />
      <div className="main-layout">
        <Sidebar />
        <Switch>
          <ProtectedRoute exact path="/" component={ViewSchools} />
          <ProtectedRoute exact path="/pending" component={PendingSchools} />
          <ProtectedRoute exact path="/accepted" component={AcceptedSchools} />
          <ProtectedRoute exact path="/rejected" component={RejectedSchools} />
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
