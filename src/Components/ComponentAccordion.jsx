import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { ReactComponent as VectorDown } from '../Assets/Icons/VectorDown.svg'
import './ComponentAccordion.css'

const ComponentAccordion = ({ texto }) => {

    const [textController, setTextController] = useState(false)
    const spanControll = useRef()
    const textExtra = useRef()

    useEffect(() => {
        if (textController) {
            spanControll.current.className = 'texto-Accordion active'
            textExtra.current.className = 'text-Extra active'
        } else {
            spanControll.current.className = 'texto-Accordion'
            textExtra.current.className = 'text-Extra'
        }
    }, [textController])


    return (
        <div>
            <section
                className='text-FAQ-Component'
                onClick={() => setTextController(!textController)}
            >
                <h6 className='accordion-Text'>{texto.textoPrincipal}</h6>
                <VectorDown />
            </section>
            <section className='text-Extra' ref={textExtra}>
                <h6 className='texto-Accordion' ref={spanControll}>
                    {texto.textoLabel}
                </h6>
            </section>
            <div className='Line-Spacing'></div>
        </div>
    )
}

export default ComponentAccordion