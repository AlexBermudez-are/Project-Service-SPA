import React from 'react'
import { ReactComponent as Empatia } from '../Assets/Icons/Empatia.svg'
import { ReactComponent as Innovacion } from '../Assets/Icons/Innovacion.svg'
import { ReactComponent as AtendimentoOnline } from '../Assets/Icons/AtendimentoOnline.svg'
import './InfoConVectores.css'

const InfoConVectores = () => {
    return (
        <div>
            <section>
                <section>
                    <Empatia />
                </section>
                <section>
                    <h3>TITULO NOTA 1</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellendus distinctio eveniet ipsum quisquam perspiciatis, dolore ratione accusantium cumque laboriosam repudiandae,
                        aliquid cupiditate, omnis sunt eaque excepturi officiis! Porro, provident labore?
                    </p>
                </section>
            </section>
            <section>
                <section>
                    <Innovacion />
                </section>
                <h3>TITULO NOTA 2</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus distinctio eveniet ipsum quisquam perspiciatis, dolore ratione accusantium cumque laboriosam repudiandae,
                    aliquid cupiditate, omnis sunt eaque excepturi officiis! Porro, provident labore?
                </p>
            </section>
            <section>
                <section>
                    <AtendimentoOnline />
                </section>
                <h3>TITULO NOTA 3</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus distinctio eveniet ipsum quisquam perspiciatis, dolore ratione accusantium cumque laboriosam repudiandae,
                    aliquid cupiditate, omnis sunt eaque excepturi officiis! Porro, provident labore?
                </p>
            </section>
        </div>
    )
}

export default InfoConVectores