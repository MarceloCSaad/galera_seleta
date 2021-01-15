import React from "react";
import images from "../../assets/images"
import PersonalCard from "../PersonalCard";

import './PapoReto.css';



function PapoReto() {
  return (
    <div className="papo-reto-container">
        <h1>PAPO RETO</h1>
          <p>Esse site surge como portal criado por um grupo de amigos que desejavam um espaço para reunir as suas brincadeiras com código.
          O grupo é composto tanto de aspirantes quanto veteranos na programação.
          De projetinhos em projetinhos, esse portal surge para consolidar nossas criações perante o grupo.</p>
          <p>Se tiver interesse, cá estão os boomers responsáveis pelas monstrosidades que aqui permeiam:</p>
        
        <ul className="papo-reto-card-deck">
          {/* The Idea is to fetch for all contributor data, them map the results into each PersonalCard element */}
          <li><PersonalCard src={images.placeholder} name="Magnata Magalhães" address="Rio de Janeiro, RJ" email="#" github="#" linkedin="#" description="Nascido em um buteco, nomeado pelo destino e compelido pela mão invisível" /></li>
          <li><PersonalCard src={images.placeholder} name="Carlos Espantoso" address="Rio de Janeiro, RJ" email="#" github="#" linkedin="#" description="Grande ser humano, uma referência em jogos de Quiz" /></li>
          <li><PersonalCard src={images.placeholder} name="Abelardo Caixa Preta" address="Rio de Janeiro, RJ" email="#" github="#" linkedin="#" description="Amigo do Dromecentauro-doninha" /></li>
          <li><PersonalCard src={images.placeholder} name="Shoggotth" address="Rio de Janeiro, RJ" email="#" github="#" linkedin="#" description="Aos olhos de Shoggotth, toda relação é abusiva" /></li>
        </ul>

    </div>
  );
}

export default PapoReto;