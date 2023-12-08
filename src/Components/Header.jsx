import React from 'react'
import spa_Logo from "../Assets/Img/spa_logo.png"
import { ReactComponent as BtnSearchHeader } from '../Assets/Icons/buttonSearch.svg'
import './Header.css'
import Menu from './Menu'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

const inputObj = {
    search: ""
}

const Header = () => {
    const [controllBtn, setControllBtn] = useState(false)
    const [input, setInput] = useState(inputObj)
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
                    style={{ padding: "0" }}
                    type="button"
                    ref={refBtn}
                >
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
            </section>
            <section className='container-Logo-Header'>
                <img className='img-Spa-Logo' src={spa_Logo} alt="" />
            </section>
        </div>
    )
}

export default Header