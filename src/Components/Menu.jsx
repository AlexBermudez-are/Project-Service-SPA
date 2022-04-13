/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { ReactComponent as VectorLeft } from '../Assets/Icons/VectorLeft.svg'
import './Menu.css'

const Embarazo = ["Quiero ser mamá", "Voy a ser mamá", "Parto"]
const Educacion = ["Aprende a ser mamá", "Educación para bebés", "Educacion para niños"]

const Menu = ({ controllBtn, setControllBtn }) => {

    const ControllAnimation = useRef()

    useEffect(() => {
        if (controllBtn) {
            ControllAnimation.current.className = "container-Sections-Menu-Hamburguer active"
        } else {
            ControllAnimation.current.className = "container-Sections-Menu-Hamburguer"
        }
    }, [controllBtn])

    return (
        <div className='container-Sections-Menu-Hamburguer-Modal' onClick={(e) => {
            setControllBtn(false)
        }}>
            <section className='container-Sections-Menu-Hamburguer' ref={ControllAnimation} onClick={(e) => {
                e.stopPropagation()
            }}>
                <div className='size-Menu'>
                    <section className='container-List-Embarazo'>
                        <h3 className='title-Embarazo'>Embarazo</h3>
                        <p className='line'></p>
                        {
                            Embarazo.map((el, index) => {
                                return <ul key={index} className='container-List'>
                                    <li className='li-Redirect-Pages'>
                                        <a className='a-Menu-Link' href="/asdasd">
                                            {el}
                                            <VectorLeft className='vector-Left' />
                                        </a>
                                    </li>
                                </ul>
                            })
                        }
                    </section>
                    <section className='container-List-Educacion'>
                        <h3 className='title-Educacion'>Educación</h3>
                        <p className='line'></p>
                        {
                            Educacion.map((el, index) => {
                                return <ul key={index} className='container-List'>
                                    <li className='li-Redirect-Pages'>
                                        <a className='a-Menu-Link' href="/asdasd">
                                            {el}
                                            <VectorLeft className='vector-Left' />
                                        </a>
                                    </li>
                                </ul>
                            })
                        }
                    </section>
                </div>
            </section>
        </div>
    )
}

export default Menu