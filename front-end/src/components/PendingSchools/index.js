import "./styles.scss";
import React from "react";

import { connect } from "react-redux";
import { handleAcceptSchool, handleRejectSchool } from "../../actions/school";

import Modal from "../ViewSchools/Modal";

function PENDINGSCHOOLS(props) {
  const [selectedSchool, setSelectedSchool] = React.useState({});
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const selectSchool = (school) => {
    setSelectedSchool(school);
    setIsOpen(true);
  };

  const accept = (id) => {
    props.handleAcceptSchool(id);
  };

  const reject = (id) => {
    props.handleRejectSchool(id);
  };
  return (
    <>
      <Modal
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        school={selectedSchool}
      />
      <div className="pending">
        {props.schools.map((school) => (
          <div className="school" key={school._id}>
            <p className="name" onClick={() => selectSchool(school)}>
              {school.name}
            </p>
            <div className="action">
              <button onClick={() => accept(school._id)}>Accept</button>
              <button onClick={() => reject(school._id)}>Reject</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  schools: state.school.pendingSchools,
});

export default connect(mapStateToProps, {
  handleAcceptSchool,
  handleRejectSchool,
})(PENDINGSCHOOLS);
