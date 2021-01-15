import React from "react";
import "./PersonalCard.css";
import images from "../assets/images";



function PersonalCard(props) {
    return (
        <>
            <div className="personal-card-container">
                <div className="personal-card-avatar-container" src={props.src}>
                    <img className="personal-card-avatar" src={props.src}></img>
                </div>
                <h3>{props.name}</h3>
                <h5>{props.address}</h5>
                <p>{props.description}</p>
                <ul className="personal-card-list">
                    <li><a href={`mailto:${props.email}`}><img src={images.email}></img></a></li>
                    <li><a href={props.github}><img src={images.github}></img></a></li>
                    <li><a href={props.linkedin}><img src={images.linkedin}></img></a></li>
                </ul>
            </div>
        </>
    )
}


export default PersonalCard;