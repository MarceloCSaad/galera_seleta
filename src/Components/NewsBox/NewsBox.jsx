import React from "react";
import images from "../../assets/images";
import GenericButton from "../GenericButton";
import './NewsBox.css';

function NewsBox(props) {
  return (
    <>
      <div className="news-box-container">
        <h3>{props.headline}</h3>
        <p>{props.summary}</p>
        <div className="news-info">
          <h4>{props.author}</h4>
          <h5>{props.date}</h5>
        </div>

        <GenericButton content="ler mais" path="/News" />
          
      </div>
    </>
  );
}

export default NewsBox;