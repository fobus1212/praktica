import React from 'react'; 
import "./Body2.css" 
import logo228 from "./../../img/xbox icon.png"
import k1 from "./../../img/k1.png" 
import k2 from "./../../img/k22.png" 
import k3 from "./../../img/k33.png"
function Body2() { 
    return(
    <div className="body2">
      <div className="body2-content">
        <img className="l228" src={logo228} alt="photo" />
        <h1></h1>
        <p >&nbsp; &nbsp; THE BEAST VALUE <br/> in games and entertainment </p>
        <h2></h2>
      </div>
      <div className="container-wrapper">
        <div className="container">
          <img src={k1} alt="photo" />
          <p>XBOX ONE X</p>
          <h3>Faster Processing <br/>Smoother Gameplay&nbsp;</h3> 
          <button className='my-button'>Explore Consoles & Accessories</button>
        </div>
        <div className="container">
          <img src={k2} alt="photo" />
          <p>XBOX ONE X</p>
          <h3>Faster Processing <br/>Smoother Gameplay&nbsp;</h3> 
          <button className='my-button' >Explore Consoles & Accessories</button>
        </div>
        <div className="container">
          <img src={k3} alt="photo" />
          <p>XBOX ONE X</p>
          <h3>Faster Processing <br/>Smoother Gameplay&nbsp;</h3> 
          <button className='my-button'>Explore Consoles & Accessories</button>
        </div>
      </div>
    </div>
  );
}
    
   
    

export default Body2;