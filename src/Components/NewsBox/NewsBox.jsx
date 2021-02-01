import React from "react";
import images from "../../assets/images";
import './NewsBox.css';

function NewsBox() {
  return (
    <>
      <div className="news-box-container">
          <h1>Últimas Atualizações</h1>
          <p>
            <ul>
              <li>Versão 1.0.0 do site no ar!</li>
              <li>Deploy contínuo feito pelo nosso amado Jenkins</li>
            </ul>
          </p>
          
      </div>
    </>
  );
}

export default NewsBox;