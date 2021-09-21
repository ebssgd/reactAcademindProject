import React from "react";

function Modal(props) {
  function cancelHandler() {
    props.onClick();
  }

  function confirmHandler() {
    props.onClick();
  }

  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button onClick={cancelHandler} className="btn">
        Confirm
      </button>
      <button onClick={confirmHandler} className="btn btn--alt">
        Cancel
      </button>
    </div>
  );
}

export default Modal;
