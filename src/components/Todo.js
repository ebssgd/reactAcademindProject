import React from "react";

function Todo({ text }) {
  //props gives you all the properties passed in on the App.js, but destructuring will give you just the props you want. In the end, props.text is required if you just pass in props, otherwise, just pass in the prop/props you want
  return (
    <div className="card">
      <h2>{text}</h2>
      <div className="actions">
        <button className="btn"  >Delete</button>
      </div>
    </div>
  );
}

export default Todo;
