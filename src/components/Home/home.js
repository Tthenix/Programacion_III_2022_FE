import React from 'react';
import Img1 from "../Imgenes/Img1.jpg"
import "../Home/home.css"


function Home() {

  return (
      <div class="Fondo"> 
        <img src={Img1} alt="Img1" width="100%" height="100%" />
      </div>
  )
}

export default Home