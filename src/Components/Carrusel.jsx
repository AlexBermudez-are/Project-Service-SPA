/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import photo1 from '../Assets/Img/photo01.png'
import photo2 from '../Assets/Img/photo02.png'
import photo3 from '../Assets/Img/photo03.png'
import photo4 from '../Assets/Img/photo04.png'
import photo5 from '../Assets/Img/photo05.png'
import './Carrusel.css'


const arrPhotos = [photo1, photo2, photo3, photo4, photo5]
let contador = 0;
let interval;
let timeOut;

const Carrusel = () => {

    const [descripcion, setDescripcion] = useState();
    const [imgActual, setimgActual] = useState();
    const [titulo, setTitulo] = useState();

    const imgRefCarrusel = useRef(); //referencia de la imagen del carrusel
    const datosRef = useRef(); //referencia del texto de info

    const intervalFunction = () => {//interval inicial y base, prevBtn y nextBtn ejecutan esta función
        clearInterval(interval)
        interval = setInterval(() => {
            if (contador >= arrPhotos.length - 1) {

                contador++;

                contador = 0;

                imgRefCarrusel.current.className = "img-Home-Actual animacionImg"; //cambia la opacidad de 1 a 0
                if (imgActual) console.log(imgActual);
                return timeOut = setTimeout(() => {
                    imgRefCarrusel.current.className = "img-Home-Actual"; //cambia la opacidad de 0 a 1
                    setimgActual(arrPhotos[contador]);
                    console.log("khe");
                }, 500);
            }
            if (contador < arrPhotos.length - 1) {

                contador++;

                imgRefCarrusel.current.className = "img-Home-Actual animacionImg"; //cambia la opacidad de 1 a 0
                return timeOut = setTimeout(() => {
                    imgRefCarrusel.current.className = "img-Home-Actual"; //cambia la opacidad de 0 a 1
                    setimgActual(arrPhotos[contador]);
                    console.log("esta pasando");
                }, 500);
            }
        }, 5000);
    };

    useEffect(() => {
        intervalFunction(arrPhotos[0])
        setimgActual(arrPhotos[0])
    }, [])



    return (
        <div className="container-carrusel">
            {
                imgActual
                    ?
                    <div className="">
                        <section className='img-Home-Actual' ref={imgRefCarrusel}>
                            <img src={imgActual} width='100%' height="300px" alt={titulo} />
                        </section>
                        <section
                            className="datos-Title-Descripcion-Carrusel-Home"
                            ref={datosRef}
                            onMouseLeave={() => datosRef.current.className = "datos-Title-Descripcion-Carrusel-Home"}
                            onMouseEnter={(() => datosRef.current.className = "datos-Title-Descripcion-Carrusel-Home active")}>
                            <h1>{titulo}</h1>
                            <p>{descripcion}</p>
                        </section>
                    </div>
                    : <h1>cargando</h1>
            }
        </div>
    )
}

export default Carrusel