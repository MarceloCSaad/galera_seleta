import React from "react";
import {NavLink} from 'react-router-dom';

import './NeonButton.css';



function NeonButton(props) {
  return (
    <NavLink to={props.path} className="neon-button" activeClassName="neon-button-active" >
        {props.content}
    </NavLink>
  );
}

export default NeonButton;