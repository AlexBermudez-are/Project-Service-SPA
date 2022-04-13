import React from 'react'
import ComponentAccordion from './ComponentAccordion';
import './ContainerAccordion.css'

const ContainerAccordion = () => {
    const arr = [
        {
            textoPrincipal: "¿Cuáles son los pasos para tomar una decisión?",
            textoLabel: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint fugit ab eius, nostrum corrupti corporis vero ratione facilis repudiandae delectus animi cupiditate nesciunt unde illum deserunt mollitia recusandae optio officiis."
        },
        {
            textoPrincipal: "¿Cuáles son los pasos para tomar una decisión?",
            textoLabel: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint fugit ab eius, nostrum corrupti corporis vero ratione facilis repudiandae delectus animi cupiditate nesciunt unde illum deserunt mollitia recusandae optio officiis."
        },
        {
            textoPrincipal: "¿Cuáles son los pasos para tomar una decisión?",
            textoLabel: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint fugit ab eius, nostrum corrupti corporis vero ratione facilis repudiandae delectus animi cupiditate nesciunt unde illum deserunt mollitia recusandae optio officiis."
        }
    ];
    return (
        <div className='container-FAQ-Accordion'>
            {
                arr.map((el, index) => {
                    return <ComponentAccordion texto={el} key={index} />
                })
            }
        </div>
    )
}

export default ContainerAccordion