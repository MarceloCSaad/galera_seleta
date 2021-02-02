import React from "react";
import DivButton from "./Components/DivButton";
import GenericButton from "./Components/GenericButton";
import NeonButton from "./Components/NeonButton";
import Home from "./Components/Home/Home";
import News from "./Components/News/News";
import Games from "./Components/Games/Games";
import PapoReto from "./Components/PapoReto/PapoReto";
import {BrowserRouter, NavLink, Switch, Route, Redirect} from 'react-router-dom';

import images from "./assets/images";
import './App.css';



function App() {
  return (
    <div id="app-container">
      <div id="content-area">

        <div className="app-header">
          <h1>Galere Seleta</h1>
        </div>

        <div className="app-nav-bar">
          <NeonButton content="INÍCIO" path="/Home"/>
          <NeonButton content="NOTÍCIAS" path="/News"/>
          <NeonButton content="JOGUINHOS" path="/Games"/>
          <NeonButton content="PAPO RETO" path="/PapoReto"/>
        </div>

        <div className="app-content" > {/*CONTENT GOES HERE*/}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/News" component={News} />
            <Route path="/Games" component={Games} />
            <Route path="/PapoReto" component={PapoReto} />
            <Redirect from="*" to="/" />
          </Switch>
        </div>
      
      </div>


      <footer id="app-footer">
        <img className="grid-snap-bottom" src={images[1]} alt="" />
        <div>
          <h2>galere na rede</h2>
          <p>Quer matutar um papo solerte pra nossa galere?</p>
          <p>(O Max não curte mas você pode curtir!)</p>
          <ul className="contact-list">
            <li><a href="mailto:#">email</a></li>
            <li><a href="#">discord</a></li>
          </ul>
        </div>

        {/*<div className="footer-bottom">
            Design por Marcelo Saad
        </div>*/}
      </footer>
    </div>
  );
}

export default App;
