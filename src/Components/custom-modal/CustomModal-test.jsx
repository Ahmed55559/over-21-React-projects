import React, { useState } from "react";
import CustomModal from "./CustomModal";

function CustomModalTest() {
  const [showModal, setShowModal] = useState(false);
  function handleShowModal() {
    setShowModal((prev) => !prev);
    console.log(showModal);
  }
  return (
    <div>
      <h1>Custom Modal Test</h1>
      <button onClick={() => handleShowModal()}>open custom modal</button>
      {showModal && <CustomModal setShowModal={setShowModal} />}
      <hr />
    </div>
  );
}

export default CustomModalTest;
