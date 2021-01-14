import React from "react";
import './DivButton.css';

function DivButton(props) {
  return (
    <a id="link-div" href={props.link}>
      <div className="div-button">

        <img className="div-button-image" src={props.src} alt="" />
        <div className="floating-title">
          {props.content}
        </div>

      </div>
    </a>
  );
}

export default DivButton;