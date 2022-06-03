import React from 'react';
import Img1 from "../Imgenes/image.jpg"
import "../Home/home.css"
import { Button } from 'bootstrap';

function Home() {

    return ( <
        div align = "center" >
        <
        div class = "fondo" >
        <
        img src = { Img1 }
        width = "100%"
        height = "100%" / >
        <
        p > Bienvenidos < /p> <
        /div> <
        div >

        <
        h2 > 2° Año < /h2> <
        h2 > 3° Año < /h2> <
        h2 > 4° Año < /h2> <
        h2 > 5° Año < /h2> <
        h2 > 6° Año < /h2> <
        /div> <
        /div>
    )
}

export default Home