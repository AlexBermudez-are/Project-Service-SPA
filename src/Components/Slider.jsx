import React from 'react'
import { ReactComponent as FlowerLeft } from '../Assets/Icons/FlowerLeft.svg'
import { ReactComponent as FlowerMid } from '../Assets/Icons/FlowerMid.svg'
import { ReactComponent as FlowerRight } from '../Assets/Icons/FlowerRight.svg'
import { ReactComponent as Comillas } from '../Assets/Icons/Comillas.svg'
import './Slider.css'

const Slider = () => {
    return (
        <div>
            <section className='container-Testimonials-Component'>
                <div className='container-Icons-Testimonials'>
                    <FlowerLeft />
                    <FlowerMid />
                    <FlowerRight />
                </div>
                <div className='slider-Component'>
                    <section>
                        <Comillas />
                    </section>
                    <p className='testimonial-1'>Me gustaría agradecer al sitio, me ayudó de una manera inimaginable,
                        el psicólogo fue sumamente servicial y acogedor conmigo y me siento mejor conmigo mismo
                    </p>
                    <p className='testimonial-Name'> ~ Maria Montessori ~ </p>
                    <section className='container-List-Btns'>
                        <ul className='ul-List'>
                            <li style={{ color:"#696969"}}></li>
                            <li style={{ color: "#979797" }}></li>
                            <li style={{ color: "#979797" }}></li>
                        </ul>
                    </section>
                </div>
            </section>
        </div>
    )
}

export default Slider