import "./styles.scss";
import React from "react";

import { connect } from "react-redux";
import { handleSignOut } from "../../actions/auth";

import { Link } from "react-router-dom";

function Navbar({ name, handleSignOut }) {
  return (
    <nav>
      <h1>
        <Link to="/">El LEARNER</Link>
      </h1>
      <div className="welcome-user">
        <p>Hello {name || "Dear"}</p>
        <button onClick={handleSignOut}>Logout</button>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => ({
  name: state.auth.user?.name,
});

export default connect(mapStateToProps, { handleSignOut })(Navbar);
