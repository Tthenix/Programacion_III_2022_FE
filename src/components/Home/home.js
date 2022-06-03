import React from 'react';
import Img1 from "../Imgenes/Img1.jpg"
import "../Home/home.css"

function Home() {

  return (
      <div align="center"> 
        <div class="Fondo"> 
          <img src={Img1} width="100%" height="100%" /> 
        </div>
        <div class="Bienvenidos">
          <p>Bienvenidos</p>
        </div>
      
        <h2>1°Año</h2>
        <h2>2°Año</h2>
        <h2>3°Año</h2>
        <h2>4°Año</h2>
        <h2>5°Año</h2>
        <h2>6°Año</h2>
      </div>
  )
}

export default Home