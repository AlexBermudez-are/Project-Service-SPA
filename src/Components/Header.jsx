import React from 'react'
import imgTheMindIsWonderful from "../Assets/Icons/Colorsulfix.svg"
import { ReactComponent as BtnSearchHeader } from '../Assets/Icons/buttonSearch.svg'
import './Header.css'
import Menu from './Menu'
import { useState } from 'react'

const Header = () => {
    const [controllBtn, setControllBtn] = useState(false)

    return (
        <div className='container-Component-Home-Header'>
            {
                controllBtn
                    ? <Menu controllBtn={controllBtn} setControllBtn={setControllBtn} />
                    : false
            }
            <section>
                <button onClick={() => {
                    setControllBtn(!controllBtn)
                }} className="hamburger hamburger--collapse" type="button">
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
            </section>
            <section>
                <img src={imgTheMindIsWonderful} alt="" />
            </section>
            <section className='section-Vector-Search'>
                <input type="search" name="search" id="" />
                <button>
                    <BtnSearchHeader />
                </button>
            </section>
        </div>
    )
}

export default Header