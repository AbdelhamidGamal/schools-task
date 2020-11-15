import "./styles.scss";
import React from "react";

import { connect } from "react-redux";
import { handleGetAllSchools } from "../../actions/school";

import Modal from "./Modal";

function ViewSchools(props) {
  const [selectedSchool, setSelectedSchool] = React.useState({});
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const selectSchool = (school) => {
    setSelectedSchool(school);
    setIsOpen(true);
  };

  React.useEffect(() => {
    props.handleGetAllSchools();
  }, []);

  return (
    <>
      <Modal
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        school={selectedSchool}
      />
      <div className="school">
        {props.schools.map((school) => (
          <div onClick={() => selectSchool(school)} key={school._id}>
            <p>{school.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  schools: state.school.schools,
});

export default connect(mapStateToProps, { handleGetAllSchools })(ViewSchools);
