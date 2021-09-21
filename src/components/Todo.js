import React, { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo({ text }) {
  //props gives you all the properties passed in on the App.js, but destructuring will give you just the props you want. In the end, props.text is required if you just pass in props, otherwise, just pass in the prop/props you want
  const [showModal, setShowModal] = useState(false);

  function handleDelete() {
    // console.log("Clicked");
    // console.log(text);
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <div className="card">
      <h2>{text}</h2>
      <div className="actions">
        <button className="btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
      {showModal && <Modal onClick={closeModal} />}
      {showModal && <Backdrop onClick={closeModal} />}
    </div>
  );
}

export default Todo;
