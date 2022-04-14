import React from 'react'
import imgTheMindIsWonderful from "../Assets/Icons/Colorsulfix.svg"
import { ReactComponent as BtnSearchHeader } from '../Assets/Icons/buttonSearch.svg'
import './Header.css'
import Menu from './Menu'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

const Header = () => {
    const [controllBtn, setControllBtn] = useState(false)
    const refBtn = useRef()
    const moveBtn = useRef()

    useEffect(() => {
        if (controllBtn) {
            refBtn.current.className = "hamburger hamburger--collapse is-active"
            moveBtn.current.className = 'btn-Hamburguer active'
        } else {
            refBtn.current.className = "hamburger hamburger--collapse"
            moveBtn.current.className = 'btn-Hamburguer'
        }
    }, [controllBtn])

    return (
        <div className='container-Component-Home-Header'>
            {
                controllBtn
                    ? <Menu controllBtn={controllBtn} setControllBtn={setControllBtn} />
                    : false
            }
            <section className='btn-Hamburguer' ref={moveBtn}>
                <button
                    onClick={() => setControllBtn(!controllBtn)}
                    className="hamburger hamburger--collapse"
                    style={{padding:"0"}}
                    type="button"
                    ref={refBtn}
                >
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
            </section>
            <section className='container-Logo-Header'>
                <img src={imgTheMindIsWonderful} alt="" />
            </section>
            <section className='section-Vector-Search'>
                <input type="search" name="search" placeholder='Buscar' />
                <button>
                    <BtnSearchHeader />
                </button>
            </section>
        </div>
    )
}

export default Header