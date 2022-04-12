import React from 'react'
import imgTheMindIsWonderful from "../Assets/Icons/Colorsulfix.svg"
import { ReactComponent as BtnSearchHeader } from '../Assets/Icons/buttonSearch.svg'
import './Header.css'

const Header = () => {
    return (
        <div className='container-Component-Home-Header'>
            <section>
                <button className="hamburger hamburger--collapse" type="button">
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