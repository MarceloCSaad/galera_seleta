import React from "react";
import './GenericButton.css';

function GenericButton(props) {
  return (
    <div className="generic-button">
      {props.content}
    </div>
  );
}

export default GenericButton;