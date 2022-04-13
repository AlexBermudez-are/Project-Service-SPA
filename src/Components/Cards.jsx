import React from 'react'
import imgCard from '../Assets/Img/Card.jpg'
import './Cards.css'

const Cards = () => {
    return (
        <div className='container-Card'>
            <img src={imgCard} alt="card-Info-La-Mente-Es-Maravillosa" />
            <p className='tag-Class'>Nutrición</p>
            <p className='tag-Title'>Colapso mental: cuando siento el peso del mundo sobre mí</p>
            <p className='tag-Description'>
                A veces nos sentimos como Atlas,
                aquel titán al que Zeus castigó y le obligó a llevar el peso de…
            </p>
        </div>
    )
}

export default Cards