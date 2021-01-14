import React from "react";
import images from "../../assets/images";
import NewsBox from "../NewsBox/NewsBox";
import './Home.css';

function Home() {
  return (
    <>
      <NewsBox />
      <div className="home-container">
          <h1>Home Page</h1>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          
      </div>
    </>
  );
}

export default Home;