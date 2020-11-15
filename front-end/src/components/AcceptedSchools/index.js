import React from "react";

import { connect } from "react-redux";

function ACCEPTEDSCHOOLS(props) {
  return (
    <div className="">
      {props.schools.map((school) => (
        <div key={school._id}>
          <p>{school.name}</p>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  schools: state.school.acceptedSchools,
});

export default connect(mapStateToProps)(ACCEPTEDSCHOOLS);
