import React from "react";

import { connect } from "react-redux";

function REJECTEDSCHOOLS(props) {
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
  schools: state.school.rejectedSchools,
});

export default connect(mapStateToProps)(REJECTEDSCHOOLS);
