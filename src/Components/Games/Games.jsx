import React from "react";
import './Games.css';
import images from "../../assets/images";
import DivButton from "../DivButton"
import GenericButton from "../GenericButton"

function Games() {
  return (
    <>
      <h1>JOGUINHOS</h1>
      <ul className="app-list">
        <li><DivButton content="JONARIUS DIXIT" src={images[0]} align="left" link="https://jonarius.galere.se/"/> </li>
        <li><DivButton content="UM CARINHA SORRINDO" src={images[0]} align="right" link="#" /></li>
        <li><DivButton content="HUGO PRISMA" src={images[0]} align="left" link="#" /></li>
        <li><DivButton content="TORUK E SUAR MULÉ" src={images[0]} align="right" link="#" /></li>
      </ul>
      <GenericButton content="Better Call Lucas Penna, the Movie: The Game" />
    </>
  );
}

export default Games;