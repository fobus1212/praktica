import React from "react";
import "./Body4.css"
import back from "./../../img/b4.png"


function Body4() {
  return (
    <div>
      <div className="image-container4">
        <img src={back}alt="image" />
        <div className="content4">
          <h1>Xbox Design Lab</h1>
          <h2>Make yours one in a billion with new colors,<br/> metallic finishes and rubberized grips.</h2> 
          <button className="trailer-button4">Explore Consoles & Accessories</button>
          <button className="games-button4" >Design Yours</button> 
          
        </div>
      </div>
    </div>
  );
}

export default Body4;