import "./styles.scss";
import React from "react";
import { Link, Redirect } from "react-router-dom";

import { connect } from "react-redux";

import { handleSignIn } from "../../../actions/auth";

import { useFormik } from "formik";
import { signInSchema as validationSchema } from "./validation";

function Signin({ handleSignIn, invalidCredentials, authenticated }) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      handleSignIn(values);
    },
    validationSchema,
  });

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div id="login_page">
      <form onSubmit={formik.handleSubmit}>
        <div>
          <p className="form-title">Welcome Back, Log in!</p>
        </div>
        <div className="form-group">
          <label>EMAIL</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            size="lg"
            placeholder="name@example.com"
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label>PASSWORD</label>
          <input
            size="lg"
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
          {invalidCredentials && <div>Invalid Credentials</div>}
        </div>

        <button>Sign in</button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  invalidCredentials: state.auth.error || false,
  authenticated: state.auth.authenticated,
});

export default connect(mapStateToProps, { handleSignIn })(Signin);
