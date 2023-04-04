import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <div>
      <button
        type={props.Type ? props.Type : "button"}
        style={{ padding: props.Padding }}
        className="primary-btn"
        onClick={props.Func}
      >
        {props.children}
      </button>
    </div>
  );
}

export default Button;
