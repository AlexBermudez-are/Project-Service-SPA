import React from 'react'
import ComponentAccordion from './ComponentAccordion';

const ContainerAccordion = () => {
    const arr = ["¿Cuáles son los pasos para tomar una decisión?", "¿Cuáles son los pasos para tomar una decisión?", "¿Cuáles son los pasos para tomar una decisión?"];
    return (
        <div>
            {
                arr.map(el => {
                    return <ComponentAccordion texto={el} />
                })
            }
        </div>
    )
}

export default ContainerAccordion