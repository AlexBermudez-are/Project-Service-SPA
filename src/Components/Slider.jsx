import React from 'react'
import { ReactComponent as FlowerLeft } from '../Assets/Icons/FlowerLeft.svg'
import { ReactComponent as FlowerMid } from '../Assets/Icons/FlowerMid.svg'
import { ReactComponent as FlowerRight } from '../Assets/Icons/FlowerRight.svg'
import { ReactComponent as Comillas } from '../Assets/Icons/Comillas.svg'
import './Slider.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

const name = [
    {
        name: " ~ Maria Montessori ~ ",
        testimony: "Me gustaría agradecer al sitio, me ayudó de una manera inimaginable, el masajista fue sumamente servicial y acogedor conmigo y me siento mejor conmigo mismo"
    },
    {
        name: " ~ Maria Montessori Mana ~ ",
        testimony: "Me gustaría agradecer al sitio, me ayudó de una manera inimaginable, el masajista fue sumamente servicial y acogedor conmigo y me siento mejor conmigo mismo x2222222222222222222222222222222222222222222222222222"
    },
    {
        name: " ~ Maria Montessori Moriño ~ ",
        testimony: "Me gustaría agradecer al sitio, me ayudó de una manera inimaginable, el masajista fue sumamente servicial y acogedor conmigo y me siento mejor conmigo mismo x33333333333333333333333333333333333333333333333333333"
    }
]

let timeOut

const btnActiveArray = {
    vector_Left: "#696969",
    vector_Mid: "#979797",
    vector_Right: "#979797"
}

const Slider = () => {

    const [testimony, setTestimony] = useState()
    const [controllBtn, setControllBtn] = useState(btnActiveArray)

    const refSlider = useRef()

    function slideFunction(e) {
        refSlider.current.className = 'slider-Component active'

        timeOut = setTimeout(() => {
            refSlider.current.className = 'slider-Component'
            if (e.target.className === "vector_Left") {
                setTestimony(name[0])
                setControllBtn({
                    ...controllBtn,
                    vector_Left: "#696969",
                    vector_Mid: "#979797",
                    vector_Right: "#979797"
                })
            }
            if (e.target.className === "vector_Mid") {
                setTestimony(name[1])
                setControllBtn({
                    ...controllBtn,
                    vector_Left: "#979797",
                    vector_Mid: "#696969",
                    vector_Right: "#979797"
                })
            }
            if (e.target.className === "vector_Right") {
                setTestimony(name[2])
                setControllBtn({
                    ...controllBtn,
                    vector_Left: "#979797",
                    vector_Mid: "#979797",
                    vector_Right: "#696969"
                })
            }
        }, 500);
    }

    useEffect(() => {
        setTestimony(name[0])
        return () => {
            clearTimeout(timeOut)
        }
    }, [])


    return (
        <div>
            {
                testimony
                    ? <section className='container-Testimonials-Component'>
                        <div className='container-Icons-Testimonials'>
                            <FlowerLeft />
                            <FlowerMid />
                            <FlowerRight />
                        </div>
                        <div className='slider-Component' ref={refSlider}>
                            <section className='comillas'>
                                <Comillas />
                            </section>
                            <p className='testimonial-1'>
                                {testimony.testimony}
                            </p>
                            <p className='testimonial-Name'>
                                {testimony.name}
                            </p>
                            <section className='container-List-Btns'>
                                <ul className='ul-List'>
                                    <li
                                        onClick={(e) => {
                                            slideFunction(e)
                                        }}
                                        style={{ color: controllBtn.vector_Left }}
                                        className='vector_Left'
                                    >
                                    </li>
                                    <li
                                        onClick={(e) => {
                                            slideFunction(e)
                                        }}
                                        style={{ color: controllBtn.vector_Mid }}
                                        className='vector_Mid'
                                    >
                                    </li>
                                    <li
                                        onClick={(e) => {
                                            slideFunction(e)
                                        }}
                                        style={{ color: controllBtn.vector_Right }}
                                        className='vector_Right'
                                    >
                                    </li>
                                </ul>
                            </section>
                        </div>
                    </section>
                    : false
            }
        </div>
    )
}

export default Slider