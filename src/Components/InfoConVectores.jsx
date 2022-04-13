import React from 'react'
import { ReactComponent as Empatia } from '../Assets/Icons/Empatia.svg'
import { ReactComponent as Innovacion } from '../Assets/Icons/Innovacion.svg'
import { ReactComponent as AtendimentoOnline } from '../Assets/Icons/AtendimentoOnline.svg'
import './InfoConVectores.css'

const InfoConVectores = () => {
    return (
        <div>
            <section className='section-Info-Vectores-Component'>
                <div>
                    <Empatia className='component-Vector' />
                </div>
                <div className='container-Text-Icons'>
                    <h3 style={{ color: "#F778B9" }}>TITULO NOTA 1</h3>
                    <p style={{ fontWeight: "600", color: "#979797" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellendus distinctio eveniet ipsum quisquam perspiciatis, dolore ratione accusantium cumque laboriosam repudiandae,
                        aliquid cupiditate, omnis sunt eaque excepturi officiis! Porro, provident labore?
                    </p>
                </div>
            </section>
            <section className='section-Info-Vectores-Component'>
                <div>
                    <Innovacion className='component-Vector' />
                </div>
                <div className='container-Text-Icons'>
                    <h3 style={{ color: "#B378FF" }}>TITULO NOTA 2</h3>
                    <p style={{ fontWeight: "600", color: "#979797" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellendus distinctio eveniet ipsum quisquam perspiciatis, dolore ratione accusantium cumque laboriosam repudiandae,
                        aliquid cupiditate, omnis sunt eaque excepturi officiis! Porro, provident labore?
                    </p>
                </div>
            </section>
            <section className='section-Info-Vectores-Component'>
                <div>
                    <AtendimentoOnline className='component-Vector' />
                </div>
                <div className='container-Text-Icons'>
                    <h3 style={{ color: "#486DB7" }}>TITULO NOTA 3</h3>
                    <p style={{ fontWeight: "600", color: "#979797" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellendus distinctio eveniet ipsum quisquam perspiciatis, dolore ratione accusantium cumque laboriosam repudiandae,
                        aliquid cupiditate, omnis sunt eaque excepturi officiis! Porro, provident labore?
                    </p>
                </div>
            </section>
        </div>
    )
}

export default InfoConVectores