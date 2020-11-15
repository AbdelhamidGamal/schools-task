import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

function App({ modalIsOpen, setIsOpen, school }) {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <p>{school.name}</p>
        <div>Docs : </div>
        <div>
          {school.documents?.map((doc) => (
            <div key={doc._id}>
              <p> Name: {doc.name}</p>
              <p> URL : {doc.url}</p>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
}

export default App;
