import React from "react";
import './GenericButton.css';
import { NavLink } from "react-router-dom";

function GenericButton(props) {
  return (
    <NavLink to={props.path} className="generic-button">
      {props.content}
    </NavLink>
  );
}

export default GenericButton;