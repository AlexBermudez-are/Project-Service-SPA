import React from 'react'
import { useState } from 'react'
import photo1 from '../Assets/Img/photo01.png'
import photo2 from '../Assets/Img/photo02.png'
import photo3 from '../Assets/Img/photo03.png'
import photo4 from '../Assets/Img/photo04.png'
import photo5 from '../Assets/Img/photo05.png'
import './Carrusel.css'

const arrPhotos = [photo1, photo2, photo3, photo4, photo5]

const Carrusel = () => {

    const [first, setfirst] = useState()

    return (
        <div>
            <img className='photos-Container' src={photo1} alt="photo_La_Mente_Es-Maravillosa" />
            <section>
                <div>
                    <h3 style={{ margin: "0" }}>Su viaje de</h3>
                    <h3 style={{ margin: "0" }}>salud emocional</h3>
                    <h3 style={{ margin: "0" }}>empieza aqui</h3>
                </div>
                <div>
                    <h4 style={{ margin: "0" }}>Conoce nuestros
                        <br />
                        profesionales con licencia
                    </h4>
                </div>
                <div>
                    <p style={{ margin: "0" }}>
                        Todos se someten a un proceso seguro de verificación y acreditación,
                        además de adherirse a estrictos códigos de ética y confidencialidad.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Carrusel