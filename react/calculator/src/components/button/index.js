import React from "react";
import "./index.css";

function Button(props) {
  let overridingStyles = {};

  if (props.backgroundColor) {
    overridingStyles["backgroundColor"] = props.backgroundColor;
  }
  if (props.width) {
    overridingStyles["width"] = props.width;
  }
  if (props.height) {
    overridingStyles["height"] = props.height;
  }

  return (
    <button
      className="ButtonDiv"
      style={overridingStyles}
      onClick={() => props.onClick(props.value)}
    >
      {props.value}
    </button>
  );
}

export default Button;
