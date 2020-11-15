import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ component: Component, ...rest }) {
  const isLoggedIn = useSelector((state) => state.auth.authenticated);
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/auth/login" />
      }
    />
  );
}

export default ProtectedRoute;
