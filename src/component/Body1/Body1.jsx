import React from "react";
import "./Body1.css"
import back from "./../../img/228.png"


function Body1() {
  return (
    <div>
      <div className="image-container">
        <img src={back}alt="image" />
        <div className="content">
          <h1>Star wars</h1>
          <h2> Battlefront II</h2>
          <button className="trailer-button">Watch Trailer</button>
          <button className="games-button" >Explore Games</button>
        </div>
      </div>
    </div>
  );
}

export default Body1;