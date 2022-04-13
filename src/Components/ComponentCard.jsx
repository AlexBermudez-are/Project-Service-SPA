import React from 'react'
import Cards from './Cards'
import './ComponentCard.css'

const ComponentCard = () => {
    const arr = ["", "", "", ""]
    return (
        <div className='container-Card-Component'>
            {
                arr.map((el, index) => {
                    return <Cards key={index} />
                })
            }
        </div>
    )
}

export default ComponentCard