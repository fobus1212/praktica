import React from 'react'; 
import "./Body3.css" 
import k1 from "./../../img/b21.png" 
import k2 from "./../../img/b22.png" 
import k3 from "./../../img/b23.png"
function Body3() { 
    return(
    <div className="body3">
      <div className="body3-content">
        <h1></h1>
        <p >&nbsp; &nbsp; THE BEAST VALUE <br/> in games and entertainment </p>
        <h2></h2>
      </div>
      <div className="container-wrapper3">
        <div className="container3">
          <img src={k1} alt="photo" />
          <p>XBOX ONE X</p>
          <h3>Faster Processing <br/>Smoother Gameplay&nbsp;</h3> 
          <button className='my-button'>Explore Consoles & Accessories</button>
        </div>
        <div className="container3">
          <img src={k2} alt="photo" />
          <p>XBOX ONE X</p>
          <h3>Faster Processing <br/>Smoother Gameplay&nbsp;</h3> 
          <button className='my-button' >Explore Consoles & Accessories</button>
        </div>
        <div className="container3">
          <img src={k3} alt="photo" />
          <p>XBOX ONE X</p>
          <h3>Faster Processing <br/>Smoother Gameplay&nbsp;</h3> 
          <button className='my-button3'>Explore Consoles & Accessories</button>
        </div>
      </div> 
      <button className="button322">
      XBOX store
    </button>
    </div>
  );
}
    
   
    

export default Body3;